import svgPaths from "../imports/svg-l7eowdwzl6";


function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute h-[40px] left-0 rounded-[10px] top-0 w-[355px]">
        <div aria-hidden="true" className="absolute border border-[#e4e4e4] border-solid inset-0 pointer-events-none rounded-[10px]" />
      </div>
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] h-[18px] justify-center leading-[0] left-[15px] not-italic text-[#828282] text-[12px] top-[20px] translate-y-[-50%] w-[172px]">
        <p className="leading-[normal]">Search type of keywords</p>
      </div>
    </div>
  );
}

function IconSearchNormal() {
  return (
    <div className="absolute inset-[27.5%_4.51%_27.5%_90.42%]" data-name="Icon/search-normal">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Icon/search-normal">
          <path d={svgPaths.p3b6f8180} fill="var(--fill-0, #828282)" id="Vector" />
          <path d={svgPaths.p1e201d00} fill="var(--fill-0, #828282)" id="Vector_2" />
          <path d="M18 0H0V18H18V0Z" fill="var(--fill-0, #828282)" id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="absolute h-[40px] left-0 top-px w-[355px]" data-name="Search bar">
      <Group />
      <IconSearchNormal />
    </div>
  );
}

function IconNotification() {
  return (
    <div className="absolute inset-[12.33%_24.59%_54.8%_73.22%]" data-name="Icon/notification">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon/notification">
          <path d={svgPaths.p36c32d00} fill="var(--fill-0, #828282)" id="Vector" />
          <path d={svgPaths.p2b147d00} fill="var(--fill-0, #828282)" id="Vector_2" />
          <path d={svgPaths.p14966500} fill="var(--fill-0, #828282)" id="Vector_3" />
          <path d="M24 0H0V24H24V0Z" fill="var(--fill-0, #828282)" id="Vector_4" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function IconArrowDown() {
  return (
    <div className="absolute bottom-[54.8%] left-[97.81%] right-0 top-[12.33%]" data-name="Icon/arrow-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon/arrow-down">
          <path d={svgPaths.p387edd40} fill="var(--fill-0, #828282)" id="Vector" />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function UserAccount() {
  return (
    <div className="absolute contents left-[946px] top-0" data-name="User Account">
      <div className="absolute bg-[#9e9e9e] left-[946px] rounded-[50px] size-[40px] top-0" data-name="Avatar" />
      <div className="absolute flex flex-col font-['Poppins:Regular',sans-serif] justify-center leading-[0] left-[996px] not-italic text-[#828282] text-[12px] text-nowrap top-[32px] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">@laurice22</p>
      </div>
      <div className="absolute flex flex-col font-['Poppins:SemiBold',sans-serif] justify-center leading-[0] left-[997px] not-italic text-[#1a1a1a] text-[14px] text-nowrap top-[10.5px] translate-y-[-50%]">
        <p className="leading-[normal] whitespace-pre">Laurice</p>
      </div>
      <IconArrowDown />
    </div>
  );
}

function Help() {
  return (
    <div className="absolute inset-[5.208%]" data-name="help">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="help">
          <path clipRule="evenodd" d={svgPaths.p2ccee580} fill="var(--fill-0, #828282)" fillRule="evenodd" id="Vector (Stroke)" />
          <g id="help_2">
            <path clipRule="evenodd" d={svgPaths.pffae180} fill="var(--fill-0, #828282)" fillRule="evenodd" id="Vector (Stroke)_2" />
            <path d={svgPaths.p1050d480} fill="var(--fill-0, #828282)" id="Vector" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Help1() {
  return (
    <div className="absolute left-[858px] size-[24px] top-[9px]" data-name="help">
      <Help />
    </div>
  );
}

export default function Navbar() {
  return (
    <div className="relative size-full" data-name="Header">
      <SearchBar />
      <IconNotification />
      <UserAccount />
      <Help1 />
      <div className="absolute h-0 left-0 top-[73px] w-[1098px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1098 1">
            <line id="Line 53" stroke="var(--stroke-0, #E4E4E4)" x2="1098" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}


