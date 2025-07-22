import { Moon, Sun } from "../Route/Route";

const ModeBtn = () => {
  return (
    <div class="color_mode mode">
      <div class="handle_mode_cont" id="handle_cont">
        <div class="mode_boolet">
          <img src={Sun} alt="" class="sun" />
          <img src={Moon} alt="" class="moon" />
        </div>
      </div>
    </div>
  );
};

export default ModeBtn;
