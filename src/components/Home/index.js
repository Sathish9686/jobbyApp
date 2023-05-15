import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home-background">
    <Header />
    <h1 className="heading">
      Find The Job That <br /> Fits Your Life
    </h1>
    <p className="discription">
      Millions of people are searching for jobs, salary <br /> information,
      company reviews. Find the job that fits your <br />
      abilities and potential.
    </p>
    <div className="buttn">
      <button type="button" className="findjobs-button">
        Find Jobs
      </button>
    </div>
  </div>
)

export default Home
