import type { Patient } from "#/features/patient/types";

function PatientInfo({ img, label, value }: { img: string; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4">
      <img src={`icons/${img}`} alt={label} className="size-10.5" />

      <div className="flex flex-col">
        <p className="text-primary">{label}</p>
        <p className="font-bold text-primary">{value}</p>
      </div>
    </div>
  );
}

function SidePanel({ patient }: { patient?: Patient | null }) {
  if (!patient) {
    return null;
  }

  return (
    <aside className="fixed top-26 right-4 bottom-4 flex w-92 flex-col gap-4">
      <div className="flex flex-col gap-6 rounded-xl bg-white p-5 shadow">
        <div className="flex flex-col items-center justify-center gap-6">
          <img src={`person/${patient.img}`} alt={patient.name} />
          <h2 className="text-center text-2xl font-extrabold text-primary">{patient.name}</h2>
        </div>

        <div className="flex flex-col gap-3">
          {patient.birthdate ? (
            <PatientInfo
              img="birth_icon/birth_icon.png"
              label="Date Of Birth"
              value={patient.birthdate}
            />
          ) : null}

          {patient.gender ? (
            <PatientInfo
              img="female_icon/female_icon.png"
              label="Gender"
              value={`${patient.gender[0].toUpperCase()}${patient.gender.slice(1)}`}
            />
          ) : null}

          {patient.contact ? (
            <PatientInfo
              img="phone_icon/phone_icon.png"
              label="Contact Info"
              value={patient.contact}
            />
          ) : null}

          {patient.emergencyContact ? (
            <PatientInfo
              img="phone_icon/phone_icon.png"
              label="Emergency Contacts"
              value={patient.emergencyContact}
            />
          ) : null}

          {patient.insurance ? (
            <PatientInfo
              img="insurance_icon/insurance_icon.png"
              label="Insurance Provider"
              value={patient.insurance}
            />
          ) : null}
        </div>
      </div>

      <div className="flex flex-col gap-5 rounded-xl bg-white p-5 shadow">
        <h2 className="text-xl font-extrabold text-primary">Lab Results</h2>

        <div className="flex flex-col">
          {patient.labResults?.map((lb) => (
            <button
              type="button"
              className="flex items-center justify-between gap-4 px-4 py-3 text-sm hover:bg-[#F6F7F8]"
            >
              <span>{lb}</span>

              <img src="icons/download.svg" alt="download" />
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}

export { SidePanel };
