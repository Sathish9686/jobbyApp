import { Redirect } from "react-router-dom";
import Header from '../Header';
import Jobs from "../Jobs";
import './index.css';

const onclickFindJobs = (props) => {
  const { history } = props;
  history.replace("/jobs");
};

const Home = (props) => (
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
      <button type="button" className="findjobs-button" onClick={() => onclickFindJobs(props)}>
        Find Jobs
      </button>
    </div>
  </div>
);

export default Home;
