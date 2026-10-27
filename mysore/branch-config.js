/* Existing tour-booking Apps Script integration is retained.
 * If your server needs a separate Mysore deployment, update bookingEndpoint here.
 * Server must validate configured Mysore fares and verify Razorpay signatures.
 * Never place a Razorpay secret key in website JavaScript.
 */
window.MYSORE_CONFIG = {
  "branch": "Mysore",
  "bookingEndpoint": "https://script.google.com/macros/s/AKfycbxZcAKgXwH5v0i2atZ4XTbqK0PPofoSzKLZG0TpkciJf0IQkT-vw-Hs01xD_msIMNHR/exec"
};
