import React from "react";
import { Link } from "react-router-dom";
import "./navbar.styles.scss";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
const NavBar = ({ sections, history, match }) => {
  return (
    <nav>
      <div></div>
      <div className="nav-options">
        <ul className="nav-list">
          {sections.map((category) => {
            const { linkUrl, title } = category;
            return (
              <li className="nav-item"key={category.id} onClick={() => history.push(`${match.url}${linkUrl}`)}>
                {title}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  sections: selectDirectorySections(state),
});
export default withRouter(connect(mapStateToProps)(NavBar));
