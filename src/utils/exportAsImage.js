import html2canvas from "html2canvas";

const exportAsImage = async (el, imageFileName) => {
  try {
    // Use a higher scale (e.g., scale 2 for higher resolution)
    const canvas = await html2canvas(el, {
      useCORS: true,
      logging: true, // optional, useful for debugging
      scale: 2, // Increase the scale for better resolution
    });

    // Create an image from the canvas with a high-quality resolution
    const image = canvas.toDataURL("image/png", 1.0); // 1.0 means no compression
    downloadImage(image, imageFileName); // Trigger the download
  } catch (error) {
    console.error("Error rendering the image:", error);
  }
};

const downloadImage = (blob, fileName) => {
  const fakeLink = window.document.createElement("a");
  fakeLink.style = "display:none;";
  fakeLink.download = fileName;

  fakeLink.href = blob;

  document.body.appendChild(fakeLink);
  fakeLink.click();
  document.body.removeChild(fakeLink);

  fakeLink.remove();
};

export default exportAsImage;