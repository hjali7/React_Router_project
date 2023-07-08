import './css/home.css'

function Home() {
  return (
    <div className='home_container'>
      <div className="home_container_heading">
        <h1>React Router</h1>
      </div>
      <div className="home_container_describ">
        <div>
          <h2>What's new in 6.4 ?</h2>
          <p>v6.4 is our most exciting release yet with new data abstractions for reads, writes, and navigation hooks to easily keep your UI in sync with your data. The new feature overview will catch you up.</p>
        </div>
        <div>
          <h2>I'm New</h2>
          <p>Start with the tutorial. It will quickly introduce you to the primary features of React Router: from configuring routes, to loading and mutating data, to pending and optimistic UI.</p>
        </div>
        <div>
          <h2>I'm on v5</h2>
          <p>The migration guide will help you migrate incrementally and keep shipping along the way. Or, do it all in one yolo commit! Either way, we've got you covered to start using the new features right away.</p>
        </div>
        <div>
          <h2>I'm Stuck!</h2>
          <p>Running into a problem? Chances are you're not the first! Explore common questions about React Router v6.</p>
        </div>
      </div>
    </div>
  )
}

export default Home