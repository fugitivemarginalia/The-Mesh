const portalContent = {
  hear: {
    color: 'rgba(255, 211, 100, 1)',
    text: "Hearing is not listening for information. Attend to wind, birds, machinery, silence, water movement. What is sounding here?",
    cta: "listen into the fold"
  },
  tell: {
    color: 'rgba(140, 255, 180, 1)',
    text: "Memory moves through place differently than through people. What story does this ground already hold?",
    cta: "speak into the fold"
  },
  walk: {
    color: 'rgba(120, 190, 255, 1)',
    text: "Walking is not transit. Notice the path itself — its surface, its edges, who else moves here.",
    cta: "step into the fold"
  },
  tend: {
    color: 'rgba(220, 170, 255, 1)',
    text: "Tending begins with noticing. What here is cared for, neglected, growing, repairing itself?",
    cta: "tend to the fold"
  }
}

function VerbPortal({ verb, onEnter, onExit }) {
    const { color, text, cta } = portalContent[verb] 
  return (
    <div className="portal" style={{ '--portal-color': color }}>
     <button className="encounter-close" onClick={onExit}>✖</button>
     <p className="portal-text">{text}</p>
     <button className="portal-cta" onClick={onEnter}>{cta}</button>
      
    </div>
  )
}

export default VerbPortal
