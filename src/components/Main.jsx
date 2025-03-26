import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Main = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState("jeetsinghb");
  const [lastUser, setLastUser] = useState(null);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(`https://api.github.com/users/${user}`);
      if (!res.ok) {
        if (res.status === 404) {
          toast.error("Enter a valid username", {
            position: "bottom-center",
          });
          throw new Error(
            "User not found, please try again with a valid username"
          );
        }
        toast.error("Oops, try again or try again later...");
        throw new Error("Oops, something went wrong... Try again");
      }
      const data = await res.json();
      console.log(data);
      setProfile(data);
      setLastUser(user);
      toast.success("Success!", {
        position: "bottom-center",
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!user.trim()) {
      toast.error("Field is required", {
        position: "bottom-center",
      });
      return;
    }
    if (user === lastUser) {
      toast("Hey! You're already viewing this profile.", {
        icon: "👀",
        position: "bottom-center",
      });
      return;
    }
    fetchProfile();
  }

  useEffect(() => {
    if (user && user !== lastUser) {
      fetchProfile();
    }
  }, [lastUser]);

  return (
    <main className="py-12 max-w-[650px] mx-auto">
      <div className="container px-4 mx-auto flex flex-col md:flex-row items-center gap-y-6">
        <div className="w-full px-4">
          <div className="g_card max-w-[290px] mx-auto bg-[#ffffff] rounded-2xl">
            <div className="g_card_top text-center p-8 pb-0">
              <div className="g_card_profile w-[120px] h-[120px] mx-auto mb-5">
                {loading || error ? (
                  <Skeleton circle height="100%" />
                ) : (
                  profile?.avatar_url && (
                    <img
                      loading="eager"
                      src={profile?.avatar_url}
                      alt={profile?.name || "Profile Image"}
                      width="120"
                      height="120"
                      className="h-[120px] w-[120px] mx-auto object-cover g_profile"
                    />
                  )
                )}
              </div>
              {loading || error ? (
                <Skeleton />
              ) : (
                <h3 className="mb-1 text-[#6c6a6a] font-medium">
                  {profile?.name}
                </h3>
              )}
              {loading || error ? (
                <Skeleton />
              ) : (
                <h4 className="mb-3 uppercase text-sm">{profile?.location}</h4>
              )}
              {loading || error ? (
                <Skeleton />
              ) : (
                <p className="text-sm">{profile?.bio}</p>
              )}
              <ul className="flex justify-between border-t border-[#f3f3f3] py-4 px-2 mt-5">
                <li className="text-sm">
                  <span className="block mb-1">Followers</span>
                  {loading || error ? <Skeleton /> : profile?.followers || 0}
                </li>
                <li className="text-sm">
                  <span className="block mb-1">Repo</span>
                  {loading || error ? <Skeleton /> : profile?.public_repos || 0}
                </li>
                <li className="text-sm">
                  <span className="block mb-1">Following</span>
                  {loading || error ? <Skeleton /> : profile?.following || 0}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full px-4">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col max-w-[290px] mx-auto pb-4"
          >
            <input
              type="text"
              name="user"
              value={user}
              onChange={(e) => setUser(e.target.value.trim())}
              className={`border-b border-[#333333] text-center p-1 focus:outline-0 placeholder:text-[1rem] placeholder:opacity-80 ${
                loading || (error && "!cursor-not-allowed opacity-70")
              }`}
              placeholder="Enter github username"
              autoComplete="off"
              disabled={loading && true}
            />
            <button
              disabled={loading || (error && true)}
              type="submit"
              className={`cursor-pointer mt-4 border-2 border-[#222222] text-[#222222] hover:bg-[#222222] hover:text-white px-2 py-3 transition ${
                loading && "!cursor-not-allowed opacity-70"
              }`}
            >
              Generate
            </button>
          </form>
          {/* Add the Download Button */}
          {/* <button
            disabled={loading || (error && true)}
            className={`w-full max-w-[290px] cursor-pointer border-2 border-[#222222] text-[#222222] hover:bg-[#222222] hover:text-white px-2 py-3 transition ${
              loading || (error && "!cursor-not-allowed opacity-70")
            }`}
          >
            Download as PNG
          </button> */}
        </div>
      </div>
    </main>
  );
};

export default Main;
