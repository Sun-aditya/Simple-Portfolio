import { launchers } from "@/data/launchers";

const orderedLaunchers = [...launchers].sort((first, second) => first.displayOrder - second.displayOrder);

export function FutureLaunchers() {
  return (
    <div className="future-launchers" aria-label="Future launchers">
      {orderedLaunchers.map((launcher) => (
        <button
          key={launcher.id}
          className="future-launchers__button"
          type="button"
          aria-label={launcher.ariaLabel}
          title={launcher.description}
        >
          <span className="future-launchers__icon" aria-hidden="true">
            {launcher.id === "ubuntu" ? "U" : "T"}
          </span>
          <span className="future-launchers__label">{launcher.label}</span>
        </button>
      ))}
    </div>
  );
}