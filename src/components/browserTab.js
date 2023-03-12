import react from 'react'

const BrowserTab = (props) => {
  return (
    <div className={props.className} style={props.style}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 7"
        preserveAspectRatio="xMinYMid meet"
      >
        <text x="6" y="6" fontSize="7" fill="#fff">
          {props.children}
        </text>
      </svg>
    </div>
  )
}

export default BrowserTab
