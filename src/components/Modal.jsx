import ReactDom from 'react-dom';

export default function Modal(props) {

  const { showExerciseDescription, handleClosedModal } = props
  const { name, description } = showExerciseDescription || {}
  
  
  return ReactDom.createPortal((
    <div className="modal-container">
      <button className="modal-underlay" onClick={handleClosedModal} />
      <div className="modal-content">
        <h6>name</h6>
        <h2 className="skill-name">{name.replaceAll('_', ' ')}</h2>
      </div>
      <div className="modal-content">
        <h6>Description</h6>
        <p>{description}</p>
      </div>
    </div>
  ),document.getElementById('portal') 
)
}
