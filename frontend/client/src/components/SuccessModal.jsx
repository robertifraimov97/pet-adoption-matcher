import "./SuccessModal.css";

export default function SuccessModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Pet added successfully! 🎉</h2>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}