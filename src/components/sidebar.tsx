import { patients } from "#/features/patient/constants";

import { Avatar } from "./avatar";

function Sidebar({ selectedPatientId }: { selectedPatientId: string }) {
  return (
    <aside className="fixed top-26 bottom-4 left-4 flex w-92 flex-col overflow-hidden rounded-2xl bg-white shadow">
      <div className="flex items-center justify-between gap-4 p-4">
        <h2 className="text-xl font-extrabold text-primary">Patients</h2>

        <button type="button">
          <img src="icons/search.svg" alt="search" />
        </button>
      </div>

      <div className="flex flex-1 flex-col overflow-y-auto">
        <ul className="flex flex-col">
          {patients.map((patient) => {
            const description = `${patient.gender[0].toUpperCase()}${patient.gender.slice(1)}, ${patient.age}`;

            return (
              <li key={`patient-${patient.id}`} className="flex flex-col">
                <div className="inline-flex flex-1 items-center justify-between gap-4 px-5 py-4 hover:bg-[#EDEDED] has-aria-selected:bg-[#D8FCF7]">
                  <a
                    href="javascript:void(0)"
                    className="flex-1 cursor-pointer"
                    aria-selected={selectedPatientId === patient.id ? "true" : undefined}
                  >
                    <Avatar
                      img={`person/${patient.img}`}
                      title={patient.name}
                      description={description}
                    />
                  </a>

                  <button type="button">
                    <img src="icons/more_horiz.svg" alt="more_horiz" />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}

export { Sidebar };
