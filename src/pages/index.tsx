import React, { useEffect, useRef } from "react"
import SEO from "../components/seo"
import styles from "./index.module.styl"
import me from "../assets/images/me.webp"

let lx = 0
let ly = 0
let image = null
let cursor = null
let canvas = null
let ctx = null
let drawingCanvas = null
let drawingCtx = null
let imageCanvas = null
let imageCtx = null
let gap = 2
let size = 70

const HomePage = () => {
  const canvasRef = useRef()
  const cursorRef = useRef()

  const draw = () => {
    imageCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height)

    imageCtx.globalCompositeOperation = 'source-over'
    imageCtx.drawImage(drawingCanvas, 0, 0)

    imageCtx.globalCompositeOperation = 'source-in'
    imageCtx.drawImage(image, 0, 0)


    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.globalCompositeOperation = 'source-over'
    ctx.fillStyle = "#1c1c1e"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.globalCompositeOperation = "lighten"
    ctx.drawImage(imageCanvas, 0, 0, imageCanvas.width, imageCanvas.height, 0, 0, canvas.width, canvas.height)
  }

  const handleMouseDown = (e) => {
    const canvasRect = canvas.getBoundingClientRect()

    lx = ((e.clientX || e.pageX) - canvasRect.left) / canvasRect.width * image.width
    ly = ((e.clientY || e.pageY) - canvasRect.top) / canvasRect.height * image.height
  }

  const handleMouseMove = (e) => {
    const canvasRect = canvas.getBoundingClientRect()

    const x = ((e.clientX || e.pageX) - canvasRect.left) / canvasRect.width * image.width
    const y = ((e.clientY || e.pageY) - canvasRect.top) / canvasRect.height * image.height

    cursor.style.left = `${e.clientX || e.pageX}px`
    cursor.style.top = `${e.clientY || e.pageY}px`

    if (e.buttons === 1) {
      const count = Math.max(Math.abs((x - lx) / gap), Math.abs((y - ly) / gap))
      const xs = (x - lx) / count
      const ys = (y - ly) / count

      for (let i = 1; i <= count; i++) {
        drawingCtx.beginPath()
        drawingCtx.arc(lx + xs * i, ly + ys * i, size, 0,  Math.PI * 2)
        drawingCtx.fill()
      }

      draw()
    }

    lx = x
    ly = y
  }

  const handleMouseUp = (e) => {
    const canvasRect = canvas.getBoundingClientRect()

    const x = ((e.clientX || e.pageX) - canvasRect.left) / canvasRect.width * image.width
    const y = ((e.clientY || e.pageY) - canvasRect.top) / canvasRect.height * image.height

    drawingCtx.beginPath()
    drawingCtx.arc(x, y, size, 0,  Math.PI * 2)
    drawingCtx.fill()

    draw()
  }

  const handleWindowResize = () => {
    if (window.innerWidth > 600) {
      canvas.height = window.innerHeight - 118
      canvas.width = canvas.height / 1.2202097235
    } else {
      canvas.width = window.innerWidth - 60
      canvas.height = canvas.width * 1.2202097235
    }

    draw()
  }

  const handleKeyPress = (e) => {
    if (e.keyCode === 91) {
      size = Math.max(10, size - 10)

      cursor.style.width = cursor.style.height = `${size * (canvas.width / image.width) * 2}px`
    } else if (e.keyCode === 93) {
      size = Math.min(100, size + 10)

      cursor.style.width = cursor.style.height = `${size * (canvas.width / image.width) * 2}px`
    }
  }

  const initializeCanvas = () => {
    canvas = canvasRef.current
    cursor = cursorRef.current

    ctx = canvas.getContext('2d')

    drawingCanvas = document.createElement('canvas')
    drawingCtx = drawingCanvas.getContext('2d')

    imageCanvas = document.createElement('canvas')
    imageCtx = imageCanvas.getContext('2d')

    drawingCanvas.width = imageCanvas.width = image.width
    drawingCanvas.height = imageCanvas.height = image.height

    drawingCtx.lineWidth = 180
    drawingCtx.lineCap = 'round'
    drawingCtx.moveTo(image.width, image.height * 0.15)
    drawingCtx.lineTo(0, image.height * 0.6)
    drawingCtx.stroke()
    drawingCtx.moveTo(0, image.height * 0.2)
    drawingCtx.lineTo(image.width, image.height * 0.75)
    drawingCtx.stroke()

    handleWindowResize()

    cursor.style.width = cursor.style.height = `${size * (canvas.width / image.width) * 2}px`
  }

  useEffect(() => {
    image = new Image()
    image.src = me
    image.onload = () => {
      initializeCanvas()

      document.addEventListener('mousedown', handleMouseDown)
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)

      window.addEventListener('resize', handleWindowResize)
      document.addEventListener('keypress', handleKeyPress)
    }

    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)

      window.removeEventListener('resize', handleWindowResize)
      document.removeEventListener('keypress', handleKeyPress)
    }
  }, [])

  return (
    <main className={styles.homePage}>
      <SEO title="Home" />

      <div className={styles.cursor} ref={cursorRef}/>

      <div className="container">
        <section className={styles.info}>
          <div className={styles.hi}>Hi, I'm</div>
          <div className={styles.name}>Hossein</div>
          <div className={styles.jobTitle}>Web Developer</div>
        </section>

        <canvas className={styles.me} ref={canvasRef} />

        <footer>
          <ul className={styles.socials}>
            <li className={styles.social}>
              <a target='_blank' rel='noopener' href="https://github.com/hmak-me">GitHub</a>
            </li>
            <li className={styles.social}>
              <a target='_blank' rel='noopener' href="https://linkedin.com/in/hmak-me">LinkedIn</a>
            </li>
            <li className={styles.social}>
              <a target='_blank' rel='noopener' href="https://twitter.com/hmakme">Twitter</a>
            </li>
            <li className={styles.social}>
              <a target='_blank' rel='noopener' href="https://instagram.com/hmak.me">Instagram</a>
            </li>
          </ul>
        </footer>
      </div>
    </main>
  )
}

export default HomePage
