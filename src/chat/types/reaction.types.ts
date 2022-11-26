const UYA_REACTIONS: { [emoji: string]: string } = {
  // Gold Bolt - UYA Players
  '940392965052989511': '936437325670539264',
  // Sheepinator Icon - UYA Casuals
  '938595002882347039': '936437402942210078',
};

const DL_REACTIONS: { [emoji: string]: string } = {
  // Dreadzone - DL Players
  '938595002928496710': '936437380016144425',
  // Arbiter Icon - DL Casuals
  '938587265691693088': '936437431106961409',
};

const SM_REACTIONS: { [emoji: string]: string } = {
  // SM_Custom_Emoji - SM Players
  '962744144986505256': '962548543095197706',
};

const FUN_REACTIONS: { [emoji: string]: string } = {
  // Fun Game / Misc roles
  // Duckie Emoji - Fun Game Players
  '938587083939921950': '1046153128594129006',
};


export const ROLE_REACTIONS = {
  ...UYA_REACTIONS,
  ...DL_REACTIONS,
  ...SM_REACTIONS,
};
