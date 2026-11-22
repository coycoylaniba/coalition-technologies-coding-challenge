import { useState } from "react";

import { Header } from "#/components/header";
import { SidePanel } from "#/components/side-panel";
import { Sidebar } from "#/components/sidebar";
import { patients } from "#/features/patient/constants";

function App() {
  const [selectedPatientId, _setSelectedPatientId] = useState<string>("004");

  const patient = patients.find((p) => p.id === selectedPatientId);

  return (
    <div className="min-h-screen w-screen bg-[#F6F7F8] p-4 px-100 pt-26">
      <Header />

      <Sidebar selectedPatientId={selectedPatientId} />

      <main className="flex flex-col gap-4">
        <section className="rounded-2xl bg-white p-4 shadow">
          <h2 className="text-xl font-extrabold text-primary">Diagnosis History</h2>
        </section>

        <section className="rounded-2xl bg-white p-4 shadow">
          <h1 className="">Hello World</h1>
        </section>
      </main>

      <SidePanel patient={patient} />
    </div>
  );
}

export { App };
