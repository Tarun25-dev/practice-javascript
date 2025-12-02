# Background Remover App

A simple web app to remove the background from images using the [remove.bg API](https://www.remove.bg/api). You can preview the result and download the image without the background.

---

## Features

- Upload any image file.
- Remove the background automatically.
- Preview the processed image.
- Download the image locally.

---

## How It Works

1. **User uploads an image** using the file input field.
2. **JavaScript reads the file** and creates a `FormData` object to send it to the remove.bg API.
3. **API request** is sent using `fetch()` with method `POST`, including:
   - API key in headers (`X-Api-Key`)
   - Uploaded image in the body (`image_file`)
   - Optional settings like `size: auto`
4. **API returns the processed image** as binary data (Blob).
5. **JavaScript converts the Blob into a temporary URL** using `URL.createObjectURL()`.
6. **The URL is assigned to the `<img>` tag** to display the image.
7. **Global variable `imageURL`** stores the Blob URL so the download button can access it.
8. **Download button** triggers a temporary `<a>` tag to save the image locally.

---

## Important Notes

- **API Key Handling:**  
  - Do **not** include your API key in GitHub.  
  - Keep a placeholder like:
    ```js
    const API_KEY = "YOUR_API_KEY_HERE";
    ```
  - For demo purposes, you can paste your key locally in VS Code before running the project.  
  - This ensures your API key stays private and secure.

- **Global Variable Usage:**  
  - `let imageURL = "";` is used globally so that the download button function can access the processed image.

- **File Upload Handling:**  
  - `fileInput.files[0]` gets the first selected image.  
  - `FormData` is required because JSON cannot send binary file data.

- **Free Tier Limits:**  
  - remove.bg free tier has limited requests per month. Be careful not to exceed them.  

---

## How to Use

1. Open `index.html` in your browser.
2. Upload an image using the **Choose File** button.
3. Click **Remove Background** to process the image.
4. Preview the result in the image display area.
5. Click **Download Image** to save the image locally.

---

## Technologies Used

- HTML
- JavaScript (ES6+)
- remove.bg API
- Fetch API
- FormData
- Blob and URL.createObjectURL()

---

## Notes for Interview/Demo

- Copy the code locally from GitHub.  
- Replace `YOUR_API_KEY_HERE` with your real API key in your local environment.  
- Run it in the browser → the background removal and download feature will work.  
- This approach keeps your key **private** while allowing a working demo.

