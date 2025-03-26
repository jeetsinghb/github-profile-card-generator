import { useEffect, useState } from "react";

import toast from "react-hot-toast";

const Main = () => {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState("mdhamid786");

  function handleSubmit(e) {
    e.preventDefault();
    if (!user) {
      toast.error("Field is required", {
        position: "bottom-center",
      });
      return;
    }
    setUser(user);
    console.log(user);
    fetchProfile();
  }

  const fetchProfile = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(`https://api.github.com/users/${user}`);
      if (!res.ok) {
        throw new Error("Oops, something went wrong... Try again");
      }
      const data = await res.json();
      console.log(data);
      console.log("success!");
      setProfile(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <main className="py-12 max-w-[650px] mx-auto">
      <div className="container px-4 mx-auto flex flex-col md:flex-row items-center gap-y-6">
        <div className="w-full px-4">
          <div className="g_card max-w-[290px] mx-auto bg-[#ffffff] rounded-2xl">
            <div className="g_card_top text-center p-8 pb-0">
              {!error && (
                <>
                  {profile?.avatar_url && (
                    <img
                      loading="eager"
                      // src="https://placehold.co/1000x1000.webp"
                      src={profile?.avatar_url}
                      alt={profile?.login}
                      width="120"
                      height="120"
                      className="max-h-[120px] w-auto mx-auto object-cover g_profile"
                    />
                  )}
                  {profile?.name && (
                    <h3 className="mt-5 text-[#6c6a6a] font-medium">
                      {profile?.name}
                    </h3>
                  )}
                  {profile?.location && (
                    <h4 className="mt-1 uppercase text-sm">
                      {profile?.location}
                    </h4>
                  )}
                  {profile?.bio && (
                    <p className="mt-3 text-sm">{profile?.bio}</p>
                  )}
                  <ul className="flex justify-between border-t border-[#f3f3f3] py-4 px-2 mt-5">
                    <li className="text-sm">
                      <span className="block mb-1">Followers</span>
                      {profile?.followers ? profile?.followers : 0}
                    </li>
                    <li className="text-sm">
                      <span className="block mb-1">Repo</span>
                      {profile?.public_repos ? profile?.public_repos : 0}
                    </li>
                    <li className="text-sm">
                      <span className="block mb-1">Following</span>
                      {profile?.following ? profile?.following : 0}
                    </li>
                  </ul>
                </>
              )}
              {error && (
                <p className="pb-8 text-sm font-medium text-[red] leading-relaxed">
                  Oops, <br /> try adding valid username or try again later...
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="w-full px-4">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center max-w-[290px] mx-auto pb-4"
          >
            <input
              type="text"
              name="user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="border-b border-[#333333] text-center p-1 focus:outline-0 placeholder:text-[1rem] placeholder:opacity-80"
              placeholder="Enter github username"
              autoComplete="off"
            />
            <button
              type="submit"
              className="cursor-pointer mt-4 bg-[#222222] border-[222222] hover text-white px-2 py-3"
            >
              Generate
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Main;
