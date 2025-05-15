const { cmd, commands } = require("../command");
const { fetchJson } = require("../lib/functions");

// Function to create the logo based on style
const createLogo = async (bot, from, message, styleUrl, name) => {
  try {
    let apiResponse = await fetchJson(`https://api-pink-venom.vercel.app/api/logo?url=${styleUrl}&name=${name}`);
    await bot.sendMessage(from, {
      'image': { 'url': apiResponse.result.download_url },
      'caption': "> *©️⚡ TENSHI-XD⚡*"
    }, { quoted: message });
  } catch (error) {
    console.error(error);
    await bot.sendMessage(from, "*_An error occurred while processing your request._*", { quoted: message });
  }
};

// 1. Command for "Blackpink" logo
cmd({
  pattern: "blackpink",
  'desc': "Create Blackpink logo",
  'react': '🎗',
  category: "fun",
  'filename': __filename
}, async (bot, message, user, { from, quoted, body, command, args, q, reply }) => {
  if (!args[0]) return reply("*_Please provide a name for the logo._*");
  const blackpinkStyleUrl = "https://en.ephoto360.com/create-a-blackpink-style-logo-with-members-signatures-810.html";
  const name = args.join(" ");
  await createLogo(bot, from, message, blackpinkStyleUrl, name);
});

// 2. Command for "Blackpink 2" logo
cmd({
  pattern: "blackpink2",
  'desc': "Create Blackpink 2 logo",
  'react': '🎗',
  category: "fun",
  'filename': __filename
}, async (bot, message, user, { from, quoted, body, command, args, q, reply }) => {
  if (!args[0]) return reply("*_Please provide a name for the logo._*");
  const blackpink2StyleUrl = "https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html";
  const name = args.join(" ");
  await createLogo(bot, from, message, blackpink2StyleUrl, name);
});

// 3. Command for "Vortex 3D" logo
cmd({
  pattern: "nova3d",
  'desc': "Create nova 3D logo",
  'react': '🎗',
  category: "fun",
  'filename': __filename
}, async (bot, message, user, { from, quoted, body, command, args, q, reply }) => {
  if (!args[0]) return reply("*_Please provide a name for the logo._*");
  const vortex3dStyleUrl = "https://en.ephoto360.com/create-glossy-silver-3d-text-effect-online-802.html";
  const name = args.join(" ");
  await createLogo(bot, from, message, vortex3dStyleUrl, name);
});

// 4. Command for "Naruto" logo
cmd({
  pattern: "naruto",
  'desc': "Create Naruto logo",
  'react': '🎗',
  category: "fun",
  'filename': __filename
}, async (bot, message, user, { from, quoted, body, command, args, q, reply }) => {
  if (!args[0]) return reply("*_Please provide a name for the logo._*");
  const narutoStyleUrl = "https://en.ephoto360.com/naruto-shippuden-logo-style-text-effect-online-808.html";
  const name = args.join(" ");
  await createLogo(bot, from, message, narutoStyleUrl, name);
});

// 5. Command for "Digital Glitch" logo
cmd({
  pattern: "digitalglitch",
  'desc': "Create Digital Glitch logo",
  'react': '🎗',
  category: "fun",
  'filename': __filename
}, async (bot, message, user, { from, quoted, body, command, args, q, reply }) => {
  if (!args[0]) return reply("*_Please provide a name for the logo._*");
  const digitalglitchStyleUrl = "https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html";
  const name = args.join(" ");
  await createLogo(bot, from, message, digitalglitchStyleUrl, name);
});

// 6. Command for "Pixel Glitch" logo
cmd({
  pattern: "pixelglitch",
  'desc': "Create Pixel Glitch logo",
  'react': '🎗',
  category: "fun",
  'filename': __filename
}, async (bot, message, user, { from, quoted, body, command, args, q, reply }) => {
  if (!args[0]) return reply("*_Please provide a name for the logo._*");
  const pixelglitchStyleUrl = "https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html";
  const name = args.join(" ");
  await createLogo(bot, from, message, pixelglitchStyleUrl, name);
});

// 7. Command for "Cyberpunk" logo
cmd({
  pattern: "cyberpunk",
  'desc': "Create Cyberpunk logo",
  'react': '🎗',
  category: "fun",
  'filename': __filename
}, async (bot, message, user, { from, quoted, body, command, args, q, reply }) => {
  if (!args[0]) return reply("*_Please provide a name for the logo._*");
  const cyberpunkStyleUrl = "https://en.ephoto360.com/create-cyberpunk-text-effect-online-835.html";
  const name = args.join(" ");
  await createLogo(bot, from, message, cyberpunkStyleUrl, name);
});

// 8. Command for "Neon Light" logo
cmd({
  pattern: "neonlight",
  'desc': "Create Neon Light logo",
  'react': '🎗',
  category: "fun",
  'filename': __filename
}, async (bot, message, user, { from, quoted, body, command, args, q, reply }) => {
  if (!args[0]) return reply("*_Please provide a name for the logo._*");
  const neonlightStyleUrl = "https://en.ephoto360.com/neon-light-text-effect-generator-770.html";
  const name = args.join(" ");
  await createLogo(bot, from, message, neonlightStyleUrl, name);
});

// 9. Command for "Smoke Text" logo
cmd({
  pattern: "smoketext",
  'desc': "Create Smoke Text logo",
  'react': '🎗',
  category: "fun",
  'filename': __filename
}, async (bot, message, user, { from, quoted, body, command, args, q, reply }) => {
  if (!args[0]) return reply("*_Please provide a name for the logo._*");
  const smoketextStyleUrl = "https://en.ephoto360.com/create-smoke-text-effect-online-810.html";
  const name = args.join(" ");
  await createLogo(bot, from, message, smoketextStyleUrl, name);
});

// 10. Command for "Fire Text" logo
cmd({
  pattern: "firetext",
  'desc': "Create Fire Text logo",
  'react': '🎗',
  category: "fun",
  'filename': __filename
}, async (bot, message, user, { from, quoted, body, command, args, q, reply }) => {
  if (!args[0]) return reply("*_Please provide a name for the logo._*");
  const firetextStyleUrl = "https://en.ephoto360.com/create-fire-text-effect-online-815.html";
  const name = args.join(" ");
  await createLogo(bot, from, message, firetextStyleUrl, name);
});

// 11. Command for "Gradient 3D" logo
cmd({
  pattern: "gradient3d",
  'desc': "Create Gradient 3D logo",
  'react': '🎗',
  category: "fun",
  'filename': __filename
}, async (bot, message, user, { from, quoted, body, command, args, q, reply }) => {
  if (!args[0]) return reply("*_Please provide a name for the logo._*");
  const gradient3dStyleUrl = "https://en.ephoto360.com/create-gradient-3d-text-effect-online-807.html";
  const name = args.join(" ");
  await createLogo(bot, from, message, gradient3dStyleUrl, name);
});

// 12. Command for "Cartoon Style" logo
cmd({
  pattern: "cartoon",
  'desc': "Create Cartoon Style logo",
  'react': '🎗',
  category: "fun",
  'filename': __filename
}, async (bot, message, user, { from, quoted, body, command, args, q, reply }) => {
  if (!args[0]) return reply("*_Please provide a name for the logo._*");
  const cartoonStyleUrl = "https://en.ephoto360.com/create-cartoon-style-text-effect-online-768.html";
  const name = args.join(" ");
  await createLogo(bot, from, message, cartoonStyleUrl, name);
});

// 13. Command for "Graffiti" logo
cmd({
  pattern: "graffiti",
  'desc': "Create Graffiti logo",
  'react': '🎗',
  category: "fun",
  'filename': __filename
}, async (bot, message, user, { from, quoted, body, command, args, q, reply }) => {
  if (!args[0]) return reply("*_Please provide a name for the logo._*");
  const graffitiStyleUrl = "https://en.ephoto360.com/create-graffiti-text-effect-online-775.html";
  const name = args.join(" ");
  await createLogo(bot, from, message, graffitiStyleUrl, name);
});

// 14. Command for "Ice Text" logo
cmd({
  pattern: "icetext",
  'desc': "Create Ice Text logo",
  'react': '🎗',
  category: "fun",
  'filename': __filename
}, async (bot, message, user, { from, quoted, body, command, args, q, reply }) => {
  if (!args[0]) return reply("*_Please provide a name for the logo._*");
  const icetextStyleUrl = "https://en.ephoto360.com/create-ice-text-effect-online-774.html";
  const name = args.join(" ");
  await createLogo(bot, from, message, icetextStyleUrl, name);
});

// 15. Command for "Sci-Fi Text" logo
cmd({
  pattern: "scifitext",
  'desc': "Create Sci-Fi Text logo",
  'react': '🎗',
  category: "fun",
  'filename': __filename
}, async (bot, message, user, { from, quoted, body, command, args, q, reply }) => {
  if (!args[0]) return reply("*_Please provide a name for the logo._*");
  const scifitextStyleUrl = "https://en.ephoto360.com/create-sci-fi-text-effect-online-776.html";
  const name = args.join(" ");
  await createLogo(bot, from, message, scifitextStyleUrl, name);
});

// 16. Command for "Watercolor" logo
cmd({
  pattern: "watercolor",
  'desc': "Create Watercolor logo",
  'react': '🎗',
  category: "fun",
  'filename': __filename
}, async (bot, message, user, { from, quoted, body, command, args, q, reply }) => {
  if (!args[0]) return reply("*_Please provide a name for the logo._*");
  const watercolorStyleUrl = "https://en.ephoto360.com/create-watercolor-text-effect-online-779.html";
  const name = args.join(" ");
  await createLogo(bot, from, message, watercolorStyleUrl, name);
});

// 17. Command for "Luxury Gold" logo
cmd({
  pattern: "luxurygold",
  'desc': "Create Luxury Gold logo",
  'react': '🎗',
  category: "fun",
  'filename': __filename
}, async (bot, message, user, { from, quoted, body, command, args, q, reply }) => {
  if (!args[0]) return reply("*_Please provide a name for the logo._*");
  const luxurygoldStyleUrl = "https://en.ephoto360.com/create-luxury-gold-text-effect-online-780.html";
  const name = args.join(" ");
  await createLogo(bot, from, message, luxurygoldStyleUrl, name);
});

// 18. Command for "Metallic" logo
cmd({
  pattern: "metallic",
  'desc': "Create Metallic logo",
  'react': '🎗',
  category: "fun",
  'filename': __filename
}, async (bot, message, user, { from, quoted, body, command, args, q, reply }) => {
  if (!args[0]) return reply("*_Please provide a name for the logo._*");
  const metallicStyleUrl = "https://en.ephoto360.com/create-metallic-text-effect-online-781.html";
  const name = args.join(" ");
  await createLogo(bot, from, message, metallicStyleUrl, name);
});

// 19. Command for "Abstract Art" logo
cmd({
  pattern: "abstractart",
  'desc': "Create Abstract Art logo",
  'react': '🎗',
  category: "fun",
  'filename': __filename
}, async (bot, message, user, { from, quoted, body, command, args, q, reply }) => {
  if (!args[0]) return reply("*_Please provide a name for the logo._*");
  const abstractartStyleUrl = "https://en.ephoto360.com/create-abstract-art-text-effect-online-782.html";
  const name = args.join(" ");
  await createLogo(bot, from, message, abstractartStyleUrl, name);
});

// 20. Command for "American Flag 3D" logo
cmd({
  pattern: "americanflag",
  'desc': "Create American Flag 3D logo",
  'react': '🎗',
  category: "fun",
  'filename': __filename
}, async (bot, message, user, { from, quoted, body, command, args, q, reply }) => {
  if (!args[0]) return reply("*_Please provide a name for the logo._*");
  const americanflagStyleUrl = "https://en.ephoto360.com/create-american-flag-3d-text-effect-online-783.html";
  const name = args.join(" ");
  await createLogo(bot, from, message, americanflagStyleUrl, name);
});
