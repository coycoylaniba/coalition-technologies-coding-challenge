import { cn } from "cn";

import { Avatar } from "#/components/avatar";

function Header() {
  return (
    <header className="fixed top-4 right-4 left-4 flex h-18 items-center gap-4 rounded-full bg-white px-8 py-3 shadow">
      <div className="flex flex-1 basis-1/5 items-stretch justify-start">
        <a href="javascript:void(0)">
          <img src="logo.svg" alt="Coalition Technologies" className="h-12" />
        </a>
      </div>

      <nav className="flex flex-2 basis-3/5 items-stretch justify-center">
        <ul className="flex justify-center gap-8">
          <li>
            <a
              href="javascript:void(0)"
              className={cn(
                "inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-3 font-bold",
                "aria-[current=page]:bg-[#01F0D0]",
              )}
            >
              <img src="icons/home.svg" alt="" />
              <span>Overview</span>
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              className={cn(
                "inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-3 font-bold",
                "aria-[current=page]:bg-[#01F0D0]",
              )}
              aria-current="page"
            >
              <img src="icons/group.svg" alt="" />
              <span>Patients</span>
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              className={cn(
                "inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-3 font-bold",
                "aria-[current=page]:bg-[#01F0D0]",
              )}
            >
              <img src="icons/calendar_today.svg" alt="" />
              <span>Schedule</span>
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              className={cn(
                "inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-3 font-bold",
                "aria-[current=page]:bg-[#01F0D0]",
              )}
            >
              <img src="icons/chat_bubble.svg" alt="" />
              <span>Message</span>
            </a>
          </li>
          <li>
            <a
              href="javascript:void(0)"
              className={cn(
                "inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-3 font-bold",
                "aria-[current=page]:bg-[#01F0D0]",
              )}
            >
              <img src="icons/credit_card.svg" alt="" />
              <span>Transactions</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="flex flex-1 basis-1/5 items-stretch justify-end gap-3">
        <Avatar
          img="person/dr_jose_simmons/dr_jose_simmons.png"
          title="Dr. Jose Simmons"
          description="General Practitioner"
        />

        <div className="w-px bg-[#EDEDED]"></div>

        <div className="flex items-center gap-3">
          <a href="javascript:void(0)">
            <img src="icons/settings.svg" alt="settings" />
          </a>

          <a href="javascript:void(0)">
            <img src="icons/more_vert.svg" alt="more_vert" />
          </a>
        </div>
      </div>
    </header>
  );
}

export { Header };
