import './index.css'

const Thumbnail = props => {
  const {imgUrl, id, onSelect} = props

  const onSend = () => {
    onSelect(id)
  }

  return (
    <li className="thumbnails" onClick={onSend}>
      <button type="button">
        <img src={imgUrl} alt="thumbnail" className="thumb-icons" />
      </button>
    </li>
  )
}

export default Thumbnail
