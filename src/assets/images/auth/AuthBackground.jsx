// material-ui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

// ==============================|| AUTH BLUR BACK SVG ||============================== //

export default function AuthBackground() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: 'absolute',
        filter: 'blur(30px)',
        zIndex: -1,
        bottom: 0,
        transform: 'inherit'
      }}
    >
      <svg width="200%" viewBox="0 -400 405 809" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M230.407 2.4C212.407 14.2667 192.407 33.3333 181.074 49.4667L175.607 57.3333H208.941H242.407V28.6667V0L238.141 0.133333C235.741 0.133333 232.274 1.06667 230.407 2.4ZM253.074 28.6667V57.3333H285.741C303.741 57.3333 318.407 57.0667 318.407 56.6667C318.407 56.2667 315.874 52.4 312.807 48.2667C295.207 24.2667 267.341 0 257.074 0H253.074V28.6667ZM123.074 49.3333C142.274 29.8667 171.741 13.3333 201.474 5.46667C206.674 4 211.474 2.8 211.874 2.8C212.407 2.66667 205.474 10 196.407 18.9333C187.474 28 176.674 40.2667 172.541 46.2667L164.807 57.3333H140.007H115.207L123.074 49.3333ZM298.274 18.2667C307.074 27.2 317.341 39.0667 321.741 45.6L329.607 57.3333H355.607L381.741 57.2L372.407 48.4C350.674 28 325.607 14.1333 295.741 5.86667C289.474 4.13333 284.007 2.66667 283.607 2.66667C283.074 2.66667 289.741 9.73333 298.274 18.2667ZM73.0739 133.6C77.8739 115.067 85.3405 98.267 96.8072 80.4003L103.074 70.667H130.141C144.941 70.667 157.074 71.067 156.941 71.6003C156.941 72.267 155.341 76.0003 153.341 80.0003L149.741 87.3337L142.674 87.067L135.741 86.9337L102.274 123.467C84.0072 143.6 68.8072 160 68.5405 160C67.7405 160 70.5405 143.2 73.0739 133.6ZM163.741 78.667C162.957 80.2828 162.21 81.8087 161.578 83.0994L161.577 83.1009C160.488 85.3241 159.741 86.8493 159.741 86.9336C159.741 87.2003 170.274 87.2003 183.207 87.067C196.141 86.8003 207.474 87.067 208.407 87.7336C209.607 88.4003 236.674 117.6 242.007 123.867C242.141 124.134 242.407 112.4 242.407 97.6003V70.667H205.074H167.741L163.741 78.667ZM253.074 126V98.267V70.667H290.274H327.341L330.941 78.5337C332.807 82.8003 334.407 86.667 334.407 87.067C334.407 87.3337 324.274 87.6003 311.741 87.467L289.074 87.3337L276.807 100.667C273.407 104.334 269.673 108.335 266.406 111.835C263.14 115.335 260.34 118.334 258.807 120L253.074 126ZM338.407 74.0001C339.074 75.7335 340.807 79.6001 342.274 82.5335L345.074 87.8668L353.341 87.6001L361.607 87.3335L394.141 122.4C412.141 141.6 426.941 157.2 427.341 156.933C428.274 155.867 422.407 129.467 418.941 119.733C414.541 107.2 405.207 88.8001 398.407 78.6668L392.941 70.6668H365.074H337.074L338.407 74.0001ZM0.00733458 249.6C0.140668 248.933 31.474 214.4 69.474 172.8L138.541 97.3334H172.274H206.007L226.941 120.667C238.541 133.467 248.274 144 248.407 144C248.666 144 257.966 134.08 269.482 121.796L270.541 120.667L292.141 97.3334H325.607L359.074 97.4668L428.274 172.4C466.407 213.6 497.741 248 498.007 248.667C498.274 249.467 484.407 250 459.741 250H420.941L379.341 203.333C356.407 177.6 336.941 156.667 336.007 156.667C335.074 156.667 315.474 178.533 292.274 205.333C269.207 232.133 249.741 254.133 249.207 254.4C248.541 254.533 228.407 232.533 204.407 205.333C180.274 178.133 160.141 156.4 159.741 156.933C126.674 195.2 82.674 245.333 80.274 247.467C77.3407 250.267 76.1407 250.4 38.4073 250.533C15.6073 250.667 -0.392665 250.267 0.00733458 249.6ZM294.141 216.933L253.074 264.533V273.6V282.666H290.274H327.474L333.607 268.533C343.207 246.666 349.207 223.866 351.607 199.333L352.807 187.333L345.207 178.8C341.074 174 337.074 170 336.274 169.733C335.607 169.6 316.674 190.8 294.141 216.933ZM149.981 181.973L150.541 181.333C155.874 175.333 160.541 170.666 161.074 170.933C161.741 171.2 180.274 191.733 202.274 216.533L242.407 261.866V272.266V282.666H204.941H167.607L161.741 270.266C151.741 249.333 144.941 224.4 141.874 198.4C141.09 192.13 141.202 192.002 149.981 181.973ZM358.807 210.266C356.274 231.2 349.474 254.533 339.207 277.6L337.074 282.666H365.607H394.141L400.807 272.266C404.407 266.666 408.407 260 409.607 257.6L411.874 253.2L390.807 229.733C379.207 216.933 368.007 204.266 366.007 201.866C363.874 199.333 361.741 197.333 361.207 197.333C360.807 197.333 359.607 203.2 358.807 210.266ZM86.9406 257.733C86.2739 255.466 90.8073 249.466 109.341 228.266C122.007 213.6 132.807 201.466 133.207 201.466C133.607 201.333 134.407 205.2 134.941 210C136.674 227.333 145.874 257.466 156.674 281.066C157.207 282.4 151.607 282.666 129.607 282.4L101.741 282L94.6739 271.333C90.8073 265.466 87.3406 259.333 86.9406 257.733ZM113.074 295.867C113.074 297.6 131.207 313.733 141.874 321.6C160.007 334.667 181.074 344.4 203.741 350.133C210.674 351.867 216.407 353.067 216.674 352.8C216.941 352.533 214.674 350.667 211.741 348.667C202.941 342.533 179.341 317.2 171.607 305.6L164.407 294.667H138.807C123.874 294.667 113.074 295.2 113.074 295.867ZM202.407 328.134C192.141 318 175.741 298 175.741 295.6C175.741 295.067 190.807 294.667 209.074 294.667H242.407V325.334C242.407 351.067 242.141 356 240.541 356C236.541 356 213.607 339.2 202.407 328.134ZM254.007 295.6C252.541 296.933 252.941 354.4 254.407 355.333C257.607 357.333 279.207 342.133 293.874 327.466C303.741 317.6 318.407 298.933 318.407 296.266C318.407 295.066 309.874 294.666 286.674 294.666C269.207 294.666 254.407 295.066 254.007 295.6ZM282.007 350C292.541 343.066 316.007 317.2 326.807 300.266L330.407 294.666H356.407C370.807 294.666 382.407 295.2 382.407 295.866C382.407 296.533 377.607 301.6 371.607 307.2C354.541 323.333 332.941 336.533 310.407 344.533C300.141 348.266 279.607 353.6 278.807 352.8C278.541 352.533 280.007 351.333 282.007 350Z"
          fill="#E30B14"
        />
      </svg>
    </Box>
  );
}
