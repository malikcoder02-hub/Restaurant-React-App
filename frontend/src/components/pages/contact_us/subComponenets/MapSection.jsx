import React from "react";

export default function MapSection() {
  return (
    <div className="w-full h-80">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193571.43851115896!2d-74.11808631419972!3d40.70562584266413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0x8081a8c3e72f9e1!2sNew%20York%2C%20USA!5e0!3m2!1sen!2s!4v1691751654747!5m2!1sen!2s"
        className="w-full h-full border-0"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}
