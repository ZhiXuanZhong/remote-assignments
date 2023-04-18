function DataRow(props) {
  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return (
    <div className="container">
      <span className="title">{props.name}</span>
      <span className="tag tag--light">
        {capitalizeFirst(props.visibility)}
      </span>
      <p className="desc">{props.description}</p>
      {props.topics.map((item, index) => (
        <span className="tag tag--blue" key={index}>
          {item}
        </span>
      ))}
    </div>
  )
}

export default DataRow
