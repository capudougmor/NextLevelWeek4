export default function experienceBar() {
  return (
    <header className="experience-bar">
      <span>0 px</span>
      <div>
        <div style={{ width: '50%' }} ></div>

        <span className="current-experience" style={{ left: '50%' }} >
          300 xp
        </span>
      </div>
      <span>600px</span>
    </header>
  )
}