import titles from './titles'

const SideMenu = ({ section, subSection, setNumber }) => (
  <div className="col-3">
    <div
      className="nav flex-column nav-pills"
      role="tablist"
      aria-orientation="vertical"
    >
      {titles[section][subSection].map((t, i) => (
        <a
          className="nav-link border-bottom border-right"
          role="tab"
          onClick={() => setNumber(i + 1)}
        >
          {t}
        </a>
      ))}
    </div>
  </div>
)

export default SideMenu
