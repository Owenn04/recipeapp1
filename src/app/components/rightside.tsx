import './rightside.css'

export default function RightSide() {
    return (
      <div className="right-side">
        <div className="right-box">
          <div className="right-header"></div>
          <div className="right-content">
            <div className="right-column">
              <p>Liked Recipes</p>
              <p>123</p> {/* Placeholder value */}
            </div>
            <div className="right-column">
              <p>Total Recipes</p>
              <p>456</p> {/* Placeholder value */}
            </div>
            <div className="right-column">
              <p>Total Users</p>
              <p>789</p> {/* Placeholder value */}
            </div>
          </div>
        </div>
      </div>
    );
  }