# Resource Monitor

This project is a basic chrome extension called **resource monitor** that shows CPU & Memory usage of the system on which the the extension is installed and also report the usage to backend

## Project Structure

- **/extension/ (Chrome extension files)**
  - **popup**: contains html, css and js files for popup which opens when clicked on the extension
    - **popup.html**: basic popup that will show when clicked on the extension
    - **popup.css**: css file for the popup
    - **popup.js**: script that will update the data into html
  - **background.js**: script that run in background and report resource usage to backend
  - **icon.png**: icon for the extension
  - **manifest.json**: the configuration file for the extension specifying required permissions and the list of resources
- **/backend/ (Demo Backend files)**
  - **app.py**: basic script that setup a CORS enabled backend to receive the usage details
  - **requirements.txt**: required packages for the app

## Installation

### Resource Monitor: Chrome Extension

This will add the extension to the chrome and clicking on the extension icon will open a popup with the usage details

- Open Chrome
- Navigate to `chrome://extensions/`
- Enable **Developer mode** (toggle in top-right corner)
- Click on **Load unpacked**
- Select the `/extension/` folder
- Pin the extension to toolbar for easier access

### Demo Flask Backend

This will startup basic backend which will log data received from the extension

- Navigate to **/backend/** directory
- (Optional) Set up a virtual environment

```bash
    python -m venv venv
```

- Install python dependencies

```bash
    pip install -r requirements
```

- Start the backend

```bash
    python app.py
```

## Demo

![Demo Popup](/assets/popup-demo.png)

### Additional details

- Update `http://localhost:5000` endpoint in `background.js` if you are using custom endpoint or using different port with demo backend
- Use specific host in `manifest.json` (in host_permissions) in production environments instead of <all_urls> which is fine for educational projects such as this but is not recommanded due to security implications.
