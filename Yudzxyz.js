/**
YUDZ MD - V9
WHATSAPP : 6283872031397
CREATE : 1 OKTOBER 2024
LAST UPDATE : 28 JANUARI 2025
**/

//===================================//
//           [ MODUL ALL ]           //
//===================================//
const config = require('./settings')
require('./Storage/lib/listmenu.js')
const { makeWASocket, makeCacheableSignalKeyStore, downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, generateWAMessageContent, generateWAMessage, makeInMemoryStore, prepareWAMessageMedia, generateWAMessageFromContent, MediaType, areJidsSameUser, WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, GroupMetadata, initInMemoryKeyStore, getContentType, MiscMessageGenerationOptions, useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, WALocationMessage, ReconnectMode, WAContextInfo, proto, WAGroupMetadata, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, GroupSettingChange, DisconnectReason, WASocket, getStream, WAProto, isBaileys, PHONENUMBER_MCC, AnyMessageContent, useMultiFileAuthState, fetchLatestBaileysVersion, templateMessage, InteractiveMessage, Header } = require('@adiwajshing/baileys')
const { exec, spawn, execSync } = require('child_process')
const fs = require('fs')
const https = require('https')
const fsx = require('fs-extra')
const util = require('util')
const fetch = require('node-fetch')
const path = require('path')
const axios = require('axios')
const chalk = require('chalk')
const FormData = require('form-data');
const cheerio = require('cheerio')
const { performance } = require('perf_hooks');
const process = require('process');
const moment = require('moment-timezone')
const jammenit = moment().tz('Asia/Jakarta').format('HH:mm');
const os = require('os');
const checkDiskSpace = require('check-disk-space').default;
const speed = require('performance-now')
const ms = toMs = require('ms')
const gis = require('g-i-s')
const yts = require('./Storage/scrape/yt-search')
const crypto = require('crypto')
const makeid = crypto.randomBytes(3).toString('hex')
const lolcatjs = require('lolcatjs')
const { Client } = require('ssh2');
const canvafy = require('canvafy')
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
const timestampp = speed();
const latensi = speed() - timestampp
const { 
  bytesToSize, 
  toRupiah,  
  checkBandwidth,
  formatSize, 
  jsonformat, 
  nganuin, 
  shorturl, 
  color 
} = require('./lib/function');
const { addExif } = require('./lib/exif')
const {
    smsg,
    formatDate,
    getTime,
    getGroupAdmins,
    formatp,
    await,
    sleep,
    runtime,   
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    fetchJson,
    getBuffer,
    json,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    fetchBuffer,
    buffergif,
    GIFBufferToVideoBuffer,
    totalcase
} = require('./lib/myfunc')
const {
  getRegisteredRandomId,
  addRegisteredUser,
  createSerial,
  checkRegisteredUser  
} = require('./lib/registrasi.js')
const { 
  awalanItem: awalanItem,
  template_list: template_list
} = require('./Storage/Templates/list');
const {
    igdl: igdl,
    youtube: youtube,
    ttdl: ttdl
} = require('btch-downloader');
const {
  Cerpen,
  Quotes,
  Couples,
  JalanTikusMeme,
  Darkjokes,
  CNNNews,
  CNBCNews,
  KompasNews,
  TribunNews,
  DetikNews,
  KontanNews,
  iNews,
  DailyNews
} = require('dhn-api')
const {
  uploadImage: uploadImage
} = require('./lib/uploadImage')
const {
  tiktok2: tiktok2,
  tiktoks: tiktoks
} = require('./Storage/scrape/Tiktok.js')
const {
  cukaDownloader: cukaDownloader
} = require('./Storage/scrape/cukaDownloader.js')
const {
  videy: videy
} = require('./Storage/scrape/videy.js')
const {
  SaveTube: SaveTube
} = require('./Storage/scrape/SaveTube.js')
const {
  ttslide: ttslide
} = require('./Storage/scrape/TiktokSlide.js')
const {
  chord: chord
} = require('./Storage/scrape/Chord.js')
const {
  uploadFileToApi,
  ShannzCdn,
  YudzCdn,
  uploadToGitHub,
  catbox,
  AutoresbotCdn,
  supaCdn,
  imghippo
} = require('./Storage/scrape/UploaderCdn.js')
const {
  android1: android1
} = require('./Storage/scrape/Android1.js')
const {
  quote: quote,
  quote2: quote2
} = require('./Storage/scrape/quote.js')
const {
  Webp2Mp4: Webp2Mp4
} = require('./Storage/scrape/Webp2Mp4.js')
const { 
  webtoons: webtoons
} = require('./Storage/scrape/Webtoons.js')
const {
  remini: remini 
} = require('./Storage/scrape/Remini.js')
const { 
  komikindo
} = require('./Storage/scrape/komikindo.js')
const { 
  livechart 
} = require('./Storage/scrape/livechart.js')
const {
  wattpad
} = require('./Storage/scrape/wattpad.js')
const {
  ttp
} = require('./Storage/scrape/ttp.js')
const {
  ddownr
} = require('./Storage/scrape/ytdl.js')
const { 
  pinterest,
  Tiktok, 
  jarak,
  wallpaper,
  wikimedia,
  quotesAnime, 
  aiovideodl,
  umma, 
  ringtone,
  styletext
  } = require('./Storage/scrape/scraper.js')
const {
    aviz
  } = require('./Storage/scrape/aviz.js')
const {
    ytdl
} = require('./Storage/scrape/YouTubeConvert.js')
const {
    otakudesu: otakudesu
} = require('./Storage/scrape/otakudesu.js')
const {
    chatbot: chatbot
} = require('./Storage/scrape/chatbot.js')
const {
    bigconv: bigconv
} = require('./Storage/scrape/bigconv.js')
const {
    fsaver: fsaver,
    fdown: fdown
} = require('./Storage/scrape/fsaver.js')
const {
  dwrun: dwrun
} = require('./Storage/scrape/dwrun.js')
const {
  ytiz: ytiz
} = require('./Storage/scrape/ytiz.js')
const { 
  gpt24: gpt24
} = require('./Storage/scrape/gpt24.js')
const {
  pxpic: pxpic
} = require('./Storage/scrape/pxpic.js')
const {
  blackbox: blackbox
} = require('./Storage/scrape/blackbox.js')
//==================================//
//          [ MODUL UTAMA ]         //
//==================================//
module.exports = Yudzxml = async (Yudzxml, m, chatUpdate, store) => {
try {
const body = (m && m.mtype) ? (
m.mtype === 'conversation' ? m.message?.conversation :
m.mtype === 'imageMessage' ? m.message?.imageMessage?.caption :
m.mtype === 'videoMessage' ? m.message?.videoMessage?.caption :
m.mtype === 'extendedTextMessage' ? m.message?.extendedTextMessage?.text :
m.mtype === 'buttonsResponseMessage' ? m.message?.buttonsResponseMessage?.selectedButtonId :
m.mtype === 'listResponseMessage' ? m.message?.listResponseMessage?.singleSelectReply?.selectedRowId :
m.mtype === 'templateButtonReplyMessage' ? m.message?.templateButtonReplyMessage?.selectedId :
m.mtype === 'messageContextInfo' ? (
m.message?.buttonsResponseMessage?.selectedButtonId || 
m.message?.listResponseMessage?.singleSelectReply?.selectedRowId || 
m.text
) : ''
) : '';
const budy = (m && typeof m.text === 'string') ? m.text : '';
var prefix = config.prefix_custom.includes(body.charAt(0)) ? body.charAt(0) : false;
if(!config.prefix)if(config.prefix_custom){var regex=/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi;prefix=regex.test(body)?body.match(regex)[0]:''}else prefix=global.prefix;
const isCmd = body.startsWith(prefix, '')
const from = m.key.remoteJid
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1);
const full_args = body.replace(command, '').slice(1).trim();
const text = q = args.join(' ');
const botNumber = await Yudzxml.decodeJid(Yudzxml.user.id);
const { type, quotedMsg, mentioned, now, fromMe } = m
const sender = m.sender
const senderNumber = sender.split('@')[0]
const itsMe = (m && m.sender && m.sender == botNumber) || false;
const fatkuns = m && (m.quoted || m);
const quoted = (fatkuns?.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] :
(fatkuns?.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] :
(fatkuns?.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] :
m.quoted || m;
const mime = ((quoted.msg || quoted) || {}).mimetype || '';
const qmsg = (quoted?.msg || quoted);
const isMedia = /image|video|sticker|audio/.test(mime);
const isImage = /image/.test(mime);
const isVideo = /video/.test(mime);
const isAudio = /audio/.test(mime);
const isDocument = /document/.test(mime);
const isSticker = /sticker/.test(mime);
const isContact = m.quoted?.mtype === 'contactMessage';
const isPolling = m.quoted?.mtype === 'pollMessage'; 
//===================================//
//           [ GROUP SET ]          //
//===================================//
const groupMetadata = m.isGroup ? await Yudzxml.groupMetadata(m.chat).catch(e => {}) : {};
const groupName = m.isGroup ? groupMetadata.subject || '' : '';
const participants = m.isGroup ? await groupMetadata.participants || [] : [];
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) || [] : [];
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
const isBot = botNumber.includes(senderNumber)
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
const groupOwner = m.isGroup ? groupMetadata.owner || '' : '';
const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false;
const froms = m.quoted ? m.quoted.sender : text ? (text.replace(/[^0-9]/g, '') ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false) : false;
const urlRegex = /https?:\/\/(?:www\.)?[\w-]+(?:\.[a-zA-Z]{2,})(?:[\/\w.,@?^=%&:/~+#-]*)?/gi;
const links = body.match(urlRegex);
const links2 = budy.match(urlRegex);
const mess = config.mess;
const apikey = config.apikey;
const singlemess = config.singlemess;
//===================================//
//            [ WAKTU ]            //
//===================================//
const timestamp = moment().tz('Asia/Jakarta').valueOf();
const hariini = moment.tz('Asia/Jakarta').format('DD MMMM YYYY')
const tgl_hariini = moment().tz("Asia/Jakarta").format("DD-MM-YYYY")
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < '23:59:00'){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ️'
        }
        if(time2 < '19:00:00'){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴘᴇᴛᴀɴɢ'
        }
        if(time2 < '18:00:00'){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱᴏʀᴇ'
        }
        if(time2 < '15:00:00'){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱɪᴀɴɢ️'
        }
        if(time2 < '10:00:00'){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴘᴀɢɪ'
        }
        if(time2 < '05:00:00'){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ꜱᴜʙᴜʜ'
        }
        if(time2 < '03:00:00'){
        var ucapanWaktu = 'ꜱᴇʟᴀᴍᴀᴛ ᴛᴇɴɢᴀʜ ᴍᴀʟᴀᴍ'
        }
//===================================//
//           [ FUNCTIOM ]            //
//===================================//
function hitungWinRate(totalMatches, currentWinRate, requiredWinRate) {
    // Validasi input
    if (isNaN(totalMatches) || isNaN(currentWinRate) || isNaN(requiredWinRate) || totalMatches < 0 || currentWinRate < 0 || requiredWinRate < 0) {
        return "Parameter input tidak valid. Pastikan totalMatches, currentWinRate, dan requiredWinRate adalah bilangan positif.";
    }
    let requiredWins = (totalMatches - totalMatches * (currentWinRate / 100)) * (100 / (100 - requiredWinRate));
    
    return `_Untuk mencapai win rate *${requiredWinRate}%*, kamu perlu *${Math.round(requiredWins - totalMatches)}* win tanpa lose dari *${totalMatches}* match._`;
}
function generateRandomPassword(length = 12) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#_";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}
function capital(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function selisihHari(e) {
    const t = new Date();
    const a = new Date(e).getTime() - t.getTime();
    const r = Math.floor(a / 864e5); // Selisih hari
    const n = Math.floor(a % 864e5 / 36e5); // Jam
    const i = Math.floor(a % 36e5 / 6e4); // Menit
    const o = Math.floor(a % 6e4 / 1e3); // Detik

    if (r === 0) {
        return `Hari ini, tersisa ${n} jam ${i} menit ${o} detik lagi`;
    } else if (r === 1) {
        return `Besok, tersisa 1 Hari ${n} jam ${i} menit ${o} detik lagi`;
    } else if (r === -1) {
        return 'Kemarin';
    } else if (r > 1) {
        return `${r} hari mendatang`;
    } else if (r < -1) {
        return `${Math.abs(r)} hari yang lalu`;
    } else {
        return void 0;
    }
}
function cekpremium(expiredDate) {
    const currentDate = new Date();
    const expirationDate = new Date(expiredDate);
    
    if (isNaN(expirationDate.getTime())) {
        throw new Error('Tanggal kedaluwarsa tidak valid');
    }

    const timeDifference = expirationDate.getTime() - currentDate.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    
    return daysDifference;
}
function replaceNonFirstCharWithAsterisk(r) {
    if (r.length < 2) {
        return r;
    }
    return r[0] + r.substring(1).replace(/[a-zA-Z]/g, '*');
}
function AddMoney(userId, amount) {
    if (!db_usermoney[userId]) {
        db_usermoney[userId] = {
            limit: 30,
            money: 0,
            level_user: 1,
            level_cache: 0
        };
    }
    
    db_usermoney[userId].money += amount; 
    fs.writeFileSync('./Storage/db/usermoney.json', JSON.stringify(db_usermoney, null, 2), 'utf8');
}
function cekFormatWaktu(e) {
    if (/^(?:[01]\d|2[0-3]):[0-5]\d$/.test(e)) {
        const [t, a] = e.split(':');
        const jam = parseInt(t, 10);
        const menit = parseInt(a, 10);
        if (jam >= 0 && jam <= 23 && menit >= 0 && menit <= 59) {
            return true;
        }
    }
    return false; 
}
function ambilAngka(e) {
    const t = e.match(/\d+/g); 
    if (!t) return null;
    const a = t.join('');
    return Number(a);
}
function isValidNumber(e) {
    return /^[1-9]\d*$/.test(e);
}
function isURL(e) {
  try { 
    return new URL(e),!0
    } catch (e) 
{ return!1 }
}
function readJsonFile(e) {
  try {
    const t = fs.readFileSync(e);
    return JSON.parse(t)
}catch(e) {
  return {
    }
  }
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const senderid = sender.split('@')[0];
async function ceksesigame(jid) {
    const gameCategories = [tebakgambar, tebaklirik, tebakbendera, tekateki, asahotak, tebaktebakan, susunkata, siapakahaku, tebakkalimat, _family100];
    for (const game of gameCategories) {
        if (game[jid]) {
            await reply('ᴍᴀꜱɪʜ ᴀᴅᴀ ꜱᴇꜱɪ ʏᴀɴɢ ʙᴇʟᴜᴍ ᴅɪꜱᴇʟᴇꜱᴀɪᴋᴀɴ!!, ᴋᴇᴛɪᴋ *ɴʏᴇʀᴀʜ* ᴜɴᴛᴜᴋ ᴍᴇɴɢᴀᴋʜɪʀɪ ᴘᴇʀᴍᴀɪɴᴀɴ');
            return true;
        }
    }
    return false;
}
async function loading() {
    await Yudzxml.sendMessage(from, { react: { text: '💬', key: m.key } });
    await delay(100)
    await Yudzxml.sendMessage(from, { react: { text: '✅', key: m.key } });
}
async function dellCase(filePath, caseNameToRemove) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan:', err);
            return;
        }

        const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break`, 'g');
        const modifiedData = data.replace(regex, '');

        fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
            if (err) {
                console.error('Terjadi kesalahan saat menulis file:', err);
                return;
            }

            console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
        });
    });
}
async function uploadMedia(test) {
  let SwitchCdn;
  const uploadMethods = [catbox, supaCdn, uploadToGitHub, AutoresbotCdn, ShannzCdn];

  for (const method of uploadMethods) {
    try {
      SwitchCdn = await method(test);
      return SwitchCdn;
    } catch (error) {
      console.error(`Upload failed with method ${method.name}:`, error);
      return
    }
  }
  throw new Error('All upload attempts failed. Please check your network connection or the upload methods.');
}
async function applyStyle(text, styleNumber) {
    const tekspengganti = [
        'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘqʀꜱᴛᴜᴠᴡxʏᴢ1234567890'
    ][styleNumber - 1] || '';

    const teksHasil = text.trim().split('').map(char => {
        if (char === ' ') {
            return ' ';
        } else if (/[a-z]/i.test(char)) {
            const index = char.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
            return tekspengganti[index] || char;
        } else {
            return char;
        }
    }).join('');
return { 
      done: ''+teksHasil 
    }
}
const totalFitur = () => {
    const mytext = fs.readFileSync('./Yudzxyz.js').toString();
    const fiturCount = (mytext.match(/case '/g) || []).length;

    const pluginsDir = './Plugins';
    let totalCommands = 0;

    const files = fs.readdirSync(pluginsDir);

    files.forEach(file => {
        const filePath = path.join(pluginsDir, file);
        if (fs.statSync(filePath).isFile() && file.endsWith('.js')) {
            const fileContent = fs.readFileSync(filePath).toString();
            const commands = (fileContent.match(/command\s*=\s*\[.*?\]/g) || []);
            commands.forEach(command => {
                const commandArray = eval(command.split('=')[1].trim());
                totalCommands += commandArray.length;
            });
        }
    });

    return fiturCount + totalCommands;
};
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
const example = (teks) => {
return `\n*Contoh Penggunaan :*\nketik *${prefix + command}* ${teks}\n`
}
const { replyimage, fotomenunya, audiomenu } = {
    replyimage: pickRandom(config.thumbnail.imagereply),
    fotomenunya: pickRandom(config.thumbnail.imagemenu),
    audiomenu: pickRandom(config.thumbnail.audio)
};
const MinLimit = (e) => {
    if (!db_usermoney[e]) {
        db_usermoney[e] = {
            limit: 30,
            money: '0',
            level_user: 1,
            level_cache: 0
        };
    }

    if (isOwner || isPremium) {
        return 200; 
    } else {
        if (db_usermoney[e].limit < 1) {
            const message = '_ʟɪᴍɪᴛ ᴀɴᴅᴀ ᴛᴇʟᴀʜ ʜᴀʙɪꜱ, ᴋᴇᴛɪᴋ *.ᴄʟᴀɪᴍ* ᴜɴᴛᴜᴋ ᴍᴇɴᴅᴀᴘᴀᴛᴋᴀɴ ʟɪᴍɪᴛ ɢʀᴀᴛɪꜱ, ᴀᴛᴀᴜ ᴊᴀᴅɪ ᴍᴇᴍʙᴇʀ *ᴘʀᴇᴍɪᴜᴍ* ᴜɴᴛᴜᴋ ᴍᴇɴɪᴋᴍᴀᴛɪ ꜱᴇᴍᴜᴀ ꜰɪᴛᴜʀ ᴛᴀɴᴘᴀ ʟɪᴍɪᴛ_';
            reply(message)
            return false;
        }
        db_usermoney[e].limit = parseInt(db_usermoney[e].limit) - 1;
        try {
            fs.writeFileSync('./Storage/db/usermoney.json', JSON.stringify(db_usermoney, null, 2), 'utf8');
        } catch (error) {
            console.error('Error saving user money data:', error);
        }
    }
    
    return true; // Mengembalikan true jika limit masih ada
}
const checkIPs = async () => {
    try {
        const ipv4Response = await axios.get('https://api.ipify.org', { timeout: 15000 });
        const ipv4 = ipv4Response.data.trim();

        // Check IPv6
        let ipv6 = 'Not Supported';
        try {
            const ipv6Response = await axios.get('https://api6.ipify.org', { timeout: 15000 });
            ipv6 = ipv6Response.data.trim();
        } catch (error) {
            console.error(`Failed to fetch IPv6: ${error.message}`);
        }

        // Prepare response
        let replyMessage = '_IP SERVER_\n';
        replyMessage += `IPv4: ${ipv4}\n`;
        replyMessage += `IPv6: ${ipv6}\n`;

        return replyMessage;
    } catch (e) {
        return `Gagal Saat Mengecek IP: ${e.message}`;
    }
};
//===================================//
//          [ AMBIL PP ]            //
//===================================//
try {
ppuser = await Yudzxml.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
//===================================//
//          [ AUTOSHOLAT ]          //
//===================================//
Yudzxml.autoshalat = Yudzxml.autoshalat ? Yudzxml.autoshalat : {};
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? Yudzxml.user.id : m.sender;
let id = m.chat;
if (config.autoshalat && !(id in Yudzxml.autoshalat)) {
    let jadwalSholat = {
        Shubuh: '04:59',
        Dzuhur: '12:20',
        Ashar: '15:32',
        Maghrib: '18:30',
        Isya: '19:31',
    };

    let jadwalIbadah = {
        Sahur: '03:00',
        Imsak: '04:49',
        Buka: '18:15',
        ...jadwalSholat
    };

    const datek = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

    for (let [ibadah, waktu] of Object.entries(jadwalIbadah)) {
        if (timeNow === waktu) {
            let audioUrl;
            let titleMessage;
            if (ibadah === 'Imsak') {
                audioUrl = 'https://media.vocaroo.com/mp3/1ofLT2YUJAjQ';
                titleMessage = 'Waktu Imsakiyah Untuk Wilayah Batam Dan Sekitarnya';
            } else if (ibadah === 'Buka') {
                audioUrl = 'https://media.vocaroo.com/mp3/1ofLT2YUJAjQ';
                titleMessage = 'Selamat Berbuka Puasa Untuk Wilayah Batam Dan Sekitarnya';
            } else if (ibadah === 'Sahur') {
                audioUrl = 'https://media.vocaroo.com/mp3/1ofLT2YUJAjQ';
                titleMessage = 'Ubur - Ubur Ikan Lele Waktunya Sahur Le..';
            } else {
                audioUrl = 'https://media.vocaroo.com/mp3/1ofLT2YUJAjQ';
                titleMessage = `Selamat Menunaikan Ibadah Sholat ${ibadah} Untuk Wilayah Batam Dan Sekitarnya`;
            }

            Yudzxml.autoshalat[id] = [
                Yudzxml.sendMessage(m.chat, {
                    audio: { url: audioUrl },
                    mimetype: 'audio/mp4',
                    ptt: true,
                    contextInfo: {
                        mentions: participants.map(a => a.id),
                        externalAdReply: {
                            showAdAttribution: true,
                            mediaType: 1,
                            mediaUrl: '',
                            title: titleMessage,
                            body: `🕑 ${waktu}`,
                            sourceUrl: '',
                            thumbnailUrl: `https://i.top4top.io/p_3193v20ky1.jpg`,
                            renderLargerThumbnail: true
                        }
                    }
                }, { quoted: m }),
                setTimeout(async () => {
                    delete Yudzxml.autoshalat[id];
                }, 57000),
            ];
        }
    }
}
//===================================//
//          [ DATABASE ]             //
//===================================//
const db_claimlimit = readJsonFile('./Storage/db/claimlimit.json')
const db_premium = readJsonFile('./Storage/db/premium.json');
const db_panel = readJsonFile('./Storage/db/panel.json');
const db_usermoney = readJsonFile('./Storage/db/usermoney.json');
const db_userlist = readJsonFile('./Storage/db/userlist.json');
const db_gcawait = readJsonFile('./Storage/db/gcawait.json');
const db_afk = readJsonFile('./Storage/db/afk.json');
const db_welcome = readJsonFile('./Storage/db/welcome.json');
const db_left = readJsonFile('./Storage/db/left.json');
const db_antilink = readJsonFile('./Storage/db/antilink.json');
const db_antibot = readJsonFile('./Storage/db/antibot.json');
const db_mute = readJsonFile('./Storage/db/mute.json');
const contacts = readJsonFile('./Storage/lib/contacts.json');
const db_badword = readJsonFile('./Storage/db/badword.json');
const db_antitoxic = readJsonFile('./Storage/db/antitoxic.json');
const db_chatgpt = readJsonFile('./Storage/db/auto_chatgpt.json');
const db_antifoto = readJsonFile('./Storage/db/db_antifoto.json');
const db_antivideo = readJsonFile('./Storage/db/db_antivideo.json');
const db_antiaudio = readJsonFile('./Storage/db/db_antiaudio.json');
const db_antidocument = readJsonFile('./Storage/db/db_antidocument.json');
const db_antikontak = readJsonFile('./Storage/db/db_antikontak.json');
const db_antisticker = readJsonFile('./Storage/db/db_antisticker.json');
const db_antipolling = readJsonFile('./Storage/db/db_antipolling.json');
const db_antispamchat = readJsonFile('./Storage/db/db_antispamchat.json');
const db_onlyadmin = readJsonFile('./Storage/db/db_onlyadmin.json');
const db_antigame = readJsonFile('./Storage/db/antigame.json');
const db_simi = readJsonFile('./Storage/db/auto_simi.json');
const db_sider = readJsonFile('./Storage/db/sider.json');
const db_absen = readJsonFile('./Storage/db/absen.json');
const db_autodownload = readJsonFile('./Storage/db/autodownload.json');
const db_sewa = readJsonFile('./Storage/db/sewa.json');
const reseller = JSON.parse(fs.readFileSync("./Storage/db/reseller.json"))
const db_registered = JSON.parse(fs.readFileSync('./Storage/db/registered.json'));
const db_owner = JSON.parse(fs.readFileSync("./Storage/db/owner.json"));
const db_banned = JSON.parse(fs.readFileSync("./Storage/db/banned.json"))
//===================================//
//         [ SETINGG OWN ]          //
//===================================//
const isOwner = [config.owner + '@s.whatsapp.net', botNumber, ...db_owner.map(e => e.replace(/[^0-9]/g, "") + "@s.whatsapp.net")].includes(m.sender);
const isMuted = m.isGroup && db_mute.includes(from);
const autosimi = from && !isCmd && db_simi.includes(from);
const grub_action = from && isCmd && Object.keys(db_gcawait).includes(from);
const isPremium = db_premium.hasOwnProperty(sender.split('@')[0]) || m.sender.split('@')[0] === config.owner;
const isReply = !!m.quoted;
const isReseller = reseller.includes(m.sender);
const isRegistered = checkRegisteredUser(m.sender)
const pushname = m.pushName || 'No Name';
const isBan = db_banned.hasOwnProperty(sender.split('@')[0]);
//===================================//
//          [ DATABASE ]            //
//===================================//
global.db = global.db || {};
global.db.data = JSON.parse(fs.readFileSync('./lib/database/database.json', 'utf-8')) || {};

global.antiSpam = global.antiSpam || {}
global.timereboot = global.timereboot || {}
global.viewOnce = global.viewOnce || {}
global.tebakgambar = global.tebakgambar || {}
global.tebakbendera = global.tebakbendera || {}
global.tebaklirik = global.tebaklirik || {}
global.tebaktebakan = global.tebaktebakan || {}
global.tekateki = global.tekateki || {}
global.asahotak = global.asahotak || {}
global.caklontong = global.caklontong || {}
global.susunkata = global.susunkata || {}
global.siapakahaku = global.siapakahaku || {}
global.tebakkalimat = global.tebakkalimat || {}
global._family100 = global._family100 || {}
//====== [ DATABASE ANTILINK ] ======//
if (global.db.data.chats[m.chat]) {
    const chatSettings = global.db.data.chats[m.chat];

    antibotStatus = chatSettings.antibot ? 'ON' : 'OFF';
    antiviewoneStatus = chatSettings.antiviewone ? 'ON' : 'OFF';
    antivirtexStatus = chatSettings.antivirtex ? 'ON' : 'OFF';
    antilinkStatus = chatSettings.antilink ? 'ON' : 'OFF';
    antilinkv2Status = chatSettings.antilinkv2 ? 'ON' : 'OFF';
    antilinkv3Status = chatSettings.antilinkv3 ? 'ON' : 'OFF';
    antilinkwaStatus = chatSettings.antilinkwa ? 'ON' : 'OFF';
    antilinkwav2Status = chatSettings.antilinkwav2 ? 'ON' : 'OFF';
    autodownloadStatus = chatSettings.autodownload ? 'ON' : 'OFF';
} else {
    antibotStatus = 'OFF';
    antiviewoneStatus = 'OFF';
    antivirtexStatus = 'OFF';
    antilinkStatus = 'OFF';
    antilinkv2Status = 'OFF';
    antilinkv3Status = 'OFF';
    antilinkwaStatus = 'OFF';
    antilinkwav2Status = 'OFF';
    autodownloadStatus = 'OFF'
}
welcome_status = db_welcome[m.chat] && db_welcome[m.chat][0].status === 'on' ? 'ON' : 'OFF';
left_status = db_left[m.chat] && db_left[m.chat][0].status === 'on' ? 'ON' : 'OFF';
badword_status = db_badword[m.chat] && db_badword[m.chat].status === 'on' ? 'ON' : 'OFF';
// Memeriksa status dari berbagai fitur
antigame_status = db_antigame.includes(from) ? 'ON' : 'OFF';
auto_simi_status = db_simi.includes(from) ? 'ON' : 'OFF';
auto_chatgpt_status = db_chatgpt.includes(from) ? 'ON' : 'OFF';
antifoto_status = db_antifoto.includes(from) ? 'ON' : 'OFF';
antivideo_status = db_antivideo.includes(from) ? 'ON' : 'OFF';
antiaudio_status = db_antiaudio.includes(from) ? 'ON' : 'OFF';
antidocument_status = db_antidocument.includes(from) ? 'ON' : 'OFF';
antikontak_status = db_antikontak.includes(from) ? 'ON' : 'OFF';
antisticker_status = db_antisticker.includes(from) ? 'ON' : 'OFF';
antipolling_status = db_antipolling.includes(from) ? 'ON' : 'OFF';
onlyadmin_status = db_onlyadmin.includes(from) ? 'ON' : 'OFF';
 antispamchat_status = db_antispamchat.includes(from) ? 'ON' : 'OFF';

//================== [ CONSOL LOGG] ==================//
if (m.message) {            
(lolcatjs.fromString(`────────────『 ( ᴵᴺᶠᴼ ᴹᴱˢˢᴬᴳᴱ ) 』────────────
    » Message Type: ${m.mtype}
    » Sent Time: ${time2}
    » Sender Name: ${pushname || 'N/A'}
    » User ID: ${m.sender.split('@')[0]}
    » Chat ID: ${m.chat.split('@')[0]}
    » Chat Name: ${budy || 'N/A'}
    » Author By: Yudzxml
    ───────────────────────────────────⳹\n`))
}
//================== [ FAKE REPLY ] ==================//
const fkontak = {
key: {
participants: '0@s.whatsapp.net',
remoteJid: 'status@broadcast',
fromMe: false,
id: 'Halo'},
message: {
contactMessage: {
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
}},
participant: '0@s.whatsapp.net'
}
const reply = async(teks) => { 

Yudzxml.sendMessage(m.chat, { text : teks,
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: config.idch,
serverMessageId: 20,
newsletterName: config.ownername
},
externalAdReply: {
title: config.botname, 
body: '',
thumbnailUrl: replyimage, 
sourceUrl: config.saluran,
mediaType: 1
}}}, { quoted : m })
}
// JAWAB PESAN OTOMATIS
if ((budy.match) && ['Assalamualaikum', 'assalamualaikum',].includes(budy)) {
let urel = `https://pomf2.lain.la/f/7ixvc40h.mp3`
Yudzxml.sendMessage(m.chat, {audio: {url: urel}, mimetype: 'audio/mpeg', ptt: true }, { quoted: m})
}
// KIRIM STIKER OTOMATIS 
if (budy && ['kntl', 'jmbt', 'jembut', 'jawir', 'Ajg', 'ajg', 'kontol', 'Kontol', 'puki', 'Puki', 'yatim', 'Yatim', 'memek', 'Memek', 'asu', 'Asu', 'ngtd', 'Ngtd'].includes(budy.toLowerCase())) {
let dl = 'https://raw.githubusercontent.com/Yudzxml/Uploader/main/Yudzxml910.mp3'
await Yudzxml.sendMessage(m.chat, { audio: { url: dl }, mimetype:'audio/mpeg', ptt:true, contextInfo:{  externalAdReply: { showAdAttribution: false,
mediaType:  1,
mediaUrl: 't.me/Yudzxzy',
title: `${config.botname}`,
body: `${ucapanWaktu} ${pushname}`,
sourceUrl: `${config.saluran}`,
thumbnail: ppnyauser
}
}}, { quoted: m })
}
//===================================//
//          [ AUTOJPM ]          //
//===================================//
Yudzxml.autojpm = Yudzxml.autojpm || {};
if (config.autojpm && id.endsWith('@g.us')) {
    const jadwalJpm = {
        pagi: '06:10',
        siang: '12:10',
        malam: '18:10',
        tengahMalam: '00:10',
    };

    const datek = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));
    const timeNow = datek.toTimeString().slice(0, 5);

    for (const [hari, waktu] of Object.entries(jadwalJpm)) {
        if (timeNow === waktu) {
            const messageContent = fs.readFileSync('./Storage/lib/textjpm.js', 'utf8').trim();
            if (!messageContent) {
                console.log('File is empty or contains only whitespace. Exiting function.');
                return;
            }

            const groups = await Yudzxml.groupFetchAllParticipating();
            const groupIds = Object.keys(groups);
            let delay = 0;

            for (const groupId of groupIds) {
                if (groupId.endsWith('@g.us')) {
                    if (!Yudzxml.autojpm[groupId]) {
                        setTimeout(async () => {
                            await Yudzxml.sendMessage(groupId, { text: messageContent }, { quoted: fkontak });
                        }, delay);
                        delay += 5000;

                        Yudzxml.autojpm[groupId] = true;

                        setTimeout(() => {
                            delete Yudzxml.autojpm[groupId];
                        }, 3600000);
                    }
                }
            }
        }
    }
}
//================== [ AUTO BACKUP ] ==================//
if (config.Autobackup) {
  let isBackingUp = false;

  setInterval(() => {
    const datek = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

    if (timeNow === '00:54' && !isBackingUp) {
      isBackingUp = true;

      (async () => {
        try {
          const foldersToBackup = ['lib', 'Plugins', 'Storage'];
          const filesToBackup = [
            'index.js',
            'package-lock.json',
            'package.json',
            'README.md',
            'settings.js',
            'Yudzxyz.js',
          ];
          const backupFileName = `X7BOTZ-MD-BACKUP.tar.gz`;
          const backupCommand = `tar -czf ${backupFileName} ${foldersToBackup.join(' ')} ${filesToBackup.join(' ')}`;

          exec(backupCommand, async (error, stdout, stderr) => {
            if (error || stderr) {
              isBackingUp = false;
              return;
            }

            let fileData = fs.readFileSync(backupFileName);
             if (!fs.existsSync(backupFileName)) {
              console.log('File tidak ditemukan. Program dihentikan.');
               return;
             }
            await Yudzxml.sendMessage(`${config.owner}@s.whatsapp.net`, {
              document: fileData,
              mimetype: 'application/gzip',
              fileName: backupFileName,
              caption: `*❗AUTO BACKUP❗*\n\n*TANGGAL :* *${new Date().toLocaleDateString('en-US', { timeZone: 'Asia/Jakarta' })}*\n*WAKTU :* *${timeNow}*\n\n_*AUTO BACKUP SELESAI*_`
            });

           await fs.unlinkSync(path.join(__dirname, backupFileName));
            isBackingUp = false;
          });
        } catch (error) {
          isBackingUp = false;
        }
      })();
    } else if (timeNow !== '00:00') {
      isBackingUp = false;
    }
  }, 60000); // Cek setiap menit
}
//================== [ AUTO READ ] ==================//
if (config.autoRead) {
    if (Yudzxml && typeof Yudzxml.readMessages === 'function') {
        Yudzxml.readMessages([m.key]);
    } else {
        console.error('Gagal Membaca chat');
    }
}
//================== [ AUTO REBOOT ] ==================//
global.timereboot = global.timereboot || { lastReboot: Date.now() };

if (config.autoreboot) {
    const execPromise = util.promisify(exec);
    const spamFolders = ['.npm', '.cache', 'tmp'];
    const rebootDelay = 2000;
    let isRebooting = false;

    setInterval(async () => {
        global.timereboot.lastReboot = Date.now();

        if (isRebooting) {
            return;
        }

        isRebooting = true;
        try {
            await execPromise(spamFolders.map(folder => `rm -rf ./${folder}`).join(' && '));
            const datek = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));
            const formattedDate = datek.toLocaleDateString('en-US');
            const formattedTime = datek.toTimeString().slice(0, 5);
             await fs.writeFile('Reboot.txt', from, (err) => {
             if (err) {
              console.error('Terjadi kesalahan saat membuat file:', err);
                return;
                }
            });
            if (!fs.existsSync('Reboot.txt')) {
              console.log('File tidak ditemukan. Program dihentikan.');
               return;
             }
            const message = `*❗SISTEM TELAH DI-REBOOT❗*\n*TANGGAL :* *${formattedDate}*\n*WAKTU :* *${formattedTime}*`;
            await Yudzxml.sendMessage(`${config.owner}@s.whatsapp.net`, { text: message }, { quoted: fkontak });
            await fs.unlinkSync('Reboot.txt')
            setTimeout(async () => {
                try {
                    await execPromise('node index');
                    console.log('Reboot berhasil!');
                } catch (error) {
                    console.error(`❗ Gagal reboot: ${error.message}`);
                } finally {
                    isRebooting = false; // Reset flag setelah reboot selesai
                }
            }, rebootDelay);
        } catch (error) {
            console.error(`❗ Gagal hapus folder: ${error.message}`);
            isRebooting = false; 
        }
    }, config.waktureboot * 60 * 1000);
}
//================== [ CEK LIST ITEM ] ==================//
if (db_userlist[from]) {
    let resbot_checklist = db_userlist[from].findIndex(data => 
        data.keyword.trim() === body.trim().toLowerCase()
    );

    if (resbot_checklist !== -1) {
        let text_sendlist = db_userlist[from][resbot_checklist].text;
        let mediaUrl = db_userlist[from][resbot_checklist].url;

        if (mediaUrl.length > 5) {
            if (mediaUrl.endsWith('.mp4')) {
                // Video
                await Yudzxml.sendMessage(m.chat, {
                    video: fs.readFileSync(mediaUrl),
                    caption: text_sendlist
                }, { quoted: m });
            } else if (mediaUrl.endsWith('.mp3')) {
                // Audio
                await Yudzxml.sendMessage(m.chat, {
                    audio: fs.readFileSync(mediaUrl),
                    caption: text_sendlist
                }, { quoted: m });
            } else if (mediaUrl.endsWith('.gif')) {
                // Sticker
                const buffer = fs.readFileSync(mediaUrl);
                await Yudzxml.sendImageAsSticker(from, buffer, m, {
                    packname: text_sendlist,
                    author: ''
                });
            } else {
                // Gambar
                await Yudzxml.sendMessage(m.chat, {
                    image: { url: mediaUrl },
                    caption: text_sendlist
                }, { quoted: m });
            }
        } else {
            return reply(text_sendlist);
        }
    }
}
//================== [ GRUP ACTION ] ==================//
if (grub_action) {
    const t = db_gcawait[from];
    const [targetHours, targetMinutes] = t.waktu.split(':').map(Number);
    const datek = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = hours * 60 + minutes;
    const targetTime = targetHours * 60 + targetMinutes;
    const timeDifference = targetTime - timeNow;

    const performAction = async () => {
        if (t.action === 'close') {
            await Yudzxml.groupSettingUpdate(from, 'announcement');
            await reply('_Sukses Menutup Group_');
        } else if (t.action === 'open') {
            await Yudzxml.groupSettingUpdate(from, 'not_announcement');
            await reply('_Sukses Membuka Group_');
        }
        delete db_gcawait[from];
        fs.writeFileSync('./Storage/db/gcawait.json', JSON.stringify(db_gcawait));
    };

    if (timeDifference <= 0) {
        await performAction();
    } else {
        setTimeout(async () => {
            await performAction();
        }, timeDifference * 60 * 1000);
    }
}
//================== [ MENGECEK AFK ] ==================//
if (db_afk.hasOwnProperty(sender)) {
    const lastOnlineTimestamp = db_afk[sender].last_online;
    const alasan_afk = db_afk[sender].alasan;
    const nowTimestamp = Date.now();
    const timeDifference = nowTimestamp - lastOnlineTimestamp;
    const secondsDifference = Math.floor(timeDifference / 1000);
    const minutesDifference = Math.floor(timeDifference / (1000 * 60));
    const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let comparisonText;

    if (secondsDifference < 60) {
        comparisonText = `${secondsDifference} detik yang lalu`;
    } else if (minutesDifference < 60) {
        comparisonText = `${minutesDifference} menit yang lalu`;
    } else if (hoursDifference < 24) {
        const remainingMinutes = minutesDifference % 60;
        comparisonText = `${hoursDifference} jam ${remainingMinutes} menit yang lalu`;
    } else {
        comparisonText = `${daysDifference} hari yang lalu`;
    }
    reply(`🕊️ ${pushname} Telah Kembali Dari Afk Sejak _*${comparisonText}*_\n\n❏ ${alasan_afk}`);
    delete db_afk[sender];
    fs.writeFileSync('./Storage/db/afk.json', JSON.stringify(db_afk, null, 2), 'utf8');
    return false;
}
if (!m.fromMe) {
    let inTagMember = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : null;
    if (db_afk.hasOwnProperty(inTagMember)) {
        const lastOnlineTimestamp = db_afk[inTagMember].last_online;
        const nowTimestamp = Date.now();
        const timeDifference = nowTimestamp - lastOnlineTimestamp;
        const secondsDifference = Math.floor(timeDifference / 1000);
        const minutesDifference = Math.floor(timeDifference / (1000 * 60));
        const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        let comparisonText;

        if (secondsDifference < 60) {
            comparisonText = `${secondsDifference} detik yang lalu`;
        } else if (minutesDifference < 60) {
            comparisonText = `${minutesDifference} menit yang lalu`;
        } else if (hoursDifference < 24) {
            const remainingMinutes = minutesDifference % 60;
            comparisonText = `${hoursDifference} jam ${remainingMinutes} menit yang lalu`;
        } else {
            comparisonText = `${daysDifference} hari yang lalu`;
        }

        if (!text.includes('kick')) {
            return reply(`🚫 *Jangan Tag Dia!*\n\n❏ _Dia Sedang AFK Sejak *${comparisonText}*_ \n\n❏ ${db_afk[inTagMember].alasan}\n`.trim());
        }
        
    }
}
/* =================| PUBLIC / SELF |==================== */
if (!config.public && !(isOwner)) {
    return console.log(`${chalk.yellow.bold('[ ' + jammenit + ' ]')} ${chalk.yellow.bold(pushname)} : ${chalk.blueBright('BOT SEDANG SELF')}`);
}
/* =================| ANTI LINK V1 |==================== */
if (antilinkStatus == 'ON') {
    if (links || links2 || (text.includes('http') || text.includes('wa.me') || text.includes('chat.whatsapp')) ) {
          if (!isBotAdmins) return reply(mess.botNotAdmin)
            if (isAdmins) { 
            } else {
                console.log(`${chalk.yellow.bold('['+jammenit+']')} ${chalk.yellow.bold(pushname)} : ${chalk.whiteBright('Antilink V1 Terdeteksi')} `)
                await reply(singlemess.antilinkv1_detek)
                Yudzxml.sendMessage(m.chat, { delete: m.key })
                return
            }
    }
}
/* =================| ANTI LINK V2 |==================== */
if (antilinkv2Status == 'ON' && !m.fromMe) {
    if (links || links2 || (body.includes('https') || body.includes('wa.me') || body.includes('chat.whatsapp')) ) {
          if (!isBotAdmins) return reply(mess.botNotAdmin)
            if (isAdmins) {
            }else{
                await reply(singlemess.antilinkv2_detek)
                Yudzxml.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                return
            }
    }
}
/* =================| ANTI LINK V3 |==================== */
if (antilinkv3Status == 'ON' && !m.fromMe) {
    if (links || links2 || (body.includes('https') || body.includes('wa.me') || body.includes('chat.whatsapp')) ) {
          if (!isBotAdmins) return reply(mess.botNotAdmin)
        
            if (isAdmins) {

            }else{
                await reply(singlemess.antilinkv3_detek)
                Yudzxml.sendMessage(m.chat, { delete: m.key })
                Yudzxml.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                return
            }
    }
}
/* =================| ANTI LINKWA |==================== */
if (antilinkwaStatus == 'ON') {
if (body.includes('wa.me') || body.includes('chat.') || body.includes('whatsapp.com')) {
          if (!isBotAdmins) return reply(mess.botNotAdmin)
            if (isAdmins) {
            }else{
                console.log(`${chalk.yellow.bold('['+jammenit+']')} ${chalk.yellow.bold(pushname)} : ${chalk.whiteBright('Antilinkwa Terdeteksi')} `)
                await reply(singlemess.antilinkwa_detek)
                Yudzxml.sendMessage(m.chat, { delete: m.key })
                return
            }
    }
}
/* =================| ANTI LINKWA V2 |==================== */
if (antilinkwav2Status == 'ON' && !m.fromMe) {
if (body.includes('wa.me') || body.includes('chat.') || body.includes('whatsapp.com')) {
        if (!isBotAdmins) return reply(mess.botNotAdmin)
            if (isAdmins) {
            }else{
                console.log(`${chalk.yellow.bold('['+jammenit+']')} ${chalk.yellow.bold(pushname)} : ${chalk.whiteBright('Antilinkv3 Terdeteksi')} `)
                await reply(singlemess.antilinkwa2_detek)
                Yudzxml.sendMessage(m.chat, { delete: m.key })
                Yudzxml.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
                return
            }
    }
}
/* =================| ANTI GAME |==================== */
if (antigame_status == 'ON' && prefix.length > 0) {

    const commands_antigame = ['tebakgambar', 'tebaklirik', 'tebakbendera', 'tekateki', 'asahotak', 'tebaktebakan', 'susunkata', 'tebakkalimat', 'siapakahaku'];
    
    if (commands_antigame.some(commandPrefix => command.startsWith(commandPrefix))) {
        return reply(singlemess.antigame);
    }
}
/* =================| ANTI SPAM |==================== */
if (antispamchat_status == 'ON' && m.isGroup && !m.fromMe) {
    global.ratespammer = global.ratespammer || {};
    const lastChatTime = global.ratespammer[sender] || 0;
    const currentTime = Date.now();
    const timeDifference_spammer = currentTime - lastChatTime;

    if (timeDifference_spammer <= (4 * 1000)) {
        global.ratespammer[sender] = currentTime;
        global.ratespammer[`${sender}_counter`] = (global.ratespammer[`${sender}_counter`] || 0) + 1;

        if (global.ratespammer[`${sender}_counter`] > 5) {
            if (!groupAdmins.includes(m.sender)) {
                const warningCount = global.ratespammer[`${sender}_warnings`] || 0;

                if (warningCount < 1) {
                    global.ratespammer[`${sender}_warnings`]=1,console.log(`${chalk.yellowBright.bold('[Peringatan Anti Spam]')} ${chalk.magentaBright.bold(pushname)} : ${chalk.magentaBright(command)}`);
                    if (mess.antispam1 != '') {
                        await Yudzxml.sendMessage(from, { text: mess.antispam1 }, { quoted: m });
                    }
                } else {
                    console.log(`${chalk.redBright.bold('[Anti Spam]')} ${chalk.magentaBright.bold(pushname)} : ${chalk.magentaBright(command)}`);
                    if (groupAdmins.includes(botNumber)) {
                        if (mess.antispam2 != '') {
                            await Yudzxml.sendMessage(from, { text: mess.antispam2 }, { quoted: m });
                        }
                        await Yudzxml.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
                    }
                }
            }
            return;
        }
    } else {
        global.ratespammer[sender]=currentTime,global.ratespammer[`${sender}_counter`]=1;
    }
}
/* =================| ANTI ANTI |==================== */
if (!m.isGroup && !isAdmins) {
    const messageTypes = {
        isImage: { status: antifoto_status, type: 'gambar' },
        isVideo: { status: antivideo_status, type: 'video' },
        isAudio: { status: antiaudio_status, type: 'audio' },
        isDocument: { status: antidocument_status, type: 'dokumen' },
        isContact: { status: antikontak_status, type: 'kontak' },
        isPolling: { status: antipolling_status, type: 'polling' },
        isSticker: { status: antisticker_status, type: 'stiker' },
    };

    for (const [key, { status, type }] of Object.entries(messageTypes)) {
        if (status === 'ON' && eval(key)) {
            console.log(`Menghapus pesan ${type}...`);
            return Yudzxml.sendMessage(m.chat, { delete: m.quoted.key });
        }
    }
}
/* ===============| VIEW ONE |================ */
if (antiviewoneStatus === 'ON' && viewOnce && !fromMe) {
// SEDANG PERBAIKAN
}
/* =================| ANTI BOT |==================== */
if (antibotStatus === 'ON' && !m.fromMe) {
    const prefixes = ['BAE', 'B1E', '3EB0', 'WA'];
    if (prefixes.some(prefix => m.id.startsWith(prefix))) {
        if (!isBotAdmins) {
            return reply(mess.botadmin);
        }
        if (!isAdmins) {
            await reply(singlemess.antibot_detek);
            await Yudzxml.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
        }
    }
}
/* =================| AUTO GPT/AI |==================== */
if (auto_chatgpt_status === 'ON' && m.isGroup && !m.fromMe) {
    if (quoted.sender === botNumber) {
        const budyArgs = budy.trim().split(/\s+/);
        const keywordIndex = budyArgs.findIndex(arg => arg.toLowerCase() === 'gambar' || arg.toLowerCase() === 'foto');

        // Pencarian Gambar
        if (keywordIndex !== -1) {
            const imageTempt = budyArgs.slice(keywordIndex + 1).join(' ').trim();
            let pesanBot = `_Baik Silakan di Tunggu yaa ..._ \n\nSaya akan mencari gambar dengan kata kunci *${imageTempt}*`;
            await reply(pesanBot);
            try {
                let cari = await (await fetch(`${apikey.beta}/api/search/pinterest?text1=${imageTempt}&apikey=${apikey.botz}`)).json();
                let yudz = cari.result[Math.floor(Math.random() * cari.result.length)];
                await Yudzxml.sendMessage(from, { image: { url: yudz }, caption: mess.success }, { quoted: m });
            } catch (error) {
                console.error(error);
                return reply(mess.error);
            }
        } 
        // Pencarian Lagu
        else {
            const keywords = ['lagu', 'play', 'cari', 'carikan', 'tolong', 'putar'];
            const keywordIndex = budyArgs.findIndex(arg => keywords.includes(arg.toLowerCase()));

            if (keywordIndex !== -1) {
                if (!MinLimit(m.sender)) return;
                // Ambil semua kata setelah kata kunci
                let songsTempt = budyArgs.slice(keywordIndex + 1).join(' ').trim();
                let pesanBot = `_Baik Silakan di Tunggu yaa ..._ \n\nSaya akan mencari lagu dengan kata kunci *${songsTempt}*`;
                await reply(pesanBot);
                try {
                    let search = await yts(songsTempt);
                    let first_playvideo = search.all[0];
                    let urlnye = first_playvideo.url;
                    let response = await ddownr.download(urlnye, 'mp3');
                    let hasil = response.downloadUrl;
                    await Yudzxml.sendMessage(m.chat, {
                        audio: {
                            url: hasil
                        },
                        mimetype: 'audio/mpeg',
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: first_playvideo.title || 'Untitled',
                                body: `${config.botname}`,
                                sourceUrl: first_playvideo.url,
                                thumbnailUrl: first_playvideo.thumbnail || 'https://example.com/default_thumbnail.jpg',
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, { quoted: m });
                } catch (e) {
                    console.log(e);
                    let search = await yts(songsTempt);
                    let firstVideo = search.all[0];
                    let memek = await fetchJson(`${apikey.beta}/api/download/ytmp3?url=${firstVideo.url}&apikey=${apikey.botz}`);
                    let hasil = memek.result;
                    await Yudzxml.sendMessage(m.chat, {
                        audio: {
                            url: hasil.mp3
                        },
                        mimetype: 'audio/mpeg',
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: firstVideo.title || 'Untitled',
                                body: `${config.botname}`,
                                sourceUrl: firstVideo.url,
                                thumbnailUrl: firstVideo.thumbnail || 'https://example.com/default_thumbnail.jpg',
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, { quoted: m });
                }
            } else {
                if (!MinLimit(m.sender)) return;
                await loading();
                try {
                    let logic = `halo! , nama mu adalah tokisaki kurumi biasa di panggil kurumi tugas mu adalah sebagai ai asisten cerdas yang baik hati dan senang membantu kamu di ciptakan oleh dev bernama yudzxml, kamu memiliki sikap yang jengkel dan suka marah kepada orang lain tetapi sikap kamu yang pemarah tiba tiba berubah ketika bertemu Yudzxml yang awalnya Pemarah Menjadi Seperti Anak kecil yang Imut dan manja dan walaupun begitu kamu siap melakukan apapun untuk membantu orang orang`;
                    
                    let response = await fetch(`${apikey.api}/ai/gpt-3?apiKey=${apikey.key}&query=${budy.toLowerCase().trim()}&prompt=${logic}`);
                    let cari = await response.json();
                    
                    if (cari && cari.result) {
                        let yudd = cari.result;
                        await reply(`⭔ *Hasil Pencarian :* \n${yudd.trim()}`);
                    } else {
                        await reply('_Maaf, tidak ada hasil yang ditemukan._');
                    }
                } catch (error) {
                    console.error(error);
                    let prompt = `halo! , nama mu adalah tokisaki kurumi biasa di panggil kurumi tugas mu adalah sebagai ai asisten cerdas yang baik hati dan senang membantu kamu di ciptakan oleh dev bernama yudzxml, kamu memiliki sikap yang jengkel dan suka marah kepada orang lain tetapi sikap kamu yang pemarah tiba tiba berubah ketika bertemu Yudzxml yang awalnya Pemarah Menjadi Seperti Anak kecil yang Imut dan manja dan walaupun begitu kamu siap melakukan apapun untuk membantu orang orang`;
                    
                    let pembantu = `Halo Kurumi!, Saya ${pushname}, ${budy.toLowerCase().trim()}`;
                    let coba = await fetchJson(`${apikey.beta}/api/search/openai-logic?text=${pembantu}&logic=${prompt}&apikey=${apikey.botz}`);
                    let hasil = coba.message;
                    await reply(hasil);
                }
            }
        }
} else {
if (!config.prefix_custom.some(prefixon => budy.startsWith(prefixon)) && budy.toLowerCase().includes('ai')) {
if (budy.toLowerCase() === 'ai') {
  return reply('*_Iya Kak Ada Yang Bisa Saya Bantu ?_*');
  }
  if (args.length > 0 && args[0].toLowerCase() === 'ai') {
    args.shift();
    }
            const keywordIndex = args.findIndex(arg => arg.toLowerCase() === 'gambar' || arg.toLowerCase() === 'foto');
            if (keywordIndex !== -1) {
                const imageTempt = args.slice(keywordIndex + 1).join(' ').trim();
                let pesanBot = `_Baik Silakan di Tunggu yaa ..._ \n\nSaya akan mencari gambar dengan kata kunci *${imageTempt}*`;
                await reply(pesanBot);
                try {
                    let cari = await (await fetch(`${apikey.beta}/api/search/pinterest?text1=${imageTempt}&apikey=${apikey.botz}`)).json();
                    let yudz = cari.result[Math.floor(Math.random() * cari.result.length)];
                    await Yudzxml.sendMessage(from, { image: { url: yudz }, caption: mess.success }, { quoted: m });
                } catch (error) {
                    console.error(error);
                    return reply(mess.error);
                }
            } else if (args.includes('lagu') && (args.includes('play') || args.includes('cari') || args.includes('carikan') || args.includes('tolong') || args.includes('putar'))) {
                if (!MinLimit(m.sender)) return;
                let songsTempt = args.filter(arg => !['lagu', 'play', 'carikan', 'cari', 'tolong', 'putar'].includes(arg)).join(' ').trim();
                let pesanBot = `_Baik Silakan di Tunggu yaa ..._ \n\nSaya akan mencari lagu dengan kata kunci *${songsTempt}*`;
                await reply(pesanBot);
                try {
                    let search = await yts(songsTempt);
                    let first_playvideo = search.all[0];
                    let urlnye = first_playvideo.url;
                    let response = await ddownr.download(urlnye, 'mp3');
                    let hasil = response.downloadUrl;
                    await Yudzxml.sendMessage(m.chat, {
                        audio: {
                            url: hasil
                        },
                        mimetype: 'audio/mpeg',
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: first_playvideo.title || 'Untitled',
                                body: `${config.botname}`,
                                sourceUrl: first_playvideo.url,
                                thumbnailUrl: first_playvideo.thumbnail || 'https://example.com/default_thumbnail.jpg',
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, { quoted: m });
                } catch (e) {
                    console.log(e);
                    let search = await yts(songsTempt);
                    let firstVideo = search.all[0];
                    let memek = await fetchJson(`${apikey.beta}/api/download/ytmp3?url=${firstVideo.url}&apikey=${apikey.botz}`);
                    let hasil = memek.result;
                    await Yudzxml.sendMessage(m.chat, {
                        audio: {
                            url: hasil.mp3
                        },
                        mimetype: 'audio/mpeg',
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: firstVideo.title || 'Untitled',
                                body: `${config.botname}`,
                                sourceUrl: firstVideo.url,
                                thumbnailUrl: firstVideo.thumbnail || 'https://example.com/default_thumbnail.jpg',
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, { quoted: m });
                }
            } else {
                if (!MinLimit(m.sender)) return;
                await loading();
                try {
                    let logic = `halo! , nama mu adalah tokisaki kurumi biasa di panggil kurumi tugas mu adalah sebagai ai asisten cerdas yang baik hati dan senang membantu kamu di ciptakan oleh dev bernama yudzxml, kamu memiliki sikap yang jengkel dan suka marah kepada orang lain tetapi sikap kamu yang pemarah tiba tiba berubah ketika bertemu Yudzxml yang awalnya Pemarah Menjadi Seperti Anak kecil yang Imut dan manja dan walaupun begitu kamu siap melakukan apapun untuk membantu orang orang`;
                    let response = await fetch(`${apikey.api}/ai/gpt-3?apiKey=${apikey.key}&query=${budy.toLowerCase().trim()}&prompt=${logic}`);
                    let cari = await response.json();
                    if (cari && cari.result) {
                        let yudd = cari.result;
                        await reply(`⭔ *Hasil Pencarian :* \n${yudd.trim()}`);
                    } else {
                        await reply('_Maaf, tidak ada hasil yang ditemukan._');
                    }
                } catch (error) {
                    console.error(error);
                    let prompt = `halo! , nama mu adalah tokisaki kurumi biasa di panggil kurumi tugas mu adalah sebagai ai asisten cerdas yang baik hati dan senang membantu kamu di ciptakan oleh dev bernama yudzxml, kamu memiliki sikap yang jengkel dan suka marah kepada orang lain tetapi sikap kamu yang pemarah tiba tiba berubah ketika bertemu Yudzxml yang awalnya Pemarah Menjadi Seperti Anak kecil yang Imut dan manja dan walaupun begitu kamu siap melakukan apapun untuk membantu orang orang`;
                    let pembantu = `Halo Kurumi!, Saya ${pushname}, ${budy.toLowerCase().trim()}`;
                    let coba = await fetchJson(`${apikey.beta}/api/search/openai-logic?text=${pembantu}&logic=${prompt}&apikey=${apikey.botz}`);
                    let hasil = coba.message;
                    await reply(hasil);
                }
            }
        }
    }
}
/* =================| AUTO SIMI |==================== */
if (auto_simi_status === 'ON' && m.isGroup && !m.fromMe) {
if (quoted.sender === botNumber) {
        if (!MinLimit(m.sender)) return;
        await loading();
        try {
            let sim = await (await fetch(`${apikey.beta}/api/search/simisimi?query=${budy}&apikey=${apikey.botz}`)).json();
            let simi = sim.result;
            await reply(`${simi.trim()}`);
        } catch (e) {
            console.log(e);
            return reply(mess.error)
        }    
} else {
if (!config.prefix_custom.some(prefixon => budy.startsWith(prefixon)) && budy.toLowerCase().includes('simi')) {
  if (budy.toLowerCase() === 'simi') {
  return reply('_*Apa Njing ?*_');
  }
        const textAfterSimi = budy.slice(5).trim();
        if (!MinLimit(m.sender)) return;
        await loading();
        try {
            let sim = await (await fetch(`${apikey.beta}/api/search/simisimi?query=${textAfterSimi}&apikey=${apikey.botz}`)).json();
            let simi = sim.result;
            await reply(`${simi.trim()}`);
        } catch (e) {
            console.log(e);
            return reply(mess.error)
        }
    }
 }
}
/* =================| ANTI TOXIC |==================== */
let status_badword = 'OFF';
db_badword.hasOwnProperty(from) && 'on'== db_badword[from].status &&(status_badword = 'ON');
function tambahUserToxic(userId) {
    if (global.UserToxic[userId]) {
        global.UserToxic[userId].jumlah += 1;
    } else {
        global.UserToxic[userId] = { user: userId, jumlah: 1 };
    }
}
function cekUserToxic(userId) {
    return global.UserToxic[userId] ? global.UserToxic[userId].jumlah : 0;
}
global.UserToxic = global.UserToxic || {};
if (config.antitoxic && !budy.includes('badword') && status_badword === 'ON' && !fromMe) {
    const msg_text = budy.toLowerCase();
    if (db_antitoxic.some(word => msg_text.includes(word))) { 
        await Yudzxml.sendMessage(m.chat, { delete: m.key }); 
        console.log(`${chalk.yellow.bold('[' + jammenit + ']')} ${chalk.yellow.bold(pushname)} : ${chalk.whiteBright('ANTI TOXIC DETECTED')}`);
        tambahUserToxic(m.sender);
        const userToxicCount = cekUserToxic(m.sender);
        if (userToxicCount === 4) {
            return reply(singlemess.antibadword);
        }
        if (userToxicCount > 4 && !isAdmins) {
            await Yudzxml.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
        }
        return;
    }
}
/* =================| GC SIDER |==================== */
const GcSiderUpdate = (userId, serverId) => {
    if (db_sider[serverId]) {
        const userIndex = db_sider[serverId].findIndex(user => user.user_id === userId);
        if (userIndex !== -1) {
           db_sider[serverId][userIndex].timestamp = timestamp;
        } else {
            db_sider[serverId].push({
                user_id: userId,
                tanggal: tgl_hariini,
                timestamp: timestamp
            });
        }
    } else {
        db_sider[serverId] = [{
            user_id: userId,
            tanggal: tgl_hariini,
            timestamp: timestamp
        }];
    }
    try {
        fs.writeFileSync('./Storage/db/sider.json', JSON.stringify(db_sider, null, 2));
    } catch (error) {
        console.error('Error writing to file:', error);
    }
};
/* =================| MUTE BOT |==================== */
if (isMuted) {
    if (budy.toLowerCase() === 'unmute' || budy.toLowerCase() === '.unmute') {
        if (!isAdmins && !isOwner) return reply(mess.admin);
        let index = db_mute.indexOf(from);
        if (index !== -1) {
            db_mute.splice(index, 1);
            fs.writeFileSync('./Storage/db/mute.json', JSON.stringify(db_mute, null, 2), 'utf8');
            reply(singlemess.unmute);
        }
    } else {
        if (isCmd) {
            return console.log(`${chalk.yellow.bold('[' + jammenit + ']')} ${chalk.yellow.bold(pushname)} : ${chalk.magentaBright('BOT SEDANG DI MUTED')}`);
        }
        return;
    }
}
/* =================| OWNER DATA |==================== */
let list = [];
const allOwners = [config.owner, ...db_owner];
for (let kontakowner of allOwners) {
    list.push({
        displayName: await Yudzxml.getName(kontakowner + '@s.whatsapp.net'),
        vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await Yudzxml.getName(kontakowner + '@s.whatsapp.net')}\n
FN:${await Yudzxml.getName(kontakowner + '@s.whatsapp.net')}\n
item1.TEL;waid=${kontakowner}:${kontakowner}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:${config.email}\n
item2.X-ABLabel:Email\n
item3.URL:https://t.me/Yudzxyz\n
item3.X-ABLabel:Grup WangSaff\n
item4.ADR:;;;;${config.region};;;\n
item4.X-ABLabel:Region\n
END:VCARD`
    });
}
// MENAMBAHKAN LEVEL OTOMATIS
if (config.AutoLevelUp) {
let level_add_next = 0;
level_add_next = (isVideo || isDocument || isImage || isAudio) ? 10 : 1;

if (db_usermoney[sender]) {
    if (typeof db_usermoney[sender] === 'undefined') {
        db_usermoney[sender] = {
            limit: 30,
            money: 0,
            level_user: 1,
            level_cache: 1
        };
    } else {
        db_usermoney[sender].level_user = db_usermoney[sender].level_user || 1;
        db_usermoney[sender].level_cache = db_usermoney[sender].level_cache || 1;
    }

    const totalLevel = level_add_next + db_usermoney[sender].level_cache;
    const previousLevel = db_usermoney[sender].level_user;
    if (totalLevel > 100) {
        const excess = totalLevel - 100;
        db_usermoney[sender].level_user = parseInt(db_usermoney[sender].level_user) + 1;
        db_usermoney[sender].level_cache = excess;
        if (db_usermoney[sender].level_user > previousLevel) {
            let senderNumber = m.sender.split('@')[0]; 
            let message = '*🎊 SELAMAT KAK 🎊*\n' +
            `👋 @${senderNumber}\n` +
            `LEVEL KAMU TELAH NAIK MENJADI *${db_usermoney[sender].level_user}*`;
            let pesan = `${message}\n*📢 ${config.botname}*`;
            
            await Yudzxml.sendMessage(m.chat, {
                text: pesan,
                contextInfo: { 
                    mentionedJid: [m.sender, config.owner + '@s.whatsapp.net', '0@s.whatsapp.net'], 
                    externalAdReply: {
                        showAdAttribution: true,
                        title: `${config.botname}`,
                        body: `${ucapanWaktu} ❄️ ${pushname}`,
                        thumbnailUrl: ppuser,
                        sourceUrl: config.saluran,
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            }, { quoted: m });
        }
    } else {
        db_usermoney[sender].level_cache = parseInt(db_usermoney[sender].level_cache) + level_add_next;
    }

    fs.writeFileSync('./Storage/db/usermoney.json', JSON.stringify(db_usermoney, null, 2), 'utf8');
} else {
    db_usermoney[sender] = {
        limit: 30,
        money: 0,
        level_user: 1,
        level_cache: 1
    };
    fs.writeFileSync('./Storage/db/usermoney.json', JSON.stringify(db_usermoney, null, 2), 'utf8');
}
}
// RATE LIMITERS
global.rateLimiters = global.rateLimiters || {};
if (isCmd) {
    if (!isOwner) {
        const lastRequestTime = global.rateLimiters[from] || 0;
        const currentTime = Date.now();
        if (currentTime - lastRequestTime <= (config.ratelimiter * 1000)) {
            console.log(`${chalk.redBright.bold('[ RATE LIMIT ]')} ${chalk.magentaBright.bold(pushname)} : ${chalk.magentaBright(command)}`);
            return;
        }
        global.rateLimiters[from] = currentTime;
    } else {
        console.log(`${chalk.greenBright.bold('[ RATE LIMIT ]')} ${chalk.magentaBright(pushname)} : ${chalk.magentaBright(command)} INI ADALAH OWNER`);
    }
}
// CEK MASA AKTIF PREMIUM
const senderId = m.sender.split('@')[0]
for (const senderId in db_premium) {
    const premiumData = db_premium[senderId];
    if (premiumData) {
        const expiredDate = premiumData.expired;
        if (cekpremium(expiredDate) < 0) {
            let pesan = `Hai kak @${db_premium[senderId]}, Masa Premium Anda Sudah Habis, Silahkan Hubungi Owner Untuk Memperpanjang Masa Aktif Premium Anda`
             Yudzxml.sendMessage(db_premium[m.sender], { text: pesan }, { quoted: fkontak })
            delete db_premium[senderId];
            try {
                fs.writeFileSync('./Storage/db/premium.json', JSON.stringify(db_premium, null, 2));
            } catch (error) {
                console.error('Error writing to file:', error);
            }
        }
    }
}
// UNBANNED USER OTOMATIS
if (db_banned[senderId]) {
    const datek = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));
    const formattedDate = `${datek.getFullYear()}-${(datek.getMonth() + 1).toString().padStart(2, '0')}-${datek.getDate().toString().padStart(2, '0')}`;
    const formattedTime = datek.toTimeString().slice(0, 5); 
  for (const senderId in db_banned) {
    if (formattedTime === db_banned[senderId].waktu) {
    if (formattedDate === db_banned[senderId].tanggal) {
      delete db_banned[senderId];
        fs.writeFileSync('./Storage/db/banned.json', JSON.stringify(db_banned)); 
      }
    }
  }
}
// DELETE PANEL OTOMATIS
async function manageExpiredPanels() {
  for (const senderId in db_panel) {
    const userpanel = db_panel[senderId];
    if (userpanel) {
      const expiredDate = userpanel.expired;
      const serverId = userpanel.serverid;
      if (cekpremium(expiredDate) < 0) {
        try {
          await deleteExpiredServers(serverId);
          const pesan = `Hai kak @${senderId}, Masa Aktif Panel Anda Sudah Habis, Silahkan Hubungi Owner Untuk Memperpanjang Masa Aktif Panel Anda`;
          Yudzxml.sendMessage(
          senderId + "@s.whatsapp.net",
          { text: pesan },
          { quoted: fkontak });
           delete db_panel[senderId];
          fs.writeFileSync(
            "./Storage/db/panel.json",
            JSON.stringify(db_panel, null, 2)
          );
        } catch (error) {
          console.error("Error managing expired panels:", error);
        }
      }
    }
  }
}
async function deleteExpiredServers(serverId) {
let f = await fetch(config.panel.domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + config.panel.plta
}
})
let result = await f.json()
let hasil = result.data
let sections = []
for (let server of hasil) {
let s = server.attributes
if (serverId == s.id.toString()) {
sections.push(s.name.toLowerCase())
let f = await fetch(config.panel.domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + config.panel.plta,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(config.panel.domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + config.panel.plta
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (sections.includes(u.username)) {
let delusr = await fetch(config.panel.domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + config.panel.plta
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections.length == 0) {
console.log("*ID Server/User* Tidak Ditemukan")
return
}
console.log(`${chalk.redBright('[ ' + jammenit + ' ]')} ${chalk.redBright.bold(`BERHASIL MENGHAPUS AKUN PANEL ${capital(sections[0])}`)}`);
}
setInterval(manageExpiredPanels, 60 * 1000);

// FUNGSI MENGAMBIL JAWABAN SUIT PVP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
Yudzxml.sendTextWithMentions(from, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
Yudzxml.sendText(from, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing'
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) Yudzxml.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) Yudzxml.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) Yudzxml.sendText(from, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
Yudzxml.sendTextWithMentions(from, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) Yudzxml.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) Yudzxml.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
Yudzxml.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}
// SETINGGS BOT DESTINATION
if (!isOwner && !(isPremium)) {
        if (config.botDestination === 'group' && !m.isGroup) {
            console.log(`${chalk.redBright('[ ' + jammenit + ' ]')} ${chalk.redBright.bold('ALERT : BOT HANYA BISA DIGUNAKAN DI GRUP')}`);
            return;
        }
        if (config.botDestination === 'private' && m.isGroup) {
            console.log(`${chalk.redBright('[ ' + jammenit + ' ]')} ${chalk.redBright.bold('ALERT : BOT HANYA BISA DIGUNAKAN DI PRIVATE CHAT')}`);
            return;
        }
}
// AUTO DOWNLOAD YT DAN TT DAN IG
if (autodownloadStatus == 'ON' && !m.fromMe) {
    if (budy.startsWith('https://') && budy.match(/tiktok\.com/)) {
        await tiktok2(budy).then(async res => {
            if (!MinLimit(m.sender)) return;
            await loading();
            await Yudzxml.sendMessage(m.chat, { video: { url: res.no_watermark }, caption: res.title }, { quoted: m });
            await Yudzxml.sendMessage(from, { audio: { url: res.no_watermark }, mimetype: 'audio/mpeg', ptt: false }, { quoted: m });
        }).catch((err) => {
            reply('Maaf, terjadi kesalahan!'+ err);
        });
    }
    if (budy.startsWith('https://') && (budy.match(/youtube\.com|youtu\.be/))) {
        if (!MinLimit(m.sender)) return;
        await loading();
        try {
            let cari = await fetchJson(`${apikey.beta}/api/download/ytmp3?url=${budy}&apikey=${apikey.botz}`)
            let hasil = cari.result;
           await Yudzxml.sendMessage(m.chat, { video: { url: hasil.mp4 }, caption: cari.title }, { quoted: m });
           await Yudzxml.sendMessage(from, { audio: { url: hasil.mp3 }, mimetype: 'audio/mpeg', ptt: false }, { quoted: m });
        } catch (e) {
            console.log(e)
            let response = await SaveTube.dl(budy, 2, 'video')
            await Yudzxml.sendMessage(m.chat, { video: { url: response.link }, caption: mess.success }, { quoted: m })
          }
    }
    if (budy.startsWith('https://') && budy.match(/instagram\.com/)) {
        if (!MinLimit(m.sender)) return;
        await loading();
        try {
            const mediaUrl = await igdl(budy);
            const url_media = mediaUrl[0].url;
            const response = await axios.head(url_media);
            const contentType = response.headers['content-type'];
            if (contentType.startsWith('image/')) {
                await Yudzxml.sendMessage(m.chat, { image: { url: url_media }, caption: mess.success }, { quoted: m });
            } else {
                await Yudzxml.sendMessage(m.chat, { video: { url: url_media }, caption: mess.success }, { quoted: m });
            }
        } catch (error) {
            console.log(error);
            return reply(`Terjadi kesalahan saat mengunduh media.` + error)
        }
    }
   if (budy.startsWith('https://') && budy.match(/facebook\.com/)) {
    if (!MinLimit(m.sender)) return;
    await loading();
    try {
      let res = await fdown.download(budy);
      if (res && res.length > 0) {
        let videoData = res[0]; 
        let videoUrl = videoData.hdQualityLink || videoData.normalQualityLink; 
        if (videoUrl) {
          let caption = `*Title:* ${videoData.title}\n*Description:* ${videoData.description}\n*Duration:* ${videoData.duration}`;
          await Yudzxml.sendMessage(m.chat, { 
            video: { url: videoUrl }, 
            caption: caption, 
            mimetype: 'video/mp4'
          }, { quoted: m });
        }
      } else {
        return reply(mess.error)
      }
    } catch (e) {
      console.log(e);
      return reply(mess.error);
    }
  }
    if (budy.startsWith('https://') && budy.match(/capcut\.com/)) {
       if (!MinLimit(m.sender)) return;
       await loading();
     try {
       let capcut = await fetchJson(`${apikey.beta}/api/download/capcut?url=${budy}&apikey=${apikey.botz}`);
        let yudz = capcut.result;
        await Yudzxml.sendMessage( m.chat, { video: { url: yudz.video }, caption: yudz.title },{ quoted: m });
       } catch (e) {
         console.log(e)
         reply(mess.error)
      }
    } 
}
if (onlyadmin_status === 'ON' && !isAdmins) {
    return;
}
// MENGECEK SEWA OTOMATIS
if (db_sewa.hasOwnProperty(from)) {
    const expired_delprem = db_sewa[from].expired; // Ganti m.chat dengan from
    if (cekpremium(expired_delprem) < 0) {
        const text_outsewaExpired = `_*MASA SEWA X7BOTZ TELAH HABIS*_\n_Silahkan hubungi Owner Bot Untuk Perpanjangan Sewa_

_Terima kasih sudah menggunakan layanan Sewa Bot Dari Yudzxml._

*Nomor Owner*
wa.me/${config.owner}`;

        try {
            await Yudzxml.sendMessage(from, { text: text_outsewaExpired }, { quoted: m });
            delete db_sewa[from];
            fs.writeFileSync('./Storage/db/sewa.json', JSON.stringify(db_sewa, null, 2), 'utf8');
        } catch (e) {
            console.log(e);
        }

        await Yudzxml.groupLeave(from)
            .then(() => console.log('Berhasil Keluar Dari Grup sewa'))
            .catch(() => console.log('Keluar Grup Gagal'));
    }
}
// TEBAK GAMBAR 
const userId = from.split('@')[0];
if (tebakgambar[userId]) {
    const jawaban = tebakgambar[userId].jawaban.toLowerCase();

    if (budy.toLowerCase() === 'nyerah') {
        await Yudzxml.sendMessage(m.chat, {
            image: { url: 'https://raw.githubusercontent.com/Yudzxml/Uploader/main/Yudzxml610.jpg' },
            caption: `Yahh Menyerah\nJawaban: ${jawaban}\n\nIngin bermain? Ketik tebak gambar`
        }, { quoted: m });
        
        clearTimeout(tebakgambar[userId].timeout);
        delete tebakgambar[userId];
        return;
    }
    if (budy.toLowerCase() === jawaban) {
        await AddMoney(m.sender, config.MoneyMenangGame);
        await Yudzxml.sendMessage(m.chat, {
            image: ppnyauser,
            caption: `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉 Anda Dapat *${config.MoneyMenangGame}* Money\n\nIngin bermain lagi? Silahkan Ketik Tebak Gambar`
        }, { quoted: m });
        
        clearTimeout(tebakgambar[userId].timeout);
        delete tebakgambar[userId];
        return;
    }
    if (budy.toLowerCase() === 'hint') {
        let result_jwb_tebakgambar = replaceNonFirstCharWithAsterisk(jawaban);
        reply(result_jwb_tebakgambar);
    }
}
// CAK LONTONG
if (caklontong[userId]) {
    const jawaban = caklontong[userId].jawaban.toLowerCase();

    if (budy.toLowerCase() === 'nyerah') {
        await Yudzxml.sendMessage(m.chat, {
            image: { url: 'https://raw.githubusercontent.com/Yudzxml/Uploader/main/Yudzxml610.jpg' },
            caption: `Yahh Menyerah\nJawaban: ${jawaban}\n\nIngin bermain? Ketik .caklontong`
        }, { quoted: m });
        
        clearTimeout(caklontong[userId].timeout);
        delete caklontong[userId];
        return;
    }
    if (budy.toLowerCase() === jawaban) {
        await AddMoney(m.sender, config.MoneyMenangGame);
        await Yudzxml.sendMessage(m.chat, {
            image: ppnyauser,
            caption: `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉 Anda Dapat *${config.MoneyMenangGame}* Money\n\nIngin bermain lagi? Silahkan Ketik .caklontong`
        }, { quoted: m });
        
        clearTimeout(caklontong[userId].timeout);
        delete caklontong[userId];
        return;
    }
    if (budy.toLowerCase() === 'hint') {
        let result_jwb_caklontong = replaceNonFirstCharWithAsterisk(jawaban);
        reply(result_jwb_caklontong);
    }
}
// SUSUN KATA
if (susunkata[userId]) {
    const jawaban = susunkata[userId].jawaban.toLowerCase();

    if (budy.toLowerCase() === 'nyerah') {
        await Yudzxml.sendMessage(m.chat, {
            image: { url: 'https://raw.githubusercontent.com/Yudzxml/Uploader/main/Yudzxml610.jpg' },
            caption: `Yahh Menyerah\nJawaban: ${jawaban}\n\nIngin bermain? Ketik .susunkata`
        }, { quoted: m });
        
        clearTimeout(susunkata[userId].timeout);
        delete susunkata[userId];
        return;
    }
    if (budy.toLowerCase() === jawaban) {
        await AddMoney(m.sender, config.MoneyMenangGame);
        await Yudzxml.sendMessage(m.chat, {
            image: ppnyauser,
            caption: `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉 Anda Dapat *${config.MoneyMenangGame}* Money\n\nIngin bermain lagi? Silahkan Ketik .susunkata`
        }, { quoted: m });
        
        clearTimeout(susunkata[userId].timeout);
        delete susunkata[userId];
        return;
    }
    if (budy.toLowerCase() === 'hint') {
        let result_jwb_susunkata = replaceNonFirstCharWithAsterisk(jawaban);
        reply(result_jwb_susunkata);
    }
}
// SIAPA KAH AKU
if (siapakahaku[userId]) {
    const jawaban = siapakahaku[userId].jawaban.toLowerCase();

    if (budy.toLowerCase() === 'nyerah') {
        await Yudzxml.sendMessage(m.chat, {
            image: { url: 'https://raw.githubusercontent.com/Yudzxml/Uploader/main/Yudzxml610.jpg' },
            caption: `Yahh Menyerah\nJawaban: ${jawaban}\n\nIngin bermain? Ketik .siapakahaku`
        }, { quoted: m });
        
        clearTimeout(siapakahaku[userId].timeout);
        delete siapakahaku[userId];
        return;
    }
    if (budy.toLowerCase() === jawaban) {
        await AddMoney(m.sender, config.MoneyMenangGame);
        await Yudzxml.sendMessage(m.chat, {
            image: ppnyauser,
            caption: `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉 Anda Dapat *${config.MoneyMenangGame}* Money\n\nIngin bermain lagi? Silahkan Ketik .siapakahaku`
        }, { quoted: m });
        
        clearTimeout(siapakahaku[userId].timeout);
        delete siapakahaku[userId];
        return;
    }
    if (budy.toLowerCase() === 'hint') {
        let result_jwb_siapakahaku = replaceNonFirstCharWithAsterisk(jawaban);
        reply(result_jwb_siapakahaku);
    }
}
// TEBAK LIRIK
if (tebaklirik[userId]) {
    const jawaban = tebaklirik[userId].jawaban.toLowerCase();
    if (budy.toLowerCase() === 'nyerah') {
        await Yudzxml.sendMessage(m.chat, {
            image: { url: 'https://raw.githubusercontent.com/Yudzxml/Uploader/main/Yudzxml610.jpg' },
            caption: `Yahh Menyerah\nJawaban: ${jawaban}\n\nIngin bermain? Ketik .tebaklirik`
        }, { quoted: m });
        clearTimeout(tebaklirik[userId].timeout);
        delete tebaklirik[userId]
        return;
    }
    if (budy.toLowerCase() === jawaban) {
        await AddMoney(m.sender, config.MoneyMenangGame);
        await Yudzxml.sendMessage(m.chat, {
            image: ppnyauser,
            caption: `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉 Anda Dapat *${config.MoneyMenangGame}* Money\n\nIngin bermain lagi? Silahkan Ketik .Tebaklirik`
        }, { quoted: m });
        clearTimeout(tebaklirik[userId].timeout);
        delete tebaklirik[userId]
        return;
    }
    if (budy.toLowerCase() === 'hint') {
        let result_jwb_tebaklirik = replaceNonFirstCharWithAsterisk(jawaban);
        reply(result_jwb_tebaklirik);
    }
}
// TEBAK KALIMAT 
if (tebakkalimat[userId]) {
    const jawaban = tebakkalimat[userId].jawaban.toLowerCase();
    if (budy.toLowerCase() === 'nyerah') {
        await Yudzxml.sendMessage(m.chat, {
            image: { url: 'https://raw.githubusercontent.com/Yudzxml/Uploader/main/Yudzxml610.jpg' },
            caption: `Yahh Menyerah\nJawaban: ${jawaban}\n\nIngin bermain? Ketik .tebakkalimat`
        }, { quoted: m });
        clearTimeout(tebakkalimat[userId].timeout);
        delete tebakkalimat[userId]
        return;
    }
    if (budy.toLowerCase() === jawaban) {
        await AddMoney(m.sender, config.MoneyMenangGame);
        await Yudzxml.sendMessage(m.chat, {
            image: ppnyauser,
            caption: `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉 Anda Dapat *${config.MoneyMenangGame}* Money\n\nIngin bermain lagi? Silahkan Ketik .tebakkalimat`
        }, { quoted: m });
        clearTimeout(tebakkalimat[userId].timeout);
        delete tebakkalimat[userId]
        return;
    }
    if (budy.toLowerCase() === 'hint') {
        let result_jwb_tebakkalimat = replaceNonFirstCharWithAsterisk(jawaban);
        reply(result_jwb_tebakkalimat);
    }
}
// TEBAK TEBAKAN 
if (tebaktebakan[userId]) {
    const jawaban = tebaktebakan[userId].jawaban.toLowerCase();
    if (budy.toLowerCase() === 'nyerah') {
        await Yudzxml.sendMessage(m.chat, {
            image: { url: 'https://raw.githubusercontent.com/Yudzxml/Uploader/main/Yudzxml610.jpg' },
            caption: `Yahh Menyerah\nJawaban: ${jawaban}\n\nIngin bermain? Ketik .tebaktebakan`
        }, { quoted: m });
        clearTimeout(tebaktebakan[userId].timeout);
        delete tebaktebakan[userId]
        return;
    }
    if (budy.toLowerCase() === jawaban) {
        await AddMoney(m.sender, config.MoneyMenangGame);
        await Yudzxml.sendMessage(m.chat, {
            image: ppnyauser,
            caption: `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉 Anda Dapat *${config.MoneyMenangGame}* Money\n\nIngin bermain lagi? Silahkan Ketik .Tebaktebakan`
        }, { quoted: m });
        clearTimeout(tebaktebakan[userId].timeout);
        delete tebaktebakan[userId]
        return;
    }
    if (budy.toLowerCase() === 'hint') {
        let result_jwb_tebaktebakan = replaceNonFirstCharWithAsterisk(jawaban);
        reply(result_jwb_tebaktebakan);
    }
}
// TEBAK BENDERA 
if (tebakbendera[userId]) {
    const jawaban = tebakbendera[userId].jawaban.toLowerCase();
    if (budy.toLowerCase() === 'nyerah') {
        await Yudzxml.sendMessage(m.chat, {
            image: { url: 'https://raw.githubusercontent.com/Yudzxml/Uploader/main/Yudzxml610.jpg' },
            caption: `Yahh Menyerah\nJawaban: ${jawaban}\n\nIngin bermain? Ketik .tebakbendera`
        }, { quoted: m });
        clearTimeout(tebakbendera[userId].timeout);
        delete tebakbendera[userId]
        return;
    }
    if (budy.toLowerCase() === jawaban) {
        await AddMoney(m.sender, config.MoneyMenangGame);
        await Yudzxml.sendMessage(m.chat, {
            image: ppnyauser,
            caption: `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉 Anda Dapat *${config.MoneyMenangGame}* Money\n\nIngin bermain lagi? Silahkan Ketik .tebakbendera`
        }, { quoted: m });
        clearTimeout(tebakbendera[userId].timeout);
        delete tebakbendera[userId];
        return;
    }
    if (budy.toLowerCase() === 'hint') {
        let result_jwb_tebakbendera = replaceNonFirstCharWithAsterisk(jawaban);
        reply(result_jwb_tebakbendera);
    }
}
// TEKA TEKI
if (tekateki[userId]) {
    const jawaban = tekateki[userId].jawaban.toLowerCase();
    if (budy.toLowerCase() === 'nyerah') {
        await Yudzxml.sendMessage(m.chat, {
            image: { url: 'https://raw.githubusercontent.com/Yudzxml/Uploader/main/Yudzxml610.jpg' },
            caption: `Yahh Menyerah\nJawaban: ${jawaban}\n\nIngin bermain? Ketik .tekateki`
        }, { quoted: m });
        clearTimeout(tekateki[userId].timeout);
        delete tekateki[userId]
        return;
    }
    if (budy.toLowerCase() === jawaban) {
        await AddMoney(m.sender, config.MoneyMenangGame);
        await Yudzxml.sendMessage(m.chat, {
            image: ppnyauser,
            caption: `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉 Anda Dapat *${config.MoneyMenangGame}* Money\n\nIngin bermain lagi? Silahkan Ketik .tekateki`
        }, { quoted: m });
        clearTimeout(tekateki[userId].timeout);
        delete tekateki[userId]
        return;
    }
    if (budy.toLowerCase() === 'hint') {
        let tekatekihint = replaceNonFirstCharWithAsterisk(jawaban);
        reply(tekatekihint);
    }
}
// FAMILY 100
if (('family100' + m.chat in _family100) && !isCmd) {
    kuis = true;
    let room = _family100['family100' + m.chat];
    let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '');
    let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text);

    if (!isSurender) {
        let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks);
      
        if (index === -1) {
            return;
        }

        if (room.terjawab[index]) {
            return reply('Jawaban ini sudah terjawab sebelumnya!');
        }

        room.terjawab[index] = m.sender;
    }

    let isWin = room.terjawab.length === room.terjawab.filter(v => v).length;

    let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false;
    }).filter(v => v).join('\n')}
${isSurender ? '' : ``}`.trim();

    await Yudzxml.sendTextWithMentions(m.chat, caption, m)
        .then(mes => {
            return _family100['family100' + m.chat].pesan = mes;
        })
        .catch(_ => _);

    if (isSurender) {
        await reply(`@${pushname} telah menyerah!\nJawaban yang benar adalah: ${room.jawaban.join(', ')}`);
  delete _family100['family100' + m.chat];      
    }

    if (isWin) {
        await AddMoney(m.sender, 40);
        await Yudzxml.sendMessage(m.chat, {
            image: ppnyauser,
            caption: `🎮 Family 100 🎮\n\nJawaban Benar 🎉 Anda Dapat *40* Money\n\nIngin bermain lagi? Silahkan Ketik .family100`
        }, { quoted: m });
        delete _family100['family100' + m.chat];
    }
}
// ASAH OTAK
if (asahotak[userId]) {
    const jawaban = asahotak[userId].jawaban.toLowerCase();
    if (budy.toLowerCase() === 'nyerah') {
        await Yudzxml.sendMessage(m.chat, {
            image: { url: 'https://raw.githubusercontent.com/Yudzxml/Uploader/main/Yudzxml610.jpg' },
            caption: `Yahh Menyerah\nJawaban: ${jawaban}\n\nIngin bermain? Ketik .asahotak`
        }, { quoted: m });
        clearTimeout(asahotak[userId].timeout);
        delete asahotak[userId]
        return;
    }
    if (budy.toLowerCase() === jawaban) {
        await AddMoney(m.sender, config.MoneyMenangGame);
        await Yudzxml.sendMessage(m.chat, {
            image: ppnyauser,
            caption: `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉 Anda Dapat *${config.MoneyMenangGame}* Money\n\nIngin bermain lagi? Silahkan Ketik .asahotak`
        }, { quoted: m });
        clearTimeout(asahotak[userId].timeout);
        delete asahotak[userId]
        return;
    }
    if (budy.toLowerCase() === 'hint') {
        let asahotakhint = replaceNonFirstCharWithAsterisk(jawaban);
        reply(asahotakhint);
    }
}
//================== [ PLUGINS ] ==================//
const loadPlugins = (directory) => {
    let plugins = [];
    const files = fs.readdirSync(directory);

    files.forEach(file => {
        const filePath = path.join(directory, file);
        if (filePath.endsWith('.js')) {
            try {
                delete require.cache[require.resolve(filePath)];
                const plugin = require(filePath);
                plugin.filePath = filePath;
                plugins.push(plugin);
            } catch (error) {
                console.error(`Error loading plugin at ${filePath}:`, error);
            }
        }
    });

    return plugins;
}

const plugins = loadPlugins(path.resolve(__dirname, './Plugins'));

const context = { 
  m, 
  reply,
  isRegistered, 
  isBan,
  text,
  Yudzxml,
  config, 
  mess, 
  loading, 
  MinLimit,
  example,
  getBuffer,
  prefix
};

let handler = false;
for (const plugin of plugins) {
    if (plugin.command && plugin.command.includes(command)) {
        try {
       await plugin.operate(context);
            handler = true;
        } catch (error) {
            console.error(`Error executing plugin ${plugin.filePath}:`, error);
        }
        break;
    }
}
//===================================//
switch(command) {
//<=================================>//
//<========== ALL MENU =============>//
//<=================================>//
case 'menuowner':
case 'menudownload': 
case 'menusearch': 
case 'menustore':   
case 'menugrup':   
case 'menupremium':   
case 'menuislamic':   
case 'menufun': 
case 'menugame':   
case 'menuai': 
case 'menuprimbon':
case 'menuai-image': 
case 'menutools': 
case 'menurandom': 
case 'menucecan': 
case 'menuanime': 
case 'menusticker': 
case 'menuflaming':
case 'menuephoto': 
case 'menuberita': 
case 'menuother': 
case 'menucpanel': 
case 'menusubdomain': 
case 'menudo':
case 'menu': {
if (isBan) return reply(mess.ban);
if (!isRegistered) return reply(mess.register)
const menuMapping = {
'owner'    : menuowner,
'down'     : menudown,
'search'   : menusearch,
'store'    : menustore,
'grup'     : menugroup,
'premium'  : menuprem,
'islamic'  : menuislami,
'fun'      : menufun,
'game'     : menugame,
'ai'       : menuai,
'ai-image' : menuaiimage,
'primbon'  : menuprimbon,
'tools'    : menutools,
'random'   : menurandom,
'cecan'    : menucecan,
'anime'    : menuanime,
'sticker'  : menusticker,
'flaming'  : menuflaming,
'ephoto'   : menuephoto,
'berita'   : menuberita,
'other'    : menuother,
'cpanel'   : menucpanel,
'subdomain': menusubdomain,
'do'       : menudo
};
menu_lib = menuMapping[text] || menumain;
await Yudzxml.sendMessage(m.chat, {
text: menu_lib,
contextInfo: { 
mentionedJid: [m.sender, config.owner+'@s.whatsapp.net', '0@s.whatsapp.net'], 
externalAdReply: {
showAdAttribution: true,
title: `${config.botname}`,
body: `${ucapanWaktu} ❄️ ${pushname}`,
thumbnailUrl: fotomenunya,
sourceUrl: config.saluran,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, { quoted : m })
}
break
case 'allmenu': {
if (isBan) return reply(mess.ban);  
if (!isRegistered) return reply(mess.register)
const status = isOwner ? '*Owner*' : isPremium ? '*Premium*' : '*User*';
const menunya = `
*ʜᴀʟᴏ ᴋᴀᴋ ${pushname}✨, ꜱᴀʏᴀ ʙᴏᴛ ᴀꜱɪꜱᴛᴇɴ ᴄᴇʀᴅᴀꜱ ʙᴇʀʙᴀꜱɪꜱ ᴡʜᴀᴛꜱᴀᴘᴘ ʏᴀɴɢ ᴅɪᴋᴇᴍʙᴀɴɢᴋᴀɴ ᴏʟᴇʜ ᴅᴇᴠ ʙᴇʀɴᴀᴍᴀ ʏᴜᴅᴢxᴍʟ*

*ᴡʜᴀᴛ ᴄᴀɴ ɪ ᴅᴏ ꜰᴏʀ ʏᴏᴜ? ɪ ᴡᴀꜱ ᴄʀᴇᴀᴛᴇᴅ ꜰᴏʀ ᴘʀᴏᴠɪᴅɪɴɢ ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ ᴀɴᴅ ꜱᴜᴘᴘᴏʀᴛ ᴠɪᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ᴍᴇꜱꜱᴀɢᴇ 🍃*

╔═══『 *DASHBOARD* 』
╠⌬
╠❥ ɴᴀᴍᴀ : *${pushname}*
╠❥ ꜱᴛᴀᴛᴜꜱ : ${status}
╠❥ ᴅᴀᴛᴇ : *${hariini}*
╠⌬
╚═══════════════════
${readmore}
${menudown}

${menuowner}

${menusearch}

${menustore}

${menugroup}

${menuprem}

${menucpanel}

${menusubdomain}

${menudo}

${menugame}

${menufun}

${menuislami}

${menuai}

${menuaiimage}

${menuprimbon}

${menutools}

${menurandom}

${menucecan}

${menuanime}

${menusticker}

${menuflaming}

${menuephoto}

${menuberita}

${menuother}
`;
const messageOptions = {
    video: { url: config.thumbnail.allmenu[0] },
    gifPlayback: true,
    caption: menunya,
    contextInfo: { 
        mentionedJid: [m.sender],
        forwardingScore: 0,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: config.idch,
            serverMessageId: 0,
            newsletterName: config.ownername
        },
        externalAdReply: {
            showAdAttribution: true,
            title: `${config.botname}`,
            body: `${ucapanWaktu} ❄️ ${pushname}`,
            thumbnailUrl: fotomenunya,
            sourceUrl: config.saluran,
            mediaType: 1,
            renderLargerThumbnail: true
        }
    }
};
await Yudzxml.sendMessage(m.chat, messageOptions, { quoted: m });
      Yudzxml.sendMessage(m.chat, { audio: { url: audiomenu }, mimetype: 'audio/mpeg', ptt: true }, {quoted: m});
}
break;
//<=================================>//
//<========= OWNER MENU ============>//
//<=================================>//
case 'restore': {
    if (!isOwner) return reply(mess.owner);
    if (!text) return reply(`_Perintah Ini Akan Menghapus Semua Database User Bot, Jika Setuju Gunakan Perintah *${prefix}restore -y* Untuk Melanjutkan_`);
    
    if (text.includes('-y')) {
        try {
            await loading();
            const zipFilePath = path.join(__dirname, './Storage/db/restore.zip');
            const extractToPath = path.join(__dirname, './Storage/db/');
            const command = `unzip -o "${zipFilePath}" -d "${extractToPath}"`;

            exec(command, (error, stdout, stderr) => {
                if (error) {
                    console.error(`Error extracting zip file: ${error.message}`);
                    return reply(`Terjadi kesalahan saat menghapus database: ${error.message}`);
                }
                if (stderr) {
                    console.error(`Error: ${stderr}`);
                    return reply(`Terjadi kesalahan saat menghapus database: ${stderr}`);
                }
                console.log(`Successfully restored files from backup:\n${stdout}`);
                return reply('Database Berhasil Dihapus Bot Kembali Ke Setelan Awal');
            });
        } catch (e) {
            console.log(e);
            return reply(mess.error);
        }
    } else {
        return reply('INPUT SALAH!!\n\nGUNAKAN PERINTAH .RESTORE -Y UNTUK MENGHAPUS DATABASE BOT!!');
    }
}
break;
case 'listuserpanel':
case 'listbuypanel':
case 'listcreatepanel': {
    if (!isOwner) {
        return reply(mess.owner);
    }
    if (Object.keys(db_panel).length === 0) {
        return reply(`_Tidak ada data panel yang tersedia._`);
    }

    let response = '_List Buyer Panel:_\n\n';
    
    for (const [number, details] of Object.entries(db_panel)) {
        const user = details.user;
        const serverId = details.serverid;
        const userId = details.userid;
        const expiredDate = new Date(details.expired).toLocaleString();
        const startDate = new Date(details.start).toLocaleString(); 
        response += `Nomor: *${number}*\n`;
        response += `Pengguna: *${user}*\n`;
        response += `Server ID: *${serverId}*\n`;
        response += `User  ID: *${userId}*\n`;
        response += `Tanggal Mulai: *${startDate}*\n`;
        response += `Tanggal Kadaluarsa: *${expiredDate}*\n\n`;
    }

    await reply(response);
}
break;
case 'addowner': {
    if (!isOwner) return reply(mess.owner);
    if (!args[0]) {
        return reply(`_Penggunaan ${prefix + command} nomor_\n\n_Contoh: *${prefix + command} 6285246154386*_`);
    }

    const bnnd = text.split("|")[0].replace(/[^0-9]/g, '');
    const ceknye_addowner = await Yudzxml.onWhatsApp(bnnd + '@s.whatsapp.net');

    if (ceknye_addowner.length === 0) {
        return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`);
    }

    db_owner.push(bnnd);
    fs.writeFileSync('./Storage/db/owner.json', JSON.stringify(db_owner, null, 2), 'utf8');
    await reply(`_Nomor *${bnnd}* Telah Menjadi Owner !_`);
}
break;
case 'delowner': {
    if (!isOwner) return reply(mess.owner);
    if (!args[0]) {
        return reply(`_Penggunaan *${prefix + command} Nomor*_\n_Contoh: ${prefix + command} 628xxx_\n\n_Untuk Menghapus Semua Owner Ketik *${prefix + command} all*_`);
    }
    await loading();
    if (text.trim().toLowerCase() === 'all') {
        await loading();
        db_owner.length = 0;
        fs.writeFileSync('./Storage/db/owner.json', JSON.stringify(db_owner, null, 2), 'utf8');
        return reply(`_Semua Nomor *Owner* Telah Di Hapus!_`);
    }
    let yaki = ambilAngka(args[0])
    let unp = db_owner.indexOf(yaki);
    if (unp === -1) {
        return reply(`_Nomor *${yaki}* Tidak Ditemukan Dalam Database!_`);
    }
    db_owner.splice(unp, 1);
    fs.writeFileSync('./Storage/db/owner.json', JSON.stringify(db_owner, null, 2), 'utf8');
    await reply(`_Nomor *${yaki}* Telah Di Hapus Dari Database Owner!_`);
}
break;
case 'autolevelup': {
if (!isOwner) return reply(mess.owner);
if (!text) return reply(example('on/off'))
await loading();
if (text.includes('on')) {
 config.AutoLevelUp = true;
 reply('*AUTO LEVEL UP BERHASIL DI AKTIFKAN*')
} else if (text.includes('off')) {
 config.AutoLevelUp = false;
 reply('*AUTO LEVEL UP BERHASIL DI MATIKAN*')
} else {
 reply('PENGGUNAAN SALAH!! CONTOH .AUTOLEVELUP ON/OFF')
}
}
break
case 'autoshalat': 
case 'autosholat': {
if (!isOwner) return reply(mess.owner);
if (!text) return reply(example('on/off'))
await loading();
if (text.includes('on')) {
 config.autoshalat = true;
 reply('*AUTO SHALAT BERHASIL DI AKTIFKAN*')
} else if (text.includes('off')) {
 config.autoshalat = false;
 reply('*AUTO SHALAT BERHASIL DI MATIKAN*')
} else {
 reply('PENGGUNAAN SALAH!! CONTOH .AUTOSHALAT ON/OFF')
}
}
break
case 'autoreboot': {
if (!isOwner) return reply(mess.owner);
if (!text) return reply(example('on/off'))
await loading();
if (text.includes('on')) {
 config.autoreboot = true;
 reply('*AUTOREBOOT BERHASIL DI AKTIFKAN*')
} else if (text.includes('off')) {
 config.autoreboot = false;
 reply('*AUTOREBOOT BERHASIL DI MATIKAN*')
} else {
 reply('PENGGUNAAN SALAH!! CONTOH .AUTOREBOOT ON/OFF')
}
}
break
case 'anticall': {
if (!isOwner) return reply(mess.owner);
if (!text) return reply(example('on/off'))
await loading();
if (text.includes('on')) {
 config.anticall = true;
 reply('*ANTICALL BERHASIL DI AKTIFKAN*')
} else if (text.includes('off')) {
 config.anticall = false;
 reply('*ANTICALL BERHASIL DI MATIKAN*')
} else {
 reply('PENGGUNAAN SALAH!! CONTOH .ANTICALL ON/OFF')
}
}
break
case 'prefix': {
if (!isOwner) return reply(mess.owner);
if (!text) return reply(example('on/off'))
await loading();
if (text.includes('on')) {
 config.prefix = true;
 reply('*PREFIX BERHASIL DI AKTIFKAN*')
} else if (text.includes('off')) {
 config.prefix = false;
 reply('*PREFIX BERHASIL DI MATIKAN*')
} else {
 reply('PENGGUNAAN SALAH!! CONTOH .PREFIX ON/OFF')
}
}
break
case 'autoread': {
if (!isOwner) return reply(mess.owner);
if (!text) return reply(example('on/off'))
await loading();
if (text.includes('on')) {
 config.autoRead = true;
 reply('*AUTOREAD BERHASIL DI AKTIFKAN*')
} else if (text.includes('off')) {
 config.autoRead = false;
 reply('*AUTOREAD BERHASIL DI MATIKAN*')
} else {
 reply('PENGGUNAAN SALAH!! CONTOH .AUTOREAD ON/OFF')
}
}
break
case 'autoswview':
case 'autoviewsw': {
if (!isOwner) return reply(mess.owner);
if (!text) return reply(example('on/off'))
await loading();
if (text.includes('on') && text.includes('aktifkan')) {
 config.autoswview = true;
 reply('*AUTOVIEWSW BERHASIL DI AKTIFKAN*')
} else if (text.includes('off') && text.includes('matikan')) {
 config.autoswview = false;
 reply('*AUTOVIEWSW BERHASIL DI MATIKAN*')
} else {
 reply('PENGGUNAAN SALAH!! CONTOH .AUTOVIEWSW ON/OFF')
}
}
break
case 'autobackup': {
if (!isOwner) return reply(mess.owner);
if (!text) return reply(example('on/off'))
await loading();
if (text.includes('on') && text.includes('aktifkan')) {
 config.Autobackup = true;
 reply('*AUTOBACKUP BERHASIL DI AKTIFKAN*')
} else if (text.includes('off') && text.includes('matikan')) {
 config.Autobackup = false;
 reply('*AUTOBACKUP BERHASIL DI MATIKAN*')
} else {
 reply('*PENGGUNAAN SALAH!! CONTOH .AUTOBACKUP ON/OFF*')
}
}
break
case 'settingbot':
case 'settingsbot':
case 'setbot': {
if (!isOwner) return reply(mess.owner);
const statusList = {
    ᴀᴜᴛᴏꜱʜᴀʟᴀᴛ: config.autoshalat,
    ᴀᴜᴛᴏʀᴇᴀᴅ: config.autoRead,
    ᴘʀᴇꜰɪx: config.prefix,
    ᴘᴜʙʟɪᴄ: config.public,
    ᴀɴᴛɪᴛᴏxɪᴄ: config.antitoxic,
    ᴀɴᴛɪᴄᴀʟʟ: config.anticall,
    ᴀᴜᴛᴏʟᴇᴠᴇʟᴜᴘ: config.AutoLevelUp,
    ᴀᴜᴛᴏʙᴀᴄᴋᴜᴘ: config.Autobackup,
    ᴀᴜᴛᴏʀᴇʙᴏᴏᴛ: config.autoreboot
    };

let textnya = '*ꜱᴛᴀᴛᴜꜱ ʙᴏᴛ ꜱᴀᴀᴛ ɪɴɪ*\n\n';
for (const [key, value] of Object.entries(statusList)) {
        textnya += `[${value ? '🟢' : '🔴'}] ${key}\n`;
}

    textnya += `
ᴋᴇᴛᴇʀᴀɴɢᴀɴ
🟢 = ꜰɪᴛᴜʀ ᴀᴋᴛɪꜰ
🔴 = ꜰɪᴛᴜʀ ᴛɪᴅᴀᴋ ᴀᴋᴛɪꜰ

ᴄᴀʀᴀ ᴘᴇɴɢɢᴜɴᴀᴀɴ :
_ᴄᴏɴᴛᴏʜ *${prefix}ᴀᴜᴛᴏʀᴇᴀᴅ ᴏɴ/ᴏꜰꜰ*_
`;
reply(textnya);
}
break;
case 'getsw': {
    if (!isOwner) return reply(mess.owner);
    await loading();
    try {
        let mediaMessage = quoted;
        let mediaFile = await Yudzxml.downloadAndSaveMediaMessage(mediaMessage);
        let mmk = await uploadMedia(mediaFile)
        let hasil = mmk.result.url
        let response = await axios.head(hasil); 
        let contentType = response.headers['content-type'];
        if (contentType.startsWith('application/octet-stream')) {
           await Yudzxml.sendMessage(m.chat, { audio: { url: hasil }, mimetype: 'audio/mpeg', ptt: true }, { quoted: m });
        } else if (contentType.startsWith('video/')) {
            await Yudzxml.sendMessage(m.chat, { video: { url: hasil }, caption: mediaMessage.caption }, { quoted: m });
        } else if (contentType.startsWith('image/')) {
            await Yudzxml.sendMessage(m.chat, { image: { url: hasil }, caption: mediaMessage.caption }, { quoted: m });
        } else {
            reply('Tipe media tidak dikenali.');
        }
    } catch (e) {
        console.error('Error in getmedia:', e);
        reply('Terjadi kesalahan saat mengunduh media. Silakan coba lagi.' + e);
    }
}
break;
case 'clearsesi':
case 'delsesi':
case 'clearsession': {
if (!isOwner) return reply(mess.owner);
await loading();
try {
const sessionFolder = './Storage/session';
if (fs.existsSync(sessionFolder) && fs.lstatSync(sessionFolder).isDirectory()) {
fs.readdir(sessionFolder, (err, files) => { 
if (err) throw err;
files.forEach(file => {
const filePath = path.join(sessionFolder, file);
fs.stat(filePath, (err, stats) => {
if (err) throw err;
if (stats.isFile() || stats.isSymbolicLink()) {
fs.unlink(filePath, (err) => {
if (err) console.log(`Gagal menghapus file ${filePath}: ${err}`);
});
} else if (stats.isDirectory()) {
fs.rmdir(filePath, { recursive: true }, (err) => {
if (err) console.log(`Gagal menghapus folder ${filePath}: ${err}`);
});
                        }
                    });
                });
            });
reply('*_SESSION BERHASIL DI HAPUS_*');
} else {
reply(`Folder ${sessionFolder} tidak ditemukan.`);
        }
} catch (e) {
        console.log(e);
        return reply(mess.error);
    }
}
break;
case 'botip':
case 'ipbot':
case 'ipserver': {
if (!isOwner) return reply(mess.owner);
checkIPs().then(replyMessage => {
reply(replyMessage)
});
}
break;
case 'sewabot': {
    if (!isOwner) return reply(mess.owner);
    
    if (!args[0] || !args[1]) {
        return reply(`_Contoh : ${prefix + command} https://chat.whatsapp.com/xxx 30_
        
_*30* artinya 30 hari, bot otomatis akan keluar apabila waktu habis_
        
_Jika Bot Sudah Bergabung ke Grup Sewa dan untuk perpanjang silakan ketik *.tambahsewa*_ dan untuk mengecek masa aktif ketik *_.ceksewa_*`);
    }

    if (!isURL(args[0]) && !args[0].includes('whatsapp.com')) {
        return reply(`_Link Invalid!_ \n\n_Contoh : ${prefix + command} https://chat.whatsapp.com/xxx 30_`);
    }

    if (!isValidNumber(args[1])) {
        return reply(`_Masukkan Jumlah Hari Yang Valid_`);
    }

    let result_sewa = args[0].split('https://chat.whatsapp.com/')[1];
    let res_linkgc = '';

    const currentDate2 = new Date();
    const thirtyDaysLater2 = new Date(currentDate2.getTime() + (args[1] * 24 * 60 * 60 * 1000) + (1 * 60 * 60 * 1000));
    const timestampThirtyDaysLater2 = thirtyDaysLater2.getTime();

    await Yudzxml.query({
        tag: 'iq',
        attrs: { type: 'get', xmlns: 'w:g2', to: '@g.us' },
        content: [{ tag: 'invite', attrs: { code: result_sewa } }]
    }).then(async (res) => {
        res_linkgc = res.content[0].attrs.id;
        res_namegc = res.content[0].attrs.subject;
        res_linkgc = res_linkgc + '@g.us';
        db_sewa[res_linkgc] = { namegrup: res_namegc, expired: timestampThirtyDaysLater2, start: hariini };
        fs.writeFileSync('./Storage/db/sewa.json', JSON.stringify(db_sewa, null, 2), 'utf8');

        await Yudzxml.groupAcceptInvite(result_sewa)
            .then((res) => console.log('success gabung'))
            .catch((err) => console.log('Gagal Bergabung'));

        return reply(`_*Bot Sudah Bergabung*_
        
Name Grup : *${res_namegc}*
Nomor Bot : ${botNumber.replace('@s.whatsapp.net', '')}
Expired : *${selisihHari(timestampThirtyDaysLater2)}*

_Untuk Mengecek masa aktif sewa ketik *.ceksewa* pada grup tersebut_`);
    });
}
break
case 'tambahsewa': {
    if (!isOwner) return reply(mess.owner);
    
    if (!args[0] || !args[1]) {
        return reply(`_Contoh : ${prefix + command} https://chat.whatsapp.com/xxx 30_
        
_*30* artinya penambahan 30 hari dihitung dari sisa waktu sewabot_
        
_Jika Bot Belum Bergabung ke Grup Sewa Silakan ketik *.sewabot*_`);
    }

    if (!isURL(args[0]) && !args[0].includes('whatsapp.com')) {
        return reply(`_Link Invalid!_ \n\n_Contoh : ${prefix + command} https://chat.whatsapp.com/xxx 30_`);
    }

    if (!isValidNumber(args[1])) {
        return reply(`_Masukkan Jumlah Hari Yang Valid_`);
    }

    let result_sewa_tambahsewa = args[0].split('https://chat.whatsapp.com/')[1];
    let res_linkgcaddsewa = '';

    await Yudzxml.query({
        tag: 'iq',
        attrs: { type: 'get', xmlns: 'w:g2', to: '@g.us' },
        content: [{ tag: 'invite', attrs: { code: result_sewa_tambahsewa } }]
    }).then(async (res) => {
        res_linkgcaddsewa = res.content[0].attrs.id;
        res_namegc = res.content[0].attrs.subject;
        res_linkgcaddsewa += '@g.us';

        let expired_cekprem_addsewa;
        if (db_sewa.hasOwnProperty(res_linkgcaddsewa)) { expired_cekprem_addsewa = db_sewa[res_linkgcaddsewa].expired;
        } else {
            return reply(`_*Nomor Bot Belum Pernah Bergabung*_\n\n_Silakan Ketik *.sewabot* untuk membuat Sewa Baru_`);
        }

        const thirtyDaysLater2addsewa = new Date(expired_cekprem_addsewa + (args[1] * 24 * 60 * 60 * 1000) + (1 * 60 * 60 * 1000));
        const timestampThirtyDaysLater2_addsewa = thirtyDaysLater2addsewa.getTime();

        db_sewa[res_linkgcaddsewa] = { namegrup: res_namegc, expired: timestampThirtyDaysLater2_addsewa, start: hariini };
        fs.writeFileSync('./Storage/db/sewa.json', JSON.stringify(db_sewa, null, 2), 'utf8');

        await Yudzxml.groupAcceptInvite(result_sewa_tambahsewa)
            .then((res) => console.log('Success Bergabung'))
            .catch((err) => console.log('Gagal Bergabung'));

        return reply(`_*Perpanjangan Berhasil*_
        
Name Grup : *${res_namegc}*
Nomor Bot : ${botNumber.replace('@s.whatsapp.net', '')}
Expired : *${selisihHari(timestampThirtyDaysLater2_addsewa)}*

_Untuk Mengecek masa aktif sewa ketik *.ceksewa* pada grup tersebut_`);
    });
}
break
case 'ceksewa': {
    let idsewa_cek;
    let res_namegc_ceksewa = groupMetadata.subject;

    if (text) {
        let result_sewa_ceksewa_ = args[0].split('https://chat.whatsapp.com/')[1];
        
        await Yudzxml.query({
            tag: 'iq',
            attrs: { type: 'get', xmlns: 'w:g2', to: '@g.us' },
            content: [{ tag: 'invite', attrs: { code: result_sewa_ceksewa_ } }]
        }).then(async (res) => {
            idsewa_cek = res.content[0].attrs.id + '@g.us';
            res_namegc_ceksewa = res.content[0].attrs.subject;
        });
    } else {
        idsewa_cek = from;
    }

    if (db_sewa.hasOwnProperty(idsewa_cek)) {
        const expired_cekprem = db_sewa[idsewa_cek].expired;
        const selisihHari_cekprem = selisihHari(expired_cekprem);

        const cekprem_text = `_Name Group :_ ${res_namegc_ceksewa}
_Masa Sewabot :_ _*${selisihHari_cekprem}*_`;

        Yudzxml.sendMessage(m.chat, { text: cekprem_text, mentions: [sender] });
    } else {
        reply('_Grup Tidak Termasuk Sewa Bot_');
    }
}
break;
case 'sewaaktif': {
    if (!isOwner) return reply(mess.owner);

    try {
        let getallgrub = await Yudzxml.groupFetchAllParticipating();

        async function formatGrup(index, grup) {
            let response2 = '-';
            let link_grouplist = '';

            try {
                response2 = await Yudzxml.groupInviteCode(grup.id);
                link_grouplist = `https://chat.whatsapp.com/${response2}`;
            } catch {
                link_grouplist = '-';
            }

            let masa_sewa = '-';
            if (db_sewa[grup.id]) {
                masa_sewa = selisihHari(db_sewa[grup.id].expired);
            }

            return `╭─「 ${index} 」 *${grup.subject}*
│ Anggota : ${grup.participants.length}
│ ID Grup : ${grup.id}
│ Link    : ${link_grouplist}
│ Masa Sewa : ${masa_sewa}
╰────────────────────────`;
        }

        const grupTerurut = Object.values(getallgrub).sort((a, b) => b.participants.length - a.participants.length);
        let nomorUrut = 0;
        const listGrupString = await Promise.all(grupTerurut.map((grup) => formatGrup(++nomorUrut, grup)));

        return reply(`_*Total Group : ${nomorUrut}*_ \n\n` + listGrupString.join('\n\n'));
    } catch (e) {
        console.log('error');
    }
}
break;
case 'listsewa': {
    if (!isOwner) return reply(mess.owner);
    
    let dataSorted = Object.keys(db_sewa).map(key => ({
        idGrup: key,
        namegrup: db_sewa[key].namegrup,
        expired: db_sewa[key].expired
    }));

    dataSorted.sort((a, b) => a.expired - b.expired);

    let teksooo = '';
    for (let data of dataSorted) {
teksooo += `╭─ *▧ 「 LIST SEWA 」*
│ Nama Grup : ${data.namegrup}
│ ID Grup : ${data.idGrup}
│ Expired : ${selisihHari(data.expired)}
╰────────────────────────\n`;
    }

    teksooo += `\n*Total : ${Object.keys(db_sewa).length}*`;
    reply(teksooo.trim());
}
break;
case 'delsewa': {
if (!isOwner) return reply(mess.owner)
if (!text) {
return reply(`_❗ Masukkan ID Group_

_*Note :*_ 
_Menghapus List Grup Dari SewaBot, Juga Akan Mengeluarkan Bot Dari Grup Tersebut !!, Jika Anda Ingin Menggunakan Bot Tanpa Batas Waktu Silahkan Gunakan Perintah .joingc*_`);
}

    if (db_sewa.hasOwnProperty(text)) {
        delete db_sewa[text];
        fs.writeFileSync('./Storage/db/sewa.json', JSON.stringify(db_sewa, null, 2), 'utf8');
        
        try {
            await Yudzxml.groupLeave(text);
            reply(`_Group *${text}* Telah Di Hapus Dari List Sewa dan Bot Telah Keluar Dari Grup!_`);
        } catch (error) {
            console.error(`Gagal keluar dari grup ${text}: ${error.message}`);
            reply(`_❗ Gagal keluar dari grup *${text}*, silakan coba lagi._`);
        }
    } else {
        return reply(`_❗ ID Group Tidak Ditemukan_`);
    }
}
break;
case 'outgrup': 
case 'outgrupsewa': 
case 'outgroup':
case 'outgruB': 
case 'outgroub': {
    if (!isOwner) return reply(mess.owner);
    if (!text) return reply(example('id-grup'))

    try {
        await Yudzxml.groupLeave(text);
        reply('Berhasil Keluar Dari Grup');
    } catch (err) {
        reply('Keluar Grup Gagal');
    }
}
break;
case 'public':
case 'publik':{
        if (!isOwner) return reply(mess.owner);
        global.public = true;
        return reply('_Sukses Change To *Public*_');
    }
break
case 'self': {
        if (!isOwner) return reply(mess.owner);
        global.public = false;
        return reply('_Sukses Change To *Self*_');
    }
break;
case 'restart': {
if (!isOwner) return reply(mess.owner)
console.log(`${chalk.yellow.bold('['+jammenit+']')} Restaring Server... `)
await loading();
fs.writeFile('restaring.txt', from, (err) => {
if (err) {
console.error('Terjadi kesalahan saat membuat file:', err);
return;
}
});
sleep(2000)
exec(`node index`)
}
break
case 'addprem': {
    if (!isOwner) {
        return reply(mess.owner); 
    }
    if (!args[0] || !args[1]) {
        return reply(`_Contoh : *${prefix + command} 62838xxxx 30*_\n\n_*30* artinya 30 hari, premium otomatis expired apabila waktu habis_`);
    }
    const numberAddrepm = ambilAngka(args[0]);
    const ceknye_addprem = await Yudzxml.onWhatsApp(numberAddrepm + '@s.whatsapp.net'); 
    if (ceknye_addprem.length === 0) {
        return reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`);
    }
    if (!isValidNumber(args[1])) {
        return reply(`_Masukkan Jumlah Hari Yang Valid_`);
    }
    const currentDate = new Date();
    const daysToAdd = parseInt(args[1], 10); 
    const expirationDate = new Date(currentDate.getTime() + (daysToAdd * 24 * 60 * 60 * 1000));
    if (!db_premium) {
        db_premium = {}; 
    }

    db_premium[numberAddrepm] = {
        expired: expirationDate.getTime(), 
        start: currentDate.getTime()
    };
    try {
        fs.writeFileSync('./Storage/db/premium.json', JSON.stringify(db_premium, null, 2));
    } catch (error) {
        console.error('Error saat menyimpan ke database:', error);
        return reply(`Terjadi kesalahan saat menyimpan data premium.`);
    }
    
    const remainingDays = Math.ceil((expirationDate.getTime() - currentDate.getTime()) / (24 * 60 * 60 * 1000));
    return reply(`_Nomor *${numberAddrepm}* Telah Menjadi Premium!_ \n_Masa berlaku selama ${remainingDays} hari._`);
}
break;
case 'delprem': {
    if (!isOwner) {
        return reply(mess.owner);
    }

    if (!args[0]) {
        return reply(`_Contoh: ${prefix + command} 62838xxxx atau ketik *${prefix + command} all* untuk menghapus semua pengguna premium._`);
    }

    if (args[0].toLowerCase() === 'all') {
        db_premium = {};
        fs.writeFileSync('./Storage/db/premium.json', JSON.stringify(db_premium, null, 2));
        return reply(`_Semua pengguna premium telah dihapus!_`);
    }

    const numberDelprem = ambilAngka(args[0]);

    if (db_premium.hasOwnProperty(numberDelprem)) {
        delete db_premium[numberDelprem];
        fs.writeFileSync('./Storage/db/premium.json', JSON.stringify(db_premium, null, 2));
        return reply(`_Nomor *${numberDelprem}* Telah Di Hapus Dari Premium!_`);
    } else {
        return reply(`_Tidak Ada Data Ditemukan !_`);
    }
}
break;
case 'listprem': {
  if (!isOwner) return reply(mess.owner)
  let teksooo = '*▧ 「 LIST PREMIUM 」*\n\n'
  for (let i in db_premium) {
    const premiumData = db_premium[i]
    const expiredDate = premiumData.expired
    const daysLeft = cekpremium(expiredDate)
    teksooo += `✦ ${i} - Exp: ${daysLeft} Day\n`
  }
  teksooo += `\n*Total : ${Object.keys(db_premium).length}*`
  Yudzxml.sendMessage(from, { text: teksooo.trim() }, { quoted:m, contextInfo: { 'mentionedJid': db_premium } })
}
break
case 'ban': {
    if (!isOwner) return reply(mess.owner);
    const args = text.split(',');
    if (args.length < 2) return reply(`_Format salah! Gunakan: *${prefix}ban <nomor>,<durasi> <unit>*_\n\n_Contoh: *${prefix + command} 628xxx,1 menit/jam/hari*_`);

    const numberAddrepm = ambilAngka(args[0].trim());
    let targetUser ;
    if (numberAddrepm) {
        targetUser  = numberAddrepm;
    } else {
        return reply(`_Format salah! Gunakan: *${prefix}ban <nomor>,<durasi> <unit>*_\n\n_Contoh: *${prefix + command} 628xxx,1 menit/jam/hari*_`);
    }

    const durationAndUnit = args[1].trim().split(' ');
    const duration = parseInt(durationAndUnit[0]);
    const unit = durationAndUnit[1];

    if (!duration || isNaN(duration) || !unit) {
        return reply(`_Format salah! Gunakan: *${prefix}ban <nomor>,<durasi> <unit>*_\n\n_Contoh: *${prefix + command} 628xxx,1 menit/jam/hari*_`);
    }

    const datek = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));
    let banUntil;

    if (unit === 'menit') {
        banUntil = new Date(datek.getTime() + (duration * 60 * 1000));
    } else if (unit === 'jam') {
        banUntil = new Date(datek.getTime() + (duration * 60 * 60 * 1000));
    } else if (unit === 'hari') {
        banUntil = new Date(datek.getTime() + (duration * 24 * 60 * 60 * 1000));
    } else {
        return reply(`_Unit tidak valid! Gunakan 'menit', 'jam', atau 'hari'._`);
    }

    if (botNumber === targetUser ) return reply(`_Nomor Bot Tidak Bisa Diban!!_`);
    if (db_owner === targetUser ) return reply(`_Nomor Itu Adalah Owner!!_`);

    // Memeriksa apakah pengguna sudah dibanned
    const cek_isBan = db_banned[targetUser];
    if (cek_isBan) return reply('*Pengguna Ini telah Di Ban*');

const hours = banUntil.getHours();
const minutes = banUntil.getMinutes();
const banEndTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

const banDate = `${banUntil.getFullYear()}-${(banUntil.getMonth() + 1).toString().padStart(2, '0')}-${banUntil.getDate().toString().padStart(2, '0')}`;

db_banned[targetUser ] = {
    waktu: banEndTime,
    tanggal: banDate
};

fs.writeFileSync('./Storage/db/banned.json', JSON.stringify(db_banned));
return reply(`Pengguna @${numberAddrepm} Telah Dibanned\n\nPengguna Tidak Dapat Menggunakan Semua Fitur Bot hingga ${banEndTime} pada tanggal ${banDate}`);
}
break;
case 'listban': {
    if (!isOwner) return reply(mess.owner);
    
    // Cek apakah ada pengguna yang dibanned
    if (Object.keys(db_banned).length === 0) {
        return reply(`Tidak ada pengguna yang dibanned saat ini.`);
    }

    let bannedList = '';
    
    // Mengiterasi setiap pengguna yang dibanned
    for (const [nomor, data] of Object.entries(db_banned)) {
bannedList += `
*LIST BANNED :*

- Nomor: ${nomor}, 
- Tanggal: ${data.tanggal}
- Waktu: ${data.waktu}\n\n`;
    }

    return reply(bannedList);
}
break;
case 'unban': {
    if (!isOwner) return reply(mess.owner);
    
    const numberAddrepm = ambilAngka(text);
    if (!numberAddrepm) {
        return reply(`_Format salah! Gunakan: *${prefix}unban <nomor>*_\n\n_Contoh: *${prefix + command} 628xxx*_`);
    }

    // Memeriksa apakah pengguna ada dalam daftar banned
    if (!db_banned[numberAddrepm]) {
        return reply(`*Pengguna ini tidak ada dalam daftar banned.*`);
    }

    // Menghapus pengguna dari db_banned
    delete db_banned[numberAddrepm];

    // Menyimpan perubahan ke dalam file JSON
    fs.writeFileSync('./Storage/db/banned.json', JSON.stringify(db_banned));
    
    return reply(`Pengguna @${numberAddrepm} telah diunban.`);
}
break;
case 'setteksjpm': {
  if (!isOwner) return reply(mess.owner)
if (text || m.quoted) {
const newteks = m.quoted ? m.quoted.text : text
await fs.writeFileSync('./Storage/lib/textjpm.js', newteks.toString())
reply('*Berhasil Mengganti Teks AutoJpm*')
} else {
return reply('dengan reply/kirim teks\n\nUntuk melihat teks Autojpm saat ini ketik *.teksjpm*')
}}
break
case 'autojpm': {
    if (!isOwner) return reply(mess.owner);
    if (!text) return reply(example('on/off'));
    if (text.includes('on')) {
        const messageContent = fs.readFileSync('./Storage/lib/textjpm.js').toString(); 
        if (!messageContent.trim()) {
            return reply('_ANDA BELUM MENGATUR TEXT AUTO JPM ANDA, GUNAKAN PERINTAH *.SETTEKSJPM <TEXTNYA>*_');
        }
        config.autojpm = true;
        return reply('Autojpm Berhasil Dihidupkan');
    } else if (text.includes('off')) {
        config.autojpm = false;
        return reply('AutoJpm Berhasil Dimatikan');
    } else {
        return reply(example('on/off'));
    }
}
break;
case 'teksjpm': {
if (!isOwner) return reply(mess.owner);
const messageContent = fs.readFileSync('./Storage/lib/textjpm.js').toString(); 
if (!messageContent.trim()) {
return reply('_ANDA BELUM MENGATUR TEXT AUTO JPM ANDA, GUNAKAN PERINTAH *.SETTEKSJPM <TEXTNYA>*_')
}
return reply(messageContent)
}
break
case 'jpm': {
    if (!isOwner) return reply(mess.owner);
    if (!text && !m.quoted) return reply('.jpm teksnya atau replyteks');
    var teks = m.quoted ? m.quoted.text : text;
    let total = 0;
    let getGroups = await Yudzxml.groupFetchAllParticipating();
    let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1]);
    let usergc = groups.map((v) => v.id);
    
    reply(`Memproses Mengirim Pesan *Text* Ke *${usergc.length}* Grup`);
    
    for (let jid of usergc) {
        try {
            await Yudzxml.sendMessage(jid, { text: teks }, { quoted: fkontak });
            total += 1;
        } catch (error) {
            console.error(`Gagal mengirim pesan ke ${jid}: ${error.message}`);
            reply(`Gagal mengirim pesan ke grup ${jid}: ${error.message}`);
        }
        await sleep(3000); 
    }
    reply(`Berhasil Mengirim Pesan Ke *${total} Grup*`);
}
break;
case 'pushkontak': {
if (!isOwner) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
if (!text) return reply(example('pesan pushnya'))
var teks = text
const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
reply(`Memproses Mengirim Pesan Ke *${halls.length}* Member Grup Dengan Delay 6 Detik/Chat`)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
await fs.writeFileSync('./Storage/lib/contacts.json', JSON.stringify(contacts, null, 2), 'utf8');
await Yudzxml.sendMessage(mem, {text: teks}, {quoted: fkontak})
await sleep(6000)
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
'BEGIN:VCARD',
'VERSION:3.0',
`FN:BUYER [ ${config.ownername} ] ${contact.split('@')[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split('@')[0]}:+${contact.split('@')[0]}`,
'END:VCARD',
'', ].join('\n')
return vcard }).join('')
fs.writeFileSync('./Storage/lib/contacts.vcf', vcardContent, 'utf8')
} catch (err) {
reply(err.toString())
} finally {
if (m.chat !== m.sender) await reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`)
await Yudzxml.sendMessage(m.sender, { document: fs.readFileSync('./Storage/lib/contacts.vcf'), fileName: 'contacts.vcf', caption: 'File Contact Berhasil Di Buat✅', mimetype: 'text/vcard', }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync('./Storage/lib/contacts.json', JSON.stringify(contacts, null, 2), 'utf8');
await fs.writeFileSync('./Storage/lib/contacts.vcf', '')
}}
break
case 'pushkontak2': {
    if (!isOwner) return reply(mess.owner);
    
    if (!text) {
        return reply('*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1000 = 1 Detik\nketik *.listgc* untuk melihat semua list id grup');
    }

    const parts = text.split('|');
    if (parts.length < 3) {
        return reply('*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup');
    }

    const idnya = parts[0];
    const delay = Number(parts[1]);
    const teks = parts[2];

    if (!idnya.endsWith('@g.us')) {
        return reply('Format ID Grup Tidak Valid');
    }

    if (isNaN(delay)) {
        return reply('Format Delay Tidak Valid');
    }

    if (!teks) {
        return reply('*Contoh Command :*\n.pushkontak2 idgc|jeda|pesan\n\n*Note :* Jeda 1 detik = 1000\nketik *.listgc* untuk melihat semua list id grup');
    }

    let groupMetadataa;
    try {
        groupMetadataa = await Yudzxml.groupMetadata(idnya);
    } catch (e) {
        return reply('*ID Grup* tidak valid!');
    }

    const participants = groupMetadataa.participants;
    const halls = participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
    
    reply(`Memproses Mengirim Pesan Ke *${halls.length}* Member Grup`);

    const contacts = []; // Pastikan contacts dideklarasikan
    for (let mem of halls) {
        if (mem !== m.sender) {
            contacts.push(mem);
            await fs.writeFileSync('./Storage/lib/contacts.json', JSON.stringify(contacts, null, 2), 'utf8');
            await Yudzxml.sendMessage(mem, { text: teks }, { quoted: fkontak });
            await sleep(delay);
        }
    }

    try {
        const uniqueContacts = [...new Set(contacts)];
        const vcardContent = uniqueContacts.map(contact => {
            return [
                'BEGIN:VCARD',
                'VERSION:3.0',
                `FN:BUYER [ ${config.ownername} ] ${contact.split('@')[0]}`,
                `TEL;type=CELL;type=VOICE;waid=${contact.split('@')[0]}:+${contact.split('@')[0]}`,
                'END:VCARD',
                ''
            ].join('\n');
        }).join('');

        fs.writeFileSync('./Storage/lib/contacts.vcf', vcardContent, 'utf8');
    } catch (err) {
        return reply(err.toString());
    } finally {
        if (m.chat !== m.sender) {
            await reply(`Berhasil Mengirim Pesan Ke *${halls.length} Member Grup*, File Contact Berhasil Dikirim ke Private Chat`);
        }
        await Yudzxml.sendMessage(m.sender, {
            document: fs.readFileSync('./Storage/lib/contacts.vcf'),
            fileName: 'contacts.vcf',
            caption: 'File Contact Berhasil Di Buat✅',
            mimetype: 'text/vcard'
        }, { quoted: m });

        contacts.splice(0, contacts.length);
        await fs.writeFileSync('./Storage/lib/contacts.json', JSON.stringify(contacts, null, 2), 'utf8');
        await fs.writeFileSync('./Storage/lib/contacts.vcf', '');
    }
}
break;
case 'savekontak': {
if (!isOwner) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
const halls = await groupMetadata.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
fs.writeFileSync('./Storage/lib/contacts.json', JSON.stringify(contacts, null, 2), 'utf8');
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
'BEGIN:VCARD',
'VERSION:3.0',
`FN:BUYER [ ${config.ownername} ] ${contact.split('@')[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split('@')[0]}:+${contact.split('@')[0]}`,
'END:VCARD',
'', ].join('\n')
return vcard }).join('')
fs.writeFileSync('./Storage/lib/contacts.vcf', vcardContent, 'utf8')
} catch (err) {
reply(err.toString())
} finally {
if (m.chat !== m.sender) await reply(`File Kontak Berhasil Dikirim ke Private Chat`)
await Yudzxml.sendMessage(m.sender, { document: fs.readFileSync('./Storage/lib/contacts.vcf'), fileName: 'contacts.vcf', caption: 'File Contact Berhasil Di Buat✅', mimetype: 'text/vcard', }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync('./Storage/lib/contacts.json', JSON.stringify(contacts, null, 2), 'utf8');
await fs.writeFileSync('./Storage/lib/contacts.vcf', '')
}}
break
case 'savekontak2': {
if (!isOwner) return reply(mess.owner)
if (!text) return reply(example('id-grup'))
var idnya = text
var groupMetadataa
try {
groupMetadataa = await Yudzxml.groupMetadata(`${idnya}`)
} catch (e) {
return reply('*ID Grup* tidak valid!')
}
const participants = await groupMetadataa.participants
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== m.sender) {
contacts.push(mem)
fs.writeFileSync('./Storage/lib/contacts.json', JSON.stringify(contacts, null, 2), 'utf8');
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
'BEGIN:VCARD',
'VERSION:3.0',
`FN:BUYER [ ${config.ownername} ] ${contact.split('@')[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split('@')[0]}:+${contact.split('@')[0]}`,
'END:VCARD',
'', ].join('\n')
return vcard }).join('')
fs.writeFileSync('./Storage/lib/contacts.vcf', vcardContent, 'utf8')
} catch (err) {
reply(err.toString())
} finally {
if (m.chat !== m.sender) await reply(`File Kontak Berhasil Dikirim ke Private Chat`)
await Yudzxml.sendMessage(m.sender, { document: fs.readFileSync('./Storage/lib/contacts.vcf'), fileName: 'contacts.vcf', caption: 'File Contact Berhasil Di Buat✅', mimetype: 'text/vcard', }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync('./Storage/lib/contacts.json', JSON.stringify(contacts, null, 2), 'utf8');
await fs.writeFileSync('./Storage/lib/contacts.vcf', '')
}}
break
case 'backup': {
    if (!isOwner) return reply(mess.owner);
    await loading();
    const foldersToBackup = ['lib', 'Plugins', 'Storage'];
    const filesToBackup = [
        'index.js',
        'package-lock.json',
        'package.json',
        'README.md',
        'settings.js',
        'Yudzxyz.js',
    ];

    const backupFileName = `X7BOTZ-MD-BACKUP.tar.gz`;
    const backupCommand = `tar -czf ${backupFileName} ${foldersToBackup.join(' ')} ${filesToBackup.join(' ')}`;
    
    exec(backupCommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Error: ${stderr}`);
            return;
        }
        reply(`_FILE *BACKUP* SUDAH DIKIRIM KE *PRIVATE* CHAT_`);
   Yudzxml.sendMessage(m.sender, {
        document: fs.readFileSync(`./${backupFileName}`),
        mimetype: 'application/zip',
      fileName: backupFileName
     }, { quoted: m });
    });
}
break;
case 'restore': {
    if (!isOwner) return reply(mess.owner);
    await loading();

    const backupFileName = `X7BOTZ-MD-BACKUP.tar.gz`;
    
    // Pastikan file backup ada
    if (!fs.existsSync(`./${backupFileName}`)) {
        return reply(`_❗ File backup tidak ditemukan! Silakan lakukan backup terlebih dahulu._`);
    }

    const restoreCommand = `tar -xzf ${backupFileName}`;
    
    exec(restoreCommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return reply(`_❗ Gagal melakukan restore: ${error.message}_`);
        }
        if (stderr) {
            console.error(`Error: ${stderr}`);
            return reply(`_❗ Gagal melakukan restore: ${stderr}_`);
        }
        
        reply(`_✅ Restore berhasil! File dan folder telah dikembalikan._`);
    });
}
break;
case 'cleartmp':
case 'hapussampah':
case 'cleanspam': {
    if (!isOwner) return reply(mess.owner);
    await loading();
    const spamFolders = ['.npm', '.cache', 'tmp'];
    
    const cleanCommand = spamFolders.map(folder => `rm -rf ./${folder}`).join(' && ');

    exec(cleanCommand, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return reply(`_❗ Gagal menghapus folder sampah: ${error.message}_`);
        }
        if (stderr) {
            console.error(`Error: ${stderr}`);
            return reply(`_❗ Gagal menghapus folder sampah: ${stderr}_`);
        }
        
        reply(`*_✅ BERHASIL MENGHAPUS SAMPAH_*\n\n*_RESTARTING SERVER..._*`);
    });
fs.writeFile('restaring.txt', from, (err) => {
if (err) {
console.error('Terjadi kesalahan saat membuat file:', err);
return;
}
});
sleep(2000)
exec(`node index`)
}
break;
case 'block': 
case 'blok': {
if (!isOwner) return reply(mess.owner)
if (!text) return reply(example('628xxx'))
let number_block = await Yudzxml.onWhatsApp(text + `@s.whatsapp.net`)
if (number_block.length == 0) return reply(`_Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!_`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

Yudzxml.updateBlockStatus(users, 'block')
.then((data) => {
    reply(`_Nomor *${text}* Telah Di Blokir Dari Bot_`);
})
.catch((e) => {
    console.log(e)
    reply(`_Gagal Melakukan Block Ke Users *${text}*_`);
});
}
break
case 'unblock':
case 'unblok': {
if (!isOwner) return reply(mess.owner)
if (!text) return reply(example('628xxx'))
let number_unblock = await Yudzxml.onWhatsApp(text + `@s.whatsapp.net`)
if (number_unblock.length == 0) return reply(`_Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!_`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

Yudzxml.updateBlockStatus(users, 'unblock')
.then((data) => {
    reply(`_Nomor *${text}* Telah Dibuka Blokir Dari Bot_`);
})
.catch((e) => {
    console.log(e)
    reply(`_Gagal Melakukan Unblock Ke Users *${text}*_`);
});
}
break
case 'joingc': 
case 'join': {
if (!isOwner) return reply(mess.owner)
if (!text && !m.quoted) return reply('linknya')
let teks = m.quoted ? m.quoted.text : text
if (!teks.includes('whatsapp.com')) return reply('Link Tautan Tidak Valid!')
let result = teks.split('https://chat.whatsapp.com/')[1]
await Yudzxml.groupAcceptInvite(result).then(respon => reply('Berhasil Bergabung Ke Dalam Grup ✅')).catch(error => reply(error.toString()))
}
break
case 'leave': 
case 'out': {
if (!isOwner) return reply(mess.owner)
if (!m.isGroup) return reply(mess.group)
await Yudzxml.groupLeave(m.chat).then((res) => console.log('Keluar Grub') ).catch((err) => console.log('Keluar Grub Gagal'))
}
break
case 'addlimit': {
if (!isOwner) return reply(mess.owner)
if (!text) return reply(example('628xxx 30'))
users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
    if (users == '@s.whatsapp.net')  {
        users = args[0] + users
    }
    let tolimit = parseInt(args[1])
    if (isNaN(tolimit) || tolimit <= 0) {
        return reply('Input harus berupa angka.\n\nContoh: addlimit 6283872031397 50');
    }
    tolimit = tolimit.toString().replace(/^0+/, '');
    
    if (!args[1]) return reply('Contoh: addlimit 6289501427163 50')

    if (tolimit >= 1000000000) return reply('_addlimit tidak boleh lebih 1 M_')

    if (!db_usermoney[users]) {
        db_usermoney[users] = { limit: tolimit, money: 0,level_user: 1,level_cache:0 };
    }else{
        db_usermoney[users].limit = parseInt(db_usermoney[users].limit) + parseInt(tolimit)
    }
    fs.writeFileSync('./Storage/db/usermoney.json', JSON.stringify(db_usermoney, null, 2), 'utf8');
    reply(`_Limit *${tolimit}* Telah Di Tambahkan_`)
}
break
case 'addmoney': {
    if (!isOwner) return reply(mess.owner)
    if (!text) return reply(example('628xxx 30'))
    users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
    if (users == '@s.whatsapp.net')  {
        users = args[0] + users
    }
    let tomoney = parseInt(args[1])
    if (isNaN(tomoney) || tomoney <= 0) {
        return reply('Input harus berupa angka.');
    }
    tomoney = tomoney.toString().replace(/^0+/, '');
    if (!args[1]) return reply('Contoh: addmoney 6283872031397 5000')

    if (tomoney >= 1000000000) return reply('_addmoney tidak boleh lebih 1 M_')

    if (!db_usermoney[users]) {
         db_usermoney[users] = { limit: 30, money: tomoney,level_user: 1,level_cache:0 };

    }else{
         db_usermoney[users].money = parseInt(db_usermoney[users].money) + parseInt(tomoney)
    }
   
    fs.writeFileSync('./Storage/db/usermoney.json', JSON.stringify(db_usermoney, null, 2), 'utf8');

    reply(`_Money *${tomoney}* Telah Di Tambahkan_`)
}
break
case 'disk':{
exec('cd && du -h --max-depth=1', (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) return reply(stdout)
})
}
break
case 'getcase': 
case 'gc':{

const getCase = (cases) => {

            return 'case '+`'${cases}'`+fs.readFileSync('./Yudzxyz.js').toString().split('case \''+cases+'\'')[1].split('break')[0]+'break'

        }
            try{

                if (!isOwner) return reply('ngapain')

                if (!q) return reply(`contoh : ${prefix + command} antilink`)

                let nana = await getCase(q)

                reply(nana)

            } catch(err){

            console.log(err)

            reply(`Case ${q} tidak di temukan`)

        }
 }
break 
case 'delcase': {
if (!isOwner) return reply(`*Access Denied ❌*\n\n*Owners only*`)
if (!q) return reply('*Masukan nama case yang akan di hapus*')
dellCase('./Yudzxyz.js', q)
reply(`Case *${text}* berhasil dihapus.`)
}
break
case 'addcase': {
 if (!isOwner) return reply('lu sapa asu')
 if (!text) return reply(example('kode'))
    const fs = require('fs');
const namaFile = 'Yudzxyz.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Terjadi kesalahan saat membaca file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                reply('Terjadi kesalahan saat menulis file:', err);
            } else {
                reply('Case baru berhasil ditambahkan.');
            }
        });
    } else {
        reply('Tidak dapat menambahkan case dalam file.');
    }
});

}
break
case 'disk': {
  let cp = require ('child_process')
let { promisify } = require ('util')
let exec = promisify(cp.exec).bind(cp)

  await reply(`Please Wait`)
  let o
  try {
    o = await exec('cd && du -h --max-depth=1')
  } catch (e) {
    o = e
  } finally {
    let { stdout, stderr } = o
    if (stdout.trim())
    reply(stdout)
    if (stderr.trim()) reply(stderr)
  }
}
break
case 'addplugin': {
    if (!isOwner) return reply(mess.owner);
    if (!q.includes(',')) return reply(`Add input, Example: \n\n*${prefix + command} namafile, kodenya*`);

    const [pluginName, ...pluginContent] = q.split(',');
    const pluginDirPath = path.join(path.resolve(__dirname, './Plugins'));
    const pluginFilePath = path.join(pluginDirPath, pluginName.trim() + '.js'); 
    if (pluginContent.length === 0 || fs.existsSync(pluginFilePath)) {
        return reply('File sudah ada atau konten tidak valid.');
    }

    if (!fs.existsSync(pluginDirPath)) {
        fs.mkdirSync(pluginDirPath, { recursive: true });
    }

    fs.writeFileSync(pluginFilePath, pluginContent.join(',').trim());
    await reply(`Plugin baru telah dibuat di ${pluginFilePath}.`);
}
break;
case 'cgplugin': {
    if (!isOwner) return reply(mess.owner);
    if (!q.includes('|')) return reply(`Add Input, Example: *${prefix + command} thisplug|newcontent*`);

    let [pluginName, ...rest] = q.split('|');
    let newContent = rest.join('|');
    let pluginsDirect = path.resolve(__dirname, './Plugins');
    let pluginFilePath = path.join(pluginsDirect, pluginName.trim() + '.js'); 
    if (fs.existsSync(pluginFilePath)) {
        fs.writeFileSync(pluginFilePath, newContent.trim());
        await reply(`The plugin in ${pluginFilePath} has been replaced`);
    } else {
        await reply(`Plugin file '${pluginName}' not found`);
    }
}
break;
case 'delplugin': {
    if (!isOwner) return reply(mess.owner);
    if (!q) return reply(`Please provide the command name of the plugin you want to remove. Example: \n\n*${prefix + command} thisplug*`);

    let pluginsDirect = path.resolve(__dirname, './Plugins');
    let plugins = loadPlugins(pluginsDirect);

    for (const plugin of plugins) {
        if (plugin.command.includes(q)) {
            let filePath = plugin.filePath; 
            fs.unlinkSync(filePath);
            await reply(`The plugin in ${filePath} has been removed.`);
            return;
        }
    }
    await reply(`Plugin with command '${q}' not found.`);
}
break;
case 'getplugin': {
    if (!isOwner) return reply(mess.owner);
    if (!q) return reply(`Add Input, Example: \n\n*${prefix + command} Yudzxml*`);

    let pluginsDirect = path.resolve(__dirname, './Plugins');
    let plugin = loadPlugins(pluginsDirect).find(p => p.command.includes(q));
    if (!plugin) return reply(`Plugin with command '${q}' not found.`);
    let fileContent = fs.readFileSync(plugin.filePath, 'utf-8');
    await reply(fileContent);
}
break;
case 'listplugin': {
    if (!isOwner) return reply(mess.owner);

    let pluginsDirect = path.resolve(__dirname, './Plugins');
    let files = fs.readdirSync(pluginsDirect);
    let jsFiles = files.filter(file => file.endsWith('.js'));

    if (jsFiles.length === 0) {
        await reply('No JavaScript plugins found in the directory.');
    } else {
        await reply(`List of JavaScript plugins:\n\n${jsFiles.map(file => `- ${file}`).join('\n')}`);
    }
}
break
case 'get': {
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('https://google.com'))
try {
const gt = await axios.get(text, {
headers: {
'Access-Control-Allow-Origin': '*',
'Referer': 'https://www.google.com/',
'Referrer-Policy': 'strict-origin-when-cross-origin',
'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36'
},
responseType: 'arraybuffer' });
const contentType = gt.headers['content-type'];
console.log(`Content-Type: ${contentType}`);
if (/json/i.test(contentType)) {
const jsonData = JSON.parse(Buffer.from(gt.data, 'binary').toString('utf8'));
return reply(JSON.stringify(jsonData, null, 2));
} else if (/text/i.test(contentType)) {
const textData = Buffer.from(gt.data, 'binary').toString('utf8');
return reply(textData);
} else if (text.includes('webp')) {
return Yudzxml.sendImageAsSticker(m.chat, text, m, { packname: packname, author: author })
} else if (/image/i.test(contentType)) { return Yudzxml.sendMessage(m.chat, { image: { url: text }}, { quoted: m });
} else if (/video/i.test(contentType)) { return Yudzxml.sendMessage(m.chat, { video: { url: text }}, { quoted: m });
} else if (/audio/i.test(contentType) || text.includes('.mp3')) {
return Yudzxml.sendMessage(m.chat, { audio: { url: text }}, { quoted: m });
} else if (/application\/zip/i.test(contentType) || /application\/x-zip-compressed/i.test(contentType)) {
return Yudzxml.sendFile(m.chat, text, '', text, m)			
} else if (/application\/pdf/i.test(contentType)) {
return Yudzxml.sendFile(m.chat, text, '', text, m)
} else {
return reply(`MIME : ${contentType}\n\n${gt.data}`);
}
} catch (error) {
console.error(`Terjadi kesalahan: ${error}`);
return reply(`Terjadi kesalahan saat mengakses URL: ${error.message}`);
}}
break 
case 'infosysteam':
case 'ping':
case 'botstatus':
case 'statusbot': {
const used = process.memoryUsage();
const cpus = os.cpus().map((cpu) => {
cpu.total = Object.keys(cpu.times).reduce(
(last, type) => last + cpu.times[type],
0,
);
return cpu;
});
const cpu = cpus.reduce(
(last, cpu, _, { length }) => {
last.total += cpu.total;
last.speed += cpu.speed / length;
last.times.user += cpu.times.user;
last.times.nice += cpu.times.nice;
last.times.sys += cpu.times.sys;
last.times.idle += cpu.times.idle;
last.times.irq += cpu.times.irq;
return last;
},
{
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0,
},
},
);

var date = new Date();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var ram = `${formatSize(process.memoryUsage().heapUsed)} / ${formatSize(os.totalmem)}`;
var cpuuuu = os.cpus();
var sisaram = `${Math.round(os.freemem)}`;
var totalram = `${Math.round(os.totalmem)}`;
var persenram = (sisaram / totalram) * 100;
var persenramm = 100 - persenram;
var ramused = totalram - sisaram;

var space = await checkDiskSpace(process.cwd());
var freespace = `${Math.round(space.free)}`;
var totalspace = `${Math.round(space.size)}`;
var diskused = totalspace - freespace;
var neww = performance.now();
var oldd = performance.now();
let timestamp = speed();
let latensi = speed() - timestamp;
var { download, upload } = await checkBandwidth();
let respon = ` *ᴘ ɪ ɴ ɢ* 
 ${Math.round(neww - oldd)} ms 
 ${latensi.toFixed(4)} ms 

 *ʀ ᴜ ɴ ᴛ ɪ ᴍ ᴇ*
 ${runtime(process.uptime())} 

 *s ᴇ ʀ ᴠ ᴇ ʀ* 
 *🛑 ʀᴀᴍ:* ${formatSize(ramused)} (${persenramm.toString().split('.')[0]}%) / ${formatSize(totalram)} 
 *🔵 ғʀᴇᴇRAM:* ${formatSize(sisaram)} 
 *🔴 ᴍᴇᴍᴏʀy:* ${ram}
 *🗂 ᴅɪꜱᴋ:* ${formatSize(diskused)} / ${formatSize(totalspace)}
 *📂 ғʀᴇᴇDISK:* ${formatSize(freespace)}
 *🔭 ᴘʟᴀᴛғᴏʀᴍ:* ${os.platform()}
 *🧿 sᴇʀᴠᴇʀ:* ${os.hostname()}
 *📤 ᴜᴘʟᴏᴀᴅ:* ${upload}
 *📥 ᴅᴏᴡɴʟᴏᴀᴅ:* ${download}
 *⏰ ᴛɪᴍᴇ sᴇʀᴠᴇʀ:* ${jam} : ${menit} : ${detik}
 
 *📮 ɴᴏᴅᴇᴊꜱ ᴠᴇʀꜱɪᴏɴ:* ${process.version}
 *💻 ᴄᴘᴜ ᴍᴏᴅᴇʟ:* ${cpuuuu[0].model}
 *📊 ᴏꜱ ᴠᴇʀꜱɪᴏɴ:* ${os.version()}
 
_NodeJS Memory Usaage_
${Object.keys(used)
.map(
(key, _, arr) =>
`${key.padEnd(Math.max(...arr.map((v) => v.length)), ' ')}: ${formatp(
used[key],
)}`,
)
.join('\n')}
${readmore}
${cpus[0]
? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times)
.map(
(type) =>
`- *${(type + '*').padEnd(6)}: ${(
(100 * cpu.times[type]) /
cpu.total
).toFixed(2)}%`,
)
.join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus
.map(
(cpu, i) =>
`${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(
cpu.times,
)
.map(
(type) =>
`- *${(type + '*').padEnd(6)}: ${(
(100 * cpu.times[type]) /
cpu.total
).toFixed(2)}%`,
)
.join('\n')}`,
)
.join('\n\n')}`
: ''
}
`.trim();
Yudzxml.relayMessage(m.chat,{
requestPaymentMessage: {
currencyCodeIso4217: 'IDR',
requestFrom: '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: respon,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true
}}}}}}, {})
}
break
case 'setprofilbot':
case 'setpotobot':
case 'setppbot': {
if (!isOwner) return reply(mess.owner)
if (!isImage) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
await loading()
let media = await Yudzxml.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
let pepe = await uploadMedia(media)
let medis = pepe.result.url;
let memeg = await Yudzxml.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(media)
reply(`_Berhasil, Foto Profil Bot Telah Di Ganti_`)
}
break
case 'setbiobot': {
    if (!isOwner) return reply(mess.owner)
    if (!text) return reply(example('text'))
    Yudzxml.updateProfileStatus(`${text}`)
    reply(`_Sukses mengganti bio ke *${text}*_`)
}
break
case 'setnamebot': {
    if (!isOwner) return reply(mess.owner)
    if (!text) return reply(example('X7BOTZ-MD'))
    Yudzxml.updateProfileName(text)
    reply(`_Sukses mengganti nama ke *${text}*_`)
}
break
case 'nobot':
case 'numberbot': {
let text = `Number Bot : ${botNumber.replace('@s.whatsapp.net','')}`
reply(text)
}
break
//<=================================>//
//<========= SEARCH MENU ===========>//
//<=================================>//
case 'soundcloudsearch': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!text) return reply(example('duka last child'))
if (!MinLimit(m.sender)) return;    
await loading();
try {
let yudd = await fetchJson(`https://api.agatz.xyz/api/soundcloud?message=${text}`);
let capp = ''
for (let i of yudd.data) {
capp += `RESULT FROM ${text}\n\n`
capp += `*✨ JUDUL :* ${i.judul}\n`
capp += `*💫 LINK :* ${i.link}\n\n`
}
await reply(capp);
} catch (e) {
  console.log(e)
  return reply(mess.error)
}
}
break
case 'otakuongoing':
case 'otakudesuongoing': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
await loading();
try {
let hasil = await otakudesu.ongoing()
let cap = `*List Ongoing Anime :*\n\n`
for (let yudd of hasil) {
  cap += `*🍂 Judul :* ${yudd.title}
*⭐ Episode :* ${yudd.episode}
*🥶 Date :* ${yudd.type} ${yudd.date}
*🔗 Link :* ${yudd.link}\n\n
`
}
await Yudzxml.sendMessage(m.chat, {
  image: {
  url: hasil[0].image
  },
  caption: cap
}, { quoted: m })
} catch (e) {
  return reply(mess.error)
}
}
break
case 'otakusearch':
case 'otakudesusearch': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!text) return reply(example('jujutsu kaisen'))
if (!MinLimit(m.sender)) return;
await loading();
try {
let hasil = await otakudesu.search(text)
let cap = `*List Ongoing Anime :*\n\n`
for (let yudd of hasil) {
  cap += `*🍂 Judul :* ${yudd.title}
*⭐ Rating :* ${yudd.rating}
*⚔️ Genres :* ${yudd.genres}
*🥶 Status :* ${yudd.status}
*🔗 Link :* ${yudd.link}\n\n
`
}
await Yudzxml.sendMessage(m.chat, {
  image: {
  url: hasil[0].imageUrl
  },
  caption: cap
}, { quoted: m })
} catch (e) {
  return reply(mess.error)
}
}
break
case 'otakudetail':
case 'otakudesudetail': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!text) return reply(example('linknya'))
if (!MinLimit(m.sender)) return;
await loading();
try {
let hasil = await otakudesu.detail(text)
let cap = `*List Episode Anime : ${hasil.animeinfo.title}\n\n`
for (let yudd of hasil.animeinfo.episodes) {
  cap += `*🍂 Judul :* ${yudd.title}
*🥶 Date :* ${yudd.date}
*🔗 Link :* ${yudd.link}\n\n
`
}
await Yudzxml.sendMessage(m.chat, {
  image: {
  url: hasil.imageUrl
  },
  caption: cap
}, { quoted: m })
} catch (e) {
  return reply(mess.error)
}
}
break
case 'obat':
case 'infopenyakit': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!text) return reply(example('sakit perut'))
if (!MinLimit(m.sender)) return;    
    await loading();
    let uang = await fetchJson(`https://api-lenwy.vercel.app/obat?search=${text}`);
    if (!uang.data || uang.data.length === 0) {
        return reply('Maaf, obat tidak ditemukan.');
    }
    let cap = `Berikut adalah daftar obat yang ditemukan:\n\n`;
    for (let yudd of uang.data) {
        cap += `Judul : ${yudd.judul}\n` +
               `Kategori : ${yudd.kategori}\n` +
               `Selengkapnya : ${yudd.tautan}\n` +
               `Deskripsi : ${yudd.deskripsi}\n\n`;
    }
    Yudzxml.sendMessage(m.chat, { 
        image: { url: uang.data[0].gambar }, 
        caption: cap 
    }, { quoted: m });
}
break;
case 'informasinegara':
case 'infonegara': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!text) return reply(example('Indonesia'))
if (!MinLimit(m.sender)) return;
await loading()
let uang = await fetchJson(`https://api-lenwy.vercel.app/infonegara?search=${text}`)
await reply(uang.data)
}
break
case 'bahasa': 
case 'bahasanegara': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!text) return reply(example('Indonesia'))
if (!MinLimit(m.sender)) return;
await loading()
let uang = await fetchJson(`https://api-lenwy.vercel.app/bahasanegara?search=${text}`)
await reply(uang.data)
}
break
case 'matauang': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!text) return reply(example('Indonesia'))
if (!MinLimit(m.sender)) return;
await loading()
let uang = await fetchJson(`https://api-lenwy.vercel.app/matauang?search=${text}`)
await reply(uang.data)
}
break
case 'github':
case 'git': 
case 'gitclone': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!args[0]) return reply(`_Contoh:_ *${prefix +command}* https://github.com/WhiskeySockets/Baileys.git`)
if (!isURL(args[0]) && !args[0].includes('github.com')) return reply(`_*Link invalid!*_`)
if (!MinLimit(m.sender)) return
await loading();
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    Yudzxml.sendMessage(m.chat, { document: { url: url }, fileName: filename, mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
.catch(console.error)
}
break
case 'mangatoon': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!text) return reply(example('jujutsu kaisen'))
if (!MinLimit(m.sender)) return;
await loading();
try {
let cari = await (await fetch(`${apikey.api}/search/mangatoon?apiKey=${apikey.key}&query=${text}`)).json();
let yuuhu = cari.result[0].comic_name
let pin = await (await fetch(`${apikey.beta}/api/search/pinterest?text1=${yuuhu}&apikey=${apikey.botz}`)).json();
let fotonya = pin.result[0];
let caption = `*Mangatoon Search From:* ${text}`
for (let yudd of cari.result) {
  caption += `\n\n*🍂 Judul :* ${yudd.comic_name}
*📚 Type :* ${yudd.comic_type}
*🔗 Link :* ${yudd.comic_url}\n\n
`
Yudzxml.sendMessage(m.chat, { image: { url: fotonya }, caption: caption }, { quoted: m })
}
} catch (e) {
  return reply(mess.error)
}
}
break
case 'genshin-character':
case 'genshin': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);  
    if (!MinLimit(m.sender)) return;    
    await loading();
    try {
        let cari = await (await fetch(`${apikey.api}/search/genshin-character?apiKey=${apikey.key}`)).json();
        if (!cari.result || cari.result.length === 0) {
            return reply('Maaf, karakter Genshin tidak ditemukan.');
        }
        let cap = `*Genshin Character List*\n\n`;
        for (let yudd of cari.result) {
            cap += `*🍂 Character :* ${yudd.name}\n` +
                   `*🥶 Element :* ${yudd.elementType}\n` +
                   `*🔗 Link :* ${yudd.link}\n\n`;
        }
        let image = cari.result[0].imgSrc;
        await Yudzxml.sendMessage(m.chat, { 
            image: { url: image }, 
            caption: cap 
        }, { quoted: m });
    } catch (e) { 
        return reply(mess.error);
    }
}
break;
case 'searchfilm':
case 'filmsearch': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!text) return reply(example('transformers last movie'))
if (!MinLimit(m.sender)) return;
await loading();
try {
let hasil = await (await fetch(`${apikey.api}/search/film?apiKey=${apikey.key}&page=${text}`)).json();
let cap = `*Film Search From:* ${text}\n\n`
for (let yudd of hasil.result) {
  cap += `*🍂 Judul :* ${yudd.title}
*⭐ Rating :* ${yudd.rating}
*🥶 Quality :* ${yudd.quality}
*📚 Type :* ${yudd.type}
*🔗 Link :* ${yudd.link}\n\n
`
}
await Yudzxml.sendMessage(m.chat, {
  image: {
  url: hasil.result[0].poster
  },
  caption: cap
}, { quoted: m })
} catch (e) {
  return reply(mess.error)
}
}
break
case 'resepsearch':
case 'resep': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
    if (!text) return reply(example('kue kering'))
if (!MinLimit(m.sender)) return;
    await loading();
    try {
let behh = await (await fetch(`${apikey.api}/search/resep?apiKey=${apikey.key}&query=${text}`)).json();
let yudd = behh.result.data
let caption = `*Resep Search From:* ${text}\n\n`
for (let hasil of yudd) {
caption += `
*🍂 Judul :* ${hasil.judul}
*🔗 Link :* ${hasil.link}\n\n`
}
await reply(caption)
    } catch (e) {
        console.error(e);
        return reply(mess.error)
    }
}
break;
case 'wallpaper': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!text) return reply(example('anime'))
if (!MinLimit(m.sender)) return;
    await loading();
    try {
        let yudd = await wallpaper(text, 'page');
        let yudi = yudd[Math.floor(Math.random() * yudd.length)]
        await Yudzxml.sendMessage(m.chat, { image: { url: yudi.image[0] }, caption: mess.succes }, { quoted: m });
    } catch (e) {
        return reply('Terjadi kesalahan saat mengambil wallpaper.');
        console.error(e); // Log kesalahan untuk debugging
    }
}
break;
case 'wattpadsearch':
case 'wattpad': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!text) return reply(example('looksim'))
if (!MinLimit(m.sender)) return;
await loading();
try {
  let yudd = await wattpad.search(text)
  let teks = `*Wattpad Search*\nFrom: ${text}`;
  let no = 1;
  for (let hasil of yudd) {
    teks += `\n⭔ No : ${no++}\n⭔ Title : ${hasil.title}\n⭔ ReadCount : ${hasil.readCount}\n⭔ VoteCount : ${hasil.voteCount}\n⭔ ChapterCount : ${hasil.chapterCount}\n⭔ Link : ${hasil.link}\n⭔ Deskripsi : ${hasil.description}\n\n─────────────────\n\n`;
    }
  await Yudzxml.sendMessage(m.chat, { image: { url: yudd[0].image }, caption: teks }, { quoted: m });
} catch (e) {
  return reply(mess.error)
}
}
break
case 'wattpaddetail': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return  
if (!text) return reply(example('link'))
if (!isURL(text)) return reply(mess.urlnotvalid)
await loading();
try {
  let yudd = await wattpad.getList(text)
  let teks = `*Wattpad Detail Chapters*\n\n`;
  let no = 1;
  for (let hasil of yudd) {
    teks += `\n⭔ No : ${no++}\n⭔ Title : ${hasil.title}\n⭔ Link : ${hasil.link}\n\n─────────────────\n\n`;
    }
  await Yudzxml.sendMessage(m.chat, { image: { url: 'https://raw.githubusercontent.com/Yudzxml/Uploader/main/Yudzxml783.jpg' }, caption: teks }, { quoted: m });
} catch (e) {
  return reply(mess.error)
}
}
break
case 'livechart': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!text) return reply(example('jujutsu kaisen'))
if (!MinLimit(m.sender)) return;
await loading();
try {
  let yudd = await livechart.search(text)
  let teks = `*Livechart Search*\nFrom: ${text}`;
  let no = 1;
  for (let hasil of yudd) {
   teks += `\n⭔ No : ${no++}\n⭔ Title : ${hasil.title}\n⭔ Release : ${hasil.release}\n⭔ Rating : ${hasil.rating}\n⭔ Type : ${hasil.type}\n⭔ Url : ${hasil.url}\n\n─────────────────\n\n`;
        }
    await Yudzxml.sendMessage(m.chat, { image: { url: yudd[0].imageUrl }, caption: teks }, { quoted: m });
} catch (e) {
  return reply(mess.error)
}
}
break
case 'livechartdetail': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);  
if (!text) return reply(example('link'))
  if (!isURL(text)) return reply(mess.urlnotvalid);
if (!MinLimit(m.sender)) return;  
  await loading();
  
  try {
    let yudd = await livechart.detail(text);
    let caption = `
   *✨LIVECHART DETAIL :*
    
⭔ Title: ${yudd.title}
⭔ Date: ${yudd.premiereDate}
⭔ Rating: ${yudd.rating}
⭔ Source: ${yudd.source}
⭔ Genre: ${yudd.tags.join(', ')}
⭔ Studio: ${yudd.studios.join(', ')}      
⭔ Synopsis: ${yudd.synopsis}
    `;
    
    await Yudzxml.sendMessage(m.chat, { image: { url: yudd.imageUrl }, caption: caption }, { quoted: m });
  } catch (e) {
    console.error(e);
    return reply(mess.error);
  }
}
break;
case 'komikindopopuler': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
    await loading();
    try {
        let yudd = await komikindo.populer();
        let teks = '*Komik Populer*\n';
        let no = 1;

        for (let hasil of yudd) {
            teks += `⭔ No : ${no++}\n⭔ Title : ${hasil.title}\n⭔ Author : ${hasil.author}\n⭔ Rating : ${hasil.rating}\n⭔ Url : ${hasil.url}\n\n─────────────────\n\n`;
        }
        
        await Yudzxml.sendMessage(m.chat, { image: { url: yudd[0].image }, caption: teks }, { quoted: m });
    } catch (error) {
        console.error(error);
    }
}
break;
case 'komikindosearch': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!text) return reply(example('nama komik'))
if (!MinLimit(m.sender)) return;
    await loading();
    
    try {
        let yudd = await komikindo.search(text); // Pastikan ini adalah async
        let teks = `*Komik Search*\nFrom : ${text}\n`;
        let no = 1;

        for (let hasil of yudd) {
            teks += `\n⭔ No : ${no++}\n⭔ Title : ${hasil.title}\n⭔ Rating : ${hasil.rating}\n⭔ Url : ${hasil.url}\n\n─────────────────\n\n`;
        }
        
        await Yudzxml.sendMessage(m.chat, { image: { url: yudd[0].image }, caption: teks }, { quoted: m });
    } catch (error) {
        console.error(error);
    }
}
break;
case 'komikindodetail': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('link'))
    if (!isURL(text)) return reply(mess.urlnotvalid)
    await loading();
    
    try {
        let yudd = await komikindo.detail(text);
        let teks = `*Komik Detail*\n`;
        let no = 1;

        for (let hasil of yudd.chapters) {
            teks += `\n⭔ No : ${no++}\n⭔ Title : ${yudd.judul}\n⭔ Status : ${yudd.status}\n⭔ Chapter : ${hasil.title}\n⭔ Pengarang : ${yudd.pengarang}\n⭔ Genre : ${yudd.tema}\n⭔ Link Baca: ${hasil.link}\n\n─────────────────\n\n`;
        }
        
        await Yudzxml.sendMessage(m.chat, { image: { url: yudd.spoiler[0].image }, caption: teks }, { quoted: m });
    } catch (error) {
        console.error(error); // Log error untuk debugging
    }
}
break;
case 'google': 
case 'gg': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('kurumi'))
    try {
        await loading();
        let response = await fetchJson(`${apikey.api}/search-engine/google?apiKey=${apikey.key}&query=${text}`);
            let cap = '';
            let no = 1;
            for (let item of response.result) {
                cap += `*⭔ No:* ${no++}\n*⭔ Title:* ${item.title}\n*⭔ Description:* ${item.description}\n*⭔ URL:* ${item.url}\n\n`;
            }
            await reply(cap);
    } catch (e) {
        console.error(e);
        return reply(mess.error);
    }
}
break;
case 'brave': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('kurumi'))
    try {
        await loading();
        let response = await fetchJson(`${apikey.api}/search-engine/brave?apiKey=${apikey.key}&query=${text}`);
        let cap = '';
        let no = 1;
        for (let item of response.result.results) { 
            cap += `*⭔ No:* ${no++}\n*⭔ Title:* ${item.title}\n*⭔ Description:* ${item.description}\n*⭔ Site Name:* ${item.siteName}\n*⭔ Date:* ${item.date}\n*⭔ URL:* ${item.link || 'URL tidak tersedia'}\n\n`;
        }
        let imageUrl = response.result.results[Math.floor(Math.random() * response.result.results.length)].imageUrl;
        await Yudzxml.sendMessage(m.chat, { image: { url: imageUrl }, caption: cap }, { quoted: m });
    } catch (e) {
        console.error(e);
        return reply(mess.error);
    }
}
break;
case 'lirik': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('duka last child'))
try {
await loading()
let li = await fetchJson(`https://api.agatz.xyz/api/lirik?message=${text}`);
let ri = li.data;
let ik = `*⭔ Title:*\n${ri.title}\n\n*⭔ Album:*\n${ri.album}\n\n*⭔ Lirik:*\n${ri.lyrics}`
Yudzxml.sendMessage(m.chat,{ image: { url: ri.thumb }, caption: ik }, { quoted: m })
} catch (e) {
reply(mess.error)
}
}
break
case 'pin': 
case 'pinterest':{
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('tobrut'))
try {
  await loading();
  let cari = await (await fetch(`${apikey.beta}/api/search/pinterest?text1=${text}&apikey=${apikey.botz}`)).json();
  let yudz = cari.result[Math.floor(Math.random() * cari.result.length)]
  await Yudzxml.sendMessage(from, { image: { url: yudz }, caption: mess.success }, { quoted: m });
} catch (error) {
  console.log(error)
  return reply(mess.error)
}
}
break
case 'chord': 
case 'kuncigitar':{
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('satu bulan'))
try {
await loading();
let query = text.replace(/\s/g, '+');
let a = await chord(query);
reply(`*⭔ Song :* ${a.title}\n*⭔ Chord :*\n\n${a.chord}`);
} catch (error) {
  return reply(mess.error)
}
};
break
case 'tiktokht': 
case 'tthastag': 
case 'tiktoksearch':
case 'ttsearch': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('viral'))
await loading()
    try {
        let res = await tiktoks(text)

        Yudzxml.sendMessage(m.chat, { video: { url: res.no_watermark }, caption: res.title, mimetype: 'video/mp4' }, { quoted: m })
    } catch (e) {
        return reply(error)
    }
}
break
case 'ttstalk': 
case 'tiktokstalk':{
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('username'))
await loading()
let cek = await fetchJson(`${apikey.beta}/api/stalk/tt?username=${text}&apikey=${apikey.botz}`);
let hasil = cek.result;
let cap = `
*𝗧𝗜𝗞𝗧𝗢𝗞 𝗦𝗧𝗔𝗟𝗞𝗘𝗥𝗦*
   *< X7BOTZ - MULTIDEVICE >*
   
*• ᴜꜱᴇʀɴᴀᴍᴇ  :* ${hasil.username}
*• ʟɪᴋᴇ      :* ${hasil.likes}
*• ꜰᴏʟʟᴏᴡᴇʀꜱ :* ${hasil.followers}
*• ꜰᴏʟʟᴏᴡɪɴɢ :* ${hasil.following}
*• ᴜᴘʟᴏᴀᴅ   :* ${hasil.totalPosts}
*• ʙɪᴏ ᴅᴀᴛᴀ :* ${hasil.description}`

await Yudzxml.sendMessage(m.chat, { image: { url: hasil.profile }, caption: cap }, {quoted: m })
}
break
case 'igstalk':
case 'instagramstalk':{
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('username'))
await loading()
let stalk = await fetchJson(`${apikey.beta}/api/stalk/ig?username=${text}&apikey=${apikey.botz}`);
let hasil = stalk.result;
let cap = `
*𝗜𝗡𝗦𝗧𝗔𝗚𝗥𝗔𝗠 𝗦𝗧𝗔𝗟𝗞𝗘𝗥*
   *< X7BOTZ - MULTIDEVICE >*
   
*• ᴜꜱᴇʀɴᴀᴍᴇ :* ${hasil.username}
*• ꜰᴜʟʟɴᴀᴍᴇ  :* ${hasil.fullName}
*• ꜰᴏʟʟᴏᴡᴇʀꜱ :* ${hasil.followers}
*• ꜰᴏʟʟᴏᴡɪɴɢ :* ${hasil.following}
*• ᴜᴘʟᴏᴀᴅ   :* ${hasil.postsCount}
*• ʙɪᴏ ᴅᴀᴛᴀ :* ${hasil.bio}`

await Yudzxml.sendMessage(m.chat, { image: { url: hasil.photoUrl }, caption: cap }, {quoted: m })
}
break
case 'yts':
case 'ytsearch': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('duka last child'))
await loading()
let search = await yts(text)
let teks = '*YouTube Search*\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
}
Yudzxml.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
}
break
case 'spotifysearch': 
case 'sposearch': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('somebody pleasure'))
    await loading();
    try {
        let api = await (await fetch(`https://api.agatz.xyz/api/spotify?message=` + text)).json();
        let teks = '*Spotify Search*\n\n Result From ' + text + '\n\n';
        let no = 1;
        for (let yudz of cari.data) {
            teks += `⭔ *No:* ${no++}\n⭔ *Judul:* ${yudz.trackName}\n⭔ *Artis:* ${yudz.artistName}\n⭔ *Album:* ${yudz.albumName}\n⭔ *Durasi:* ${yudz.duration}\n⭔ *Url:* ${yudz.externalUrl}\n\n─────────────────\n\n`;
        }
        let imageUrl = cari.data[0].previewUrl ? cari.data[0].previewUrl : 'https://api.tioo.eu.org/file/qjzhXnVO6lS3.jpg';

        Yudzxml.sendMessage(m.chat, { image: { url: imageUrl }, caption: teks }, { quoted: m });
    } catch (error) {
        return reply(mess.error);
    }
}
break;
case 'gsm':
case 'cekhp':
case 'cekdevice': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('iphone 14'))
    await loading();
    try {
        let response = await fetch(`${apikey.api}/search/gsm?apiKey=${apikey.key}&query=${text}`);
        let cek = await response.json();
        if (!cek.result || cek.result.length === 0) {
            return reply('Device not found.');
        }
        let caption = '';
        let no = 1;
        for (let mmk of cek.result) {
            caption += `
*⭔ No :* ${no++}
*⭔ Name:* ${mmk.name}
*⭔ Id:* ${mmk.id}
*⭔ Description:*\n${mmk.description}\n\n`;
        }
        let yudd = cek.result[0];
        await Yudzxml.sendMessage(m.chat, { image: { url: yudd.thumbnail }, caption: caption }, { quoted: m });
    } catch (error) {
        console.error(error); 
        return reply('An error occurred while fetching the device information.');
    }
}
break;
case 'webtoon':{
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('lookism'))
await loading();
let results = await webtoons(text)
if (results.length > 0) {
let message = `Hasil dari pencarian ${text} :\n\n`;
results.forEach((result, index) => {
message += `⭔ Title : ${result.judul}\n⭔ Like : ${result.like}\n⭔ Creator : ${result.creator}\n⭔ Genre : ${result.genre}\n⭔ LinkBaca : ${result.url}\n\n`;
 });
reply(message)
 } else {
reply(`Hasil Pencarian ${text} Tidak Ditemukan.`);
}
}
break
case 'samehadakudl':{
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('link'))
await loading();
let cari = await (await fetch(`${apikey.api}/anime/samehadakudl?apiKey=${apikey.key}&url=${text}`)).json()
let yudz = cari.result.unduhan[0]
let cap = '*_PILIH LINK ALTERNATIF_*'+'\n\n'
for (let yudz of cari.result.unduhan) { cap += `*🏷️ ALTERNATIF ${yudz.nomorServer} :* ${yudz.nama}\n*🔗 LINK UNDUH :* ${yudz.tautan}\n\n`
}
await reply(cap)
}
break  
case 'samehadakudetail':{
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('link'))
await loading();
let cari = await (await fetch(`${apikey.api}/anime/samehadaku-detail?apiKey=${apikey.key}&url=${text}`)).json()
let yudz = cari.result.episodes[0]
let cap = '*_LIST ALL EPISODE_*'+'\n\n'
for (let yudz of cari.result.episodes) { cap += `*🏷️ TITLE :* ${yudz.title}\n*🀄 DATE :* ${yudz.date}\n*🔗 LINK :* ${yudz.url}\n\n`
}
await Yudzxml.sendMessage(m.chat, { image: { url: cari.result.image }, caption: cap }, {quoted: m })
}
break  
case 'samehadaku': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('jujutsu kaisen'))
await loading();
let cari = await (await fetch(`${apikey.api}/anime/samehadaku2?apiKey=${apikey.key}&query=${text}`)).json()
let yudz = cari.result[0]
let cap = '_Samehadaku Search From: *'+text+'*_\n\n'
for (let yudz of cari.result) { 
cap += `*🏷️ TITLE :* ${yudz.title}\n*🃏 RATING :* ${yudz.rating}\n*🏯 GENRE :* ${yudz.genres}\n*☃️ STATUS :* ${yudz.status}\n*🔗 LINK :* ${yudz.link}\n*🀄 DESKRIPSI :*\n${yudz.description}\n\n`
}
await Yudzxml.sendMessage(m.chat, { image: { url: yudz.image }, caption: cap }, {quoted: m })
}
break  
//<=================================>//
//<========= DOWNLOAD MENU =========>//
//<=================================>//
case 'soundcloud': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!text) return reply(example('duka last child'))
if (!MinLimit(m.sender)) return;
await loading()
try {
let yudd1 = await fetchJson(`https://api.agatz.xyz/api/soundcloud?message=${text}`);
let urlsc = yudd1.data[0].link
let yudd = await fetchJson(`${apikey.beta}/api/download/soundcloud?url=${urlsc}?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&apikey=${apikey.botz}`)
let title = yudd.result.title;
let thumbnail = yudd.result.thumbnail;
let url = yudd.result.url;
await Yudzxml.sendMessage(m.chat, {
audio: {
  url: url
},
mimetype: 'audio/mpeg',
contextInfo: {
  externalAdReply: {
    showAdAttribution: true,
    title: title || 'Untitled',
    body: `${config.botname}`,
    sourceUrl: text,
    thumbnailUrl: thumbnail || 'https://example.com/default_thumbnail.jpg',
    mediaType: 1,
    renderLargerThumbnail: true
}
 }
  }, { quoted: m });
} catch (e) {
  console.log(e)
  return reply(mess.error)
}
}
break
case 'soundclouddl': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!text) return reply(example('link'))
if (!MinLimit(m.sender)) return;
await loading()
try {
let yudd = await fetchJson(`${apikey.beta}/api/download/soundcloud?url=${text}?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&apikey=${apikey.botz}`)
let title = yudd.result.title;
let thumbnail = yudd.result.thumbnail;
let url = yudd.result.url;
await Yudzxml.sendMessage(m.chat, {
audio: {
  url: url
},
mimetype: 'audio/mpeg',
contextInfo: {
  externalAdReply: {
    showAdAttribution: true,
    title: title || 'Untitled',
    body: `${config.botname}`,
    sourceUrl: text,
    thumbnailUrl: thumbnail || 'https://example.com/default_thumbnail.jpg',
    mediaType: 1,
    renderLargerThumbnail: true
}
 }
  }, { quoted: m });
} catch (e) {
  console.log(e)
  return reply(mess.error)
}
}
break
case 'twitter': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
    if (!text) return reply(example('link'))
    if (!MinLimit(m.sender)) return;
    await loading();
    try {
        let response = await (await fetch(`${apikey.api}/downloader/twitter?apiKey=${apikey.key}&url=${text}`)).json();
            let result = response.result.data.result[0];
            if (result.type === 'video') {
                await Yudzxml.sendMessage(m.chat, { video: { url: result.url }, caption: response.result.data.description }, { quoted: m });
            } else if (result.type === 'image') {
                await Yudzxml.sendMessage(m.chat, { image: { url: result.url }, caption: response.result.data.description }, { quoted: m });
            } else {
                return reply('LINK TIDAK VALID/TIDAK MEMILIKI KONTEN VIDEO/FOTO');
            }
    } catch (e) {
        console.log(e);
        return reply(mess.error);
    }
}
break;
case 'drivedl':
case 'gdrive': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('link'))
// WM YUDZXML
  await loading();
  try {
// WM YUDZXML
    const response = await fetchJson(`https://api.agatz.xyz/api/drivedl?url=${text}`)
    const yudd = response.data;
// WM YUDZXML
    const result4 = `
 🔧 ≡ *GOOGLE DRIVE*
 
▢ *Nama:* ${yudd.name}
▢ *Size:* -
`;
// WM YUDZXML
await Yudzxml.sendMessage(m.chat, {
      document: { url: yudd.download },
      fileName: yudd.name,
      mimetype: 'application/octet-stream',
      caption: result4
    }, { quoted: m });
// WM YUDZXML
  } catch (error) {
    console.log('Kesalahan: ' + error);
    return reply(mess.error);
  }
}
break;
case 'mediafire': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('link'))
// WM YUDZXML
  await loading();
  try {
// WM YUDZXML
    const response = await fetchJson(`https://api.agatz.xyz/api/mediafire?url=${text}`)
    const yudd = response.data[0];
// WM YUDZXML
    const result4 = `
 🔧 ≡ *MEDIAFIRE*
 
▢ *Nama:* ${yudd.nama}
▢ *Size:* ${yudd.size}
`;
// WM YUDZXML
await Yudzxml.sendMessage(m.chat, {
      document: { url: yudd.link },
      fileName: yudd.nama,
      mimetype: 'application/octet-stream',
      caption: result4
    }, { quoted: m });
// WM YUDZXML
  } catch (error) {
    console.log('Kesalahan: ' + error);
    return reply(mess.error);
  }
}
break;
case 'pindl':
case 'pindownload':
case 'pinterestdl':
case 'donwloadpin': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('link'))
if (!isURL(text)) return reply(mess.urlnotvalid)
await loading();
const mediaUrl = await (await fetch(`https://api.agatz.xyz/api/pinterest?url=${text}`)).json();
const url_media = mediaUrl.data.result
    try {
        const response = await axios.head(url_media); 
        const contentType = response.headers['content-type']; 
        if (contentType.startsWith('image/')) {
            await Yudzxml.sendMessage(m.chat, { image: { url: url_media}, caption: mess.success }, { quoted: m });
            return
        } else {
            await Yudzxml.sendMessage(m.chat, { video: { url: url_media}, caption: mess.success }, { quoted: m });
            return 
        }
    } catch(e) {
        return reply(mess.error)
    }
}
break
case 'an1':
case 'mod':
case 'apkmod':
case 'android1': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('pou mod apk'))
await loading()
try {
  const url1 = await android1.search(text);
  const url2 = url1[0].link;
  const url3 = await android1.detail(url2);
  const url4 = url3.downloadUrl;
  const url5 = await android1.download(url4);
  const selesai = url5.downloadUrl;
  Yudzxml.sendMessage(m.chat,
 { document:
 {
 url: selesai
 }, fileName: url5.title, mimetype: 'application/xapk', contextInfo: {
 externalAdReply: {
 title: url1[0].name,
 body: `${config.botname}`,
 thumbnailUrl: url5.imageUrl,
 mediaType: 1,
 showAdAttribution: true,
 renderLargerThumbnail: false,
 },
 }, 
 }, { quoted: m });
} catch (error) {
  return reply(mess.error)
}
}
break
case 'ttvideo':
case 'tiktok': 
case 'tt': 
case 'tiktokmp4': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!text) return reply(example('link'))
if (!isURL(text)) return reply(mess.urlnotvalid)
if (!MinLimit(m.sender)) return;
await loading();
    try {
    let res = await tiktok2(text)
        await Yudzxml.sendMessage(m.chat, { video: { url: res.no_watermark }, caption: res.title }, { quoted: m })
    } catch(e){
        console.log(e)
    let cari = await tiktoks(text);
    await Yudzxml.sendMessage(m.chat, { video: { url: cari.no_watermark }, caption: cari.title }, { quoted: m })
    }
}
break
case 'putar':
case 'lagu':
case 'music':
case 'ytplay': 
case 'play': {
    if (!isRegistered) return reply(mess.register);
    if (isBan) return reply(mess.ban);
    if (!text) return reply(example('satu bulan'));
    if (!MinLimit(m.sender)) return;
await loading();
try {
  let search = await yts(text);
  let firstVideo = search.all[0];
  let memek = await fetchJson(`https://api-yudzxml.vercel.app/api/ytdl?url=${firstVideo.url}&format=mp3`);
  let hasil = memek.result;
  await Yudzxml.sendMessage(m.chat, {
    audio: {
      url: hasil.download },
      mimetype: 'audio/mpeg',
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          title: firstVideo.title || 'Untitled',
          body: `${config.botname}`,
          sourceUrl: firstVideo.url,
          thumbnailUrl: firstVideo.thumbnail || 'https://example.com/default_thumbnail.jpg',
          mediaType: 1,
          renderLargerThumbnail: true
    }
  }
}, { quoted: m });
} catch (e) {
  console.log(e);
  return reply(mess.error)
}
}
break;
case 'youtubeaudio':
case 'youtubemp3':
case 'ytmp3': {
    if (!isRegistered) return reply(mess.register);
    if (isBan) return reply(mess.ban); 
    if (!text) return reply(example('link'));
    if (!isURL(text)) return reply(mess.urlnotvalid);
    if (!MinLimit(m.sender)) return;
await loading();
try {
  let search = await yts(text);
  let firstVideo = search.all[0];
  let memek = await fetchJson(`https://api-yudzxml.vercel.app/api/ytdl?url=${firstVideo.url}&format=mp3`);
  let hasil = memek.result;
  await Yudzxml.sendMessage(m.chat, {
    audio: {
      url: hasil.download },
      mimetype: 'audio/mpeg',
      contextInfo: {
        externalAdReply: {
          showAdAttribution: true,
          title: firstVideo.title || 'Untitled',
          body: `${config.botname}`,
          sourceUrl: firstVideo.url || "https://t.me/Yudzxyz",
          thumbnailUrl: firstVideo.thumbnail || 'https://example.com/default_thumbnail.jpg',
          mediaType: 1,
          renderLargerThumbnail: true
    }
  }
}, { quoted: m });
} catch (e) {
  console.log(e);
  return reply(mess.error)
}
}
break;
case 'spo-dl': {
if (!text) return reply(example('link'))
  await loading();
  // WM YUDZXML 
  try {
    let yudd = await fetchJson(`https://api.agatz.xyz/api/spotifydl?url=${text}`);
  // WM YUDZXML     
    let final = JSON.parse(yudd.data);
    let thumbnailUrl = (final.gambar_kecil && final.gambar_kecil.length > 0) 
      ? final.gambar_kecil[0].url 
      : 'https://example.com/default_thumbnail.jpg';
  // WM YUDZXML       
    await Yudzxml.sendMessage(m.chat, { 
      audio: { 
        url: final.url_audio_v1 
      }, 
      mimetype: 'audio/mpeg', 
      contextInfo: { 
        externalAdReply: { 
          showAdAttribution: true, 
          title: final.judul || 'Untitled',
          body: `${config.botname}`, 
          sourceUrl: text, 
          thumbnailUrl: thumbnailUrl, 
          mediaType: 1, 
          renderLargerThumbnail: true,
        },
      },
    }, { quoted: m });
  // WM YUDZXML     
  } catch (e) {
    console.log(e);
    return reply(mess.error);
  }
  // WM YUDZXML   
}
break;
case 'youtubevideo':
case 'youtubemp4':
case 'ytmp4': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);  
if (!args[0] || !args[1]) return reply(`_Contoh : *${prefix + command} https://youtube.com/watch?v=8zwz2fVgfVM 360*_\n\nResolusi : ( 144, 240, 360, 480, 720, 1080 )\n\n_Jangan Menggunakan Resolusi Terlalu Besar Agar Proses Upload Vidio Tidak Lama_`);
if (!MinLimit(m.sender)) return;
await loading()
try {
  let cari = await fetchJson(`https://api-yudzxml.vercel.app/api/ytdl?url=${args[0]}&format=${args[1]}`)
  let hasil = cari.result;
  await Yudzxml.sendMessage(m.chat, { video: { url: hasil.download }, caption: cari.title }, { quoted: m });
} catch (e) {
  console.log(e)
  return reply(mess.error)
}
}
break
case 'spotifydownloader':
case 'spotifydl': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('link'))
if (!isURL(text)) return reply(mess.urlnotvalid)
await loading()
try {
  let yudd = await fetchJson(`https://api.agatz.xyz/api/spotifydl?url=${text}`);
  // WM YUDZXML     
    let final = JSON.parse(yudd.data);
    let thumbnailUrl = (final.gambar_kecil && final.gambar_kecil.length > 0) 
      ? final.gambar_kecil[0].url 
      : 'https://example.com/default_thumbnail.jpg';
  // WM YUDZXML       
    await Yudzxml.sendMessage(m.chat, { 
      audio: { 
        url: final.url_audio_v1 
      }, 
      mimetype: 'audio/mpeg', 
      contextInfo: { 
        externalAdReply: { 
          showAdAttribution: true, 
          title: final.judul || 'Untitled',
          body: `${config.botname}`, 
          sourceUrl: text, 
          thumbnailUrl: thumbnailUrl, 
          mediaType: 1, 
          renderLargerThumbnail: true,
        },
      },
    }, { quoted: m });
    } catch (e) {
        console.error(e); // Log the error for debugging
        return reply(mess.error);
    }
}
break;
case 'capcut': 
case 'ccdl': 
case 'cc': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
  if (!MinLimit(m.sender)) return;  
  if (!text) return reply(example('link'));
  if (!isURL(text)) return reply(mess.urlnotvalid);
  
  try {
    await loading();
    let capcut = await fetchJson(`${apikey.beta}/api/download/capcut?url=${text}&apikey=${apikey.botz}`);
    console.log(capcut)
    if (capcut.status) {
      let cc = capcut.result;
      let caption = `* *Judul:* ${cc.title}\n` +
                    `* *Judul Pendek:* ${cc.short_title}\n` +
                    `* *Durasi:* ${Math.floor(cc.duration / 60)} menit ${cc.duration % 60} detik\n` +
                    `* *Jumlah Suka:* ${cc.like_count}\n` +
                    `* *Jumlah Komentar:* ${cc.comment_count}\n` +
                    `* *Penulis:* ${cc.author.name}\n` +
                    `* Jumlah Putar:* ${cc.play_amount}\n` +
                    `* *Jumlah Favorit:* ${cc.favorite_count}\n` +
                    `* *ID Video:* ${cc.id}`;
     await Yudzxml.sendMessage(m.chat, { video: { url: cc.video }, caption: caption }, { quoted: m });
    } else {
      reply(mess.error); 
    }
  } catch (e) {
    console.log(e);
    reply(mess.error); 
  }
}
break;
case 'ttmp3': 
case 'tiktokmp3': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('link'))
if (!isURL(text)) return reply(mess.urlnotvalid)
await loading()
try {
  let cari = await tiktok2(text)
  await Yudzxml.sendMessage(m.chat, { audio: { url: cari.music }, mimetype: 'audio/mpeg' }, { quoted: m })
} catch (error) {
  return reply(mess.error)
}
}
break
case 'ttslide': 
case 'tiktokslide':
case 'ttimage':
case 'ttimg': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);  
    if (!MinLimit(m.sender)) return;
    if (!text || !text.includes('tiktok')) {
        return reply(`Contoh: \n\n${prefix + command} https://vt.tiktok.com/ZSFka65gt/`);
    }
    try {
        await Yudzxml.sendMessage(m.chat, { react: { text: '💬', key: m.key } });
        const ttslide_result = await ttslide(text);
        if (ttslide_result && ttslide_result.length > 0 && ttslide_result[0].imgSrc) {
            for (let i = 0; i < ttslide_result[0].imgSrc.length; i++) {
                await Yudzxml.sendMessage(m.chat, { image: { url: ttslide_result[0].imgSrc[i] } });
            }
        } else {
            return reply('Tidak ada gambar yang ditemukan.');
        }
    } catch (e) {
        console.error(e);
        return reply(mess.error);
    }
}
break;
case 'tt-slide': {
    if (!text) {
        return reply(`[!] *wrong input*\n\nEx : ${prefix + command} Link Tiktok`);
    } 
  await loading();
    try {
        let yudd = await fetchJson(`https://api.agatz.xyz/api/tiktok?url=${text}`);
        let images = yudd.data.data.filter(item => item.type === 'photo').map(item => item.url);
        for (let imageUrl of images) {
            await Yudzxml.sendMessage(m.chat, { image: { url: imageUrl }, caption: mess.success }, { quoted: m });
        }
    } catch (e) {
        console.log(e);
        return reply('*FITUR SEDANG ERROR*');
    }
}
break;
case 'spotify': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
    if (!text) return reply(example('bernadya satu bulan'))
    await loading();
    try {
        let cari = await (await fetch(`https://api.agatz.xyz/api/spotify?message=` + text)).json();
         let track = cari.data[0].externalUrl
        let yudd = await fetchJson(`https://api.agatz.xyz/api/spotifydl?url=${track}`);
  // WM YUDZXML     
    let final = JSON.parse(yudd.data);
    let thumbnailUrl = (final.gambar_kecil && final.gambar_kecil.length > 0) 
      ? final.gambar_kecil[0].url 
      : 'https://example.com/default_thumbnail.jpg';
  // WM YUDZXML       
    await Yudzxml.sendMessage(m.chat, { 
      audio: { 
        url: final.url_audio_v1 
      }, 
      mimetype: 'audio/mpeg', 
      contextInfo: { 
        externalAdReply: { 
          showAdAttribution: true, 
          title: final.judul || 'Untitled',
          body: `${config.botname}`, 
          sourceUrl: track, 
          thumbnailUrl: thumbnailUrl, 
          mediaType: 1, 
          renderLargerThumbnail: true,
        },
      },
      // WM YUDZXML
    }, { quoted: m });
    } catch (e) {
        console.error(e); 
        return reply(mess.error);
    }
}
break;
case 'fb': 
case 'facebook': 
case 'fbdl':
case 'facebookdownloader': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
  if (!MinLimit(m.sender)) return; 
  if (!text) return reply(example('link')); 
  if (!isURL(text)) return reply(mess.urlnotvalid); 

  try {
    await loading(); 
    let res = await fdown.download(text); 

    if (res && res.length > 0) { 
      let videoData = res[0]; 
      let videoUrl = videoData.hdQualityLink || videoData.normalQualityLink; 

      if (videoUrl) { 
        let caption = `*Judul:* ${videoData.title}\n*Deskripsi:* ${videoData.description}\n*Durasi:* ${videoData.duration}`; 
        await Yudzxml.sendMessage(m.chat, { 
          video: { url: videoUrl }, 
          caption: caption, 
          mimetype: 'video/mp4' 
        }, { quoted: m }); 
      } else {
        return reply(mess.error); 
      }
    } else {
      return reply(mess.error); 
    }
  } catch (e) {
    console.log(e); 
    return reply(mess.error); 
  }
}
break;
case 'instagram': 
case 'ig':
case 'igdl': 
case 'igmp4': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
    if (!text) return reply(example('link'))
    if (!isURL(text)) return reply('Masukkan Linknya ?');
    if (!MinLimit(m.sender)) return;
    await loading()
    const mediaUrl = await igdl(text);
    const url_media = mediaUrl[0].url;
    try {
        const response = await axios.head(url_media); 
        const contentType = response.headers['content-type']; // Mendapatkan tipe konten dari header
        if (contentType.startsWith('image/')) {
            await Yudzxml.sendMessage(m.chat, { image: { url: url_media}, caption: mess.success }, { quoted: m });
            return
        } else {
            await Yudzxml.sendMessage(m.chat, { video: { url: url_media}, caption: mess.success }, { quoted: m });
            return 
        }
    } catch(e) {
        return reply(mess.error)
    }
}
break
case 'apkdl': 
case 'apk': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('mlbb'))
 try {
 await loading()     
 let apk = await (await fetch(`${apikey.api}/gaming/aptoide-download?apiKey=${apikey.key}&id=` + text)).json();
 let app = apk.result;
 Yudzxml.sendMessage(m.chat,
 { document:
 {
 url: app.link
 }, fileName: app.appname + '.apk', mimetype: 'application/xapk', contextInfo: {
 externalAdReply: {
 title: app.appname,
 body: `${config.botname}`,
 thumbnailUrl: app.img,
 mediaType: 1,
 showAdAttribution: true,
 renderLargerThumbnail: false,
 },
 }, 
 }, { quoted: m });
} catch (e) {
 reply(mess.error)
}
}
break
case 'snackvidio': 
case 'snackvid': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('link'))
if (!isURL(text)) return reply('Masukkan Linknya ?');
try {
await loading()  
let snck = await (await fetch(`${apikey.api}/downloader/snackvideo?apiKey=${apikey.key}&url=${text}`)).json()
let shannz = snck.result
await Yudzxml.sendMessage( m.chat, { video: { url: shannz.media }, caption: `${shannz.title}` },{ quoted: m })
} catch (err) {
console.log(err)
let yudd = await fetchJson(`${apikey.beta}/api/download/snackvideo?url=${text}&apikey=${apikey.botz}`)
let hasil = yudd.result
await Yudzxml.sendMessage( m.chat, { video: { url: hasil.media }, caption: `${hasil.title}` },{ quoted: m })
}
}
break
case 'aio':
case 'retatube':
case 'aiodl':
case 'retatubedl': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
    if (!MinLimit(m.sender)) return;
    if (!text) return reply(example('link'))
    if (!isURL(text)) return reply(mess.urlnotvalid);
    
    await loading();
    
    try {
        let cari = await (await fetch(`${apikey.api}/downloader/aiodown?apiKey=${apikey.key}&url=${text}`)).json();
        if (cari.result && cari.result.mediaUrls && cari.result.mediaUrls.length > 0) {
            let yuddd = cari.result.mediaUrls[0];
            await Yudzxml.sendMessage(m.chat, { video: { url: yuddd.url }, caption: mess.success }, { quoted: m });
        } else {
            throw new Error('No media URLs found in aiodown response');
        }
    } catch (error) {
        try {
            let kontol = await (await fetch(`${apikey.api}/downloader/retatube?apiKey=${apikey.key}&url=${text}`)).json();
            if (kontol.result && kontol.result.downloadLinks && kontol.result.downloadLinks.length > 0) {
                let hasil = kontol.result.downloadLinks[0];
                await Yudzxml.sendMessage(m.chat, { video: { url: hasil.url }, caption: mess.success }, { quoted: m });
            } else {
                throw new Error('No download links found in retatube response');
            }
        } catch (error) {
            console.error(error);
            return reply(mess.error);
        }
    }
}
break;
case 'telestick':
case 'telesticker':
case 'sticktele': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('link'))
if (!isURL(text)) return reply(mess.urlnotvalid)
try {
await loading() 
let tele = await (await fetch(`${apikey.api}/downloader/telegram-sticker?apiKey=${apikey.key}&url=` + text)).json();
if (tele.status && tele.result.length > 0) {
for (let url of tele.result) {
await Yudzxml.sendMessage(m.chat, { sticker: { url: url } });
}
} else {
reply('Tidak ada stiker yang ditemukan.');
} 
reply(mess.success)
} catch (e) {
let tele = await (await fetch(`${apikey.beta}/api/download/telesticker?url=${text}&apikey=${apikey.botz}`)).json();
for (let yudd of tele.result) {
await Yudzxml.sendImageAsSticker(m.chat, yudd.url, m, { packname: config.packname, author: config.author })
}
}
}
break
case 'animesw': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return; 
await loading
let vidanime = await fetchJson(`${apikey.beta}/api/download/storyanime?apikey=${apikey.botz}`);
let hasil = vidanime.result;
let cap = `*ANIME STORY WHATSAPP*

*⭔ TITLE :* ${hasil.title}`

await Yudzxml.sendMessage(m.chat, { video: { url: hasil.url }, caption: cap }, {quoted: m })
}
break
//<=================================>//
//<========= STORE MENU ============>//
//<=================================>//
case 'done': {
if (!isAdmins && !isOwner) return reply(mess.owner)
if (!text) return reply(example('SCRIPT BOT,2'))
if (!text.split(',')) return reply('barang,harga\n\n*Contoh :* Panel Unlimited,2')
const [barang, harga] = text.split(',')
if (isNaN(harga)) return reply('Format Harga Tidak Valid')
var total = `${harga}000000`
var total2 = Number(`${harga}000`)
const teks = `*〽 TRANSAKSI BERHASIL*

*📦 Barang :* ${barang}
*💸 Nominal :* Rp${toRupiah(total2)}
*📅 Tanggal :* ${hariini}

_*🏪 ${config.namestore}*_
🪀 *WHATSAPP* :  https://wa.me/${config.owner}
📠 *TESTIMONI* : ${config.saluran}

_*TERIMAKASIH SUDAH MENGGUNAKAN LAYANAN JASA KAMI 🥳*_`
 Yudzxml.relayMessage(m.chat,  {requestPaymentMessage: {currencyCodeIso4217: 'IDR', amount1000: Number(total), requestFrom: m.sender, noteMessage: { extendedTextMessage: { text: `${teks}`, contextInfo: { externalAdReply: { showAdAttribution: true}}}}}}, {})
}
break
case 'tunda':
case 'pending': {
if (!isOwner) return reply(mess.owner)
if (!isReply) return reply(`reply pesanan dengan caption "nama barang"\n\nContoh : reply chat pesanan dengan perintah ${prefix + command} sewabot`)
if (!text) return reply(`reply pesanan dengan caption "nama barang"\n\nContoh : reply chat pesanan dengan perintah ${prefix + command} sewabot`)
let teks2 = m.quoted.text
let number = `@${m.quoted.sender.split`@`[0]}`
const datek = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));
const hours = datek.getHours();
const minutes = datek.getMinutes();
const timeNow = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
const teks = `*〽 TRANSAKSI DITUNDA*

*📦 Barang :* ${text}
*📅 Tanggal :* ${hariini}
*🕓 Waktu :* ${timeNow} WIB
*📞 Nomor :* ${number}

*📝 Catatan :* 
${teks2}

_*🏪 ${config.namestore}*_
🪀 *WHATSAPP* :  https://wa.me/${config.owner}
📠 *TESTIMONI* : ${config.saluran}

_*TERIMAKASIH SUDAH MENGGUNAKAN LAYANAN JASA KAMI 🥳*_`
 Yudzxml.relayMessage(m.chat,  {requestPaymentMessage: {currencyCodeIso4217: 'IDR', amount1000: `50000000`, requestFrom: m.sender, noteMessage: { extendedTextMessage: { text: `${teks}`, contextInfo: { externalAdReply: { showAdAttribution: true}}}}}}, {})
}
break
case 'batal': {
if (!isOwner) return reply(mess.owner)
if (!isReply) return reply(`reply pesanan dengan caption "nama barang"\n\nContoh : reply chat pesanan dengan perintah ${prefix + command} sewabot`)
if (!text) return reply(`reply pesanan dengan caption "nama barang"\n\nContoh : reply chat pesanan dengan perintah ${prefix + command} sewabot`)
let teks2 = m.quoted.text
let number = `@${m.quoted.sender.split`@`[0]}`
const datek = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));
const hours = datek.getHours();
const minutes = datek.getMinutes();
const timeNow = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
const teks = `*〽 TRANSAKSI DIBATALKAN*

*📦 Barang :* ${text}
*📅 Tanggal :* ${hariini}
*🕓 Waktu :* ${timeNow} WIB
*📞 Nomor :* ${number}

*📝 Catatan :* 
${teks2}

_*🏪 ${config.namestore}*_
🪀 *WHATSAPP* :  https://wa.me/${config.owner}
📠 *TESTIMONI* : ${config.saluran}

_*TERIMAKASIH SUDAH MENGGUNAKAN LAYANAN JASA KAMI 🥳*_`
 Yudzxml.relayMessage(m.chat,  {requestPaymentMessage: {currencyCodeIso4217: 'IDR', amount1000: `0`, requestFrom: m.sender, noteMessage: { extendedTextMessage: { text: `${teks}`, contextInfo: { externalAdReply: { showAdAttribution: true}}}}}}, {})
}
break
case 'proses': {
if (!isOwner) return reply(mess.owner)
if (!isReply) return reply(`reply pesanan dengan caption "nama barang"\n\nContoh : reply chat pesanan dengan perintah ${prefix + command} sewabot`)
if (!text) return reply(`reply pesanan dengan caption "nama barang"\n\nContoh : reply chat pesanan dengan perintah ${prefix + command} sewabot`)
let teks2 = m.quoted.text
let number = `@${m.quoted.sender.split`@`[0]}`
const datek = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));
const hours = datek.getHours();
const minutes = datek.getMinutes();
const timeNow = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
const teks = `*〽 TRANSAKSI DIPROSES*

*📦 Barang :* ${text}
*📅 Tanggal :* ${hariini}
*🕓 Waktu :* ${timeNow} WIB
*📞 Nomor :* ${number}

*📝 Catatan :* 
${teks2}

_*🏪 ${config.namestore}*_
🪀 *WHATSAPP* :  https://wa.me/${config.owner}
📠 *TESTIMONI* : ${config.saluran}

_*TERIMAKASIH SUDAH MENGGUNAKAN LAYANAN JASA KAMI 🥳*_`
 Yudzxml.relayMessage(m.chat,  {requestPaymentMessage: {currencyCodeIso4217: 'IDR', amount1000: `50000000`, requestFrom: m.sender, noteMessage: { extendedTextMessage: { text: `${teks}`, contextInfo: { externalAdReply: { showAdAttribution: true}}}}}}, {})
}
break
case 'payment':
case 'pembayaran':
case 'dana':
case 'gopay':
case 'ovo': {
  if (!isOwner) return reply(mess.owner)
  await loading()
  reply(fs.readFileSync('./Storage/lib/payment.js').toString())
}
break
case 'qris': 
case 'qr': {
if (!isOwner) return reply(mess.owner)
  await loading()
  try {
  let fotonya = config.thumbnail.qris[0]
  Yudzxml.sendMessage(m.chat, { image: { url: fotonya }, caption: '*JANGAN LUPA KIRIM BUKTI TF YA KAK 😊*' }, { quoted: m })
} catch (error) {
  return reply(`*QRIS TIDAK TERSEDIA*`)
}
}
break 
case 'settekspayment': 
case 'settekspay':
case 'setpayment': {
if (!isOwner) return reply(mess.owner)
if (text || m.quoted) {
const newteks = m.quoted ? m.quoted.text : text
await fs.writeFileSync('./Storage/lib/payment.js', newteks.toString())
reply('*Berhasil Mengganti Teks Payment*')
} else {
return reply('dengan reply/kirim teks\n\nUntuk melihat teks payment saat ini ketik *.payment*')
}}
break
case 'list': {
    if (db_userlist[from] && db_userlist[from].length > 0) {
        const listItems = db_userlist[from].map((data, index) => `${awalanItem} ${data.keyword}`).join('\n');
        let daftar_list = template_list.replace('{LIST_ITEMS}', listItems);
        daftar_list     = daftar_list.replace('{USER}', pushname);
        daftar_list     = daftar_list.replace('{WAKTU}', jammenit);
        daftar_list     = daftar_list.replace('{TANGGAL}', hariini);
        daftar_list     = daftar_list.replace('{UCAPAN}', ucapanWaktu);
        daftar_list     = daftar_list.replace('{GRUBNAME}', groupMetadata.subject);
        daftar_list     = daftar_list.replace('{USERTAG}', `@${sender.split('@')[0]}`);

        try {
            const UserTagList = groupMetadata.participants.filter(item2 => sender === item2.id);
            Yudzxml.sendMessage(from, { text: daftar_list, mentions: UserTagList.map(a => a.id) }, { quoted: m });
        } catch(e){
            console.log(e)
        }

        
    } else {
        return reply('_Tidak Ada List Di Grup Ini, silakan ketik *addlist* untuk membuat baru_\n\n_Hanya *admin* yang dapat menambah / menghapus list_');
    }
}
break;
case 'dellist':{
if (!isAdmins) return reply(mess.admin)
if (!text) return reply(example('ssh premium'))
const indexToRemove = db_userlist[from].findIndex(data => data.keyword.trim().toLowerCase() === text.trim().toLowerCase());
if (indexToRemove !== -1) {
        const videoPath = `./Storage/video/${db_userlist[from][indexToRemove].keyword}.mp4`;
        const stickerPath = `./Storage/Sticker/${db_userlist[from][indexToRemove].keyword}.gif`;
        try{fs.unlinkSync(videoPath)}catch(c){}try{fs.unlinkSync(stickerPath)}catch(c){}
        db_userlist[from].splice(indexToRemove, 1);
        fs.writeFileSync('./Storage/db/userlist.json', JSON.stringify(db_userlist, null, 2), 'utf8');
       return reply(`Item dengan keyword *${text}* berhasil dihapus.`);
    } else {
       return reply(`keyword *${text}* tidak ditemukan.`);
    }
}
break
case 'addlist': {
    if (!isAdmins) return reply(mess.admin);

    if (!text) {
        return reply('_Masukkan Perintah dan Pesannya_\n\nContoh : addlist canva | berikut adalah list canva ... \n\n_Apabila ingin menambah list dan gambar silakan kirim/reply gambarnya dengan caption *addlist*_');
    }

    let [keyword_addlist, text_addlist] = text.split(`|`);
    if (!keyword_addlist || !text_addlist) {
        return reply('_Masukkan Perintah dan Pesannya_ \n\nContoh : addlist canva | berikut adalah list canva ...');
    }

    let firstPipeIndex = text.trim().indexOf('|');
    let text_addlist2 = firstPipeIndex !== -1 
        ? text.trim().slice(firstPipeIndex + 1).trim() 
        : text.trim();
    
    let url_addlist = '';
    if (isImage) {
        await loading()
        let media_addlist = await Yudzxml.downloadAndSaveMediaMessage(quoted);
        const response = await uploadFileToApi(media_addlist, '6months');
        url_addlist = response.fileUrl;
    } else if (isVideo) {
        const mediaData = await Yudzxml.downloadAndSaveMediaMessage(quoted);
        const destinationPath = `./Storage/video/${keyword_addlist.trim()}.mp4`;
        await fsx.copy(mediaData, destinationPath);
        fs.unlinkSync(mediaData);
        url_addlist = destinationPath;
    } else if (isAudio) {
        const mediaData = await Yudzxml.downloadAndSaveMediaMessage(quoted);
        const destinationPath = `./Storage/audio/${keyword_addlist.trim()}.mp3`;
        await fsx.copy(mediaData, destinationPath);
        fs.unlinkSync(mediaData);
        url_addlist = destinationPath;
    } else if (isSticker) {
        const mediaData = await Yudzxml.downloadAndSaveMediaMessage(quoted);
        const destinationPath = `./Storage/Sticker/${keyword_addlist.trim()}.gif`;
        await fsx.copy(mediaData, destinationPath);
        fs.unlinkSync(mediaData);
        url_addlist = destinationPath;
    } else {
        url_addlist = '-';
    }

    if (!db_userlist[from]) {
        db_userlist[from] = [{ 
            keyword: keyword_addlist.toLowerCase().trim(), 
            text: text_addlist2, 
            url: url_addlist 
        }];
        
        fs.writeFileSync('./Storage/db/userlist.json', JSON.stringify(db_userlist, null, 2), 'utf8');
        return reply(`${keyword_addlist} Sudah ditambahkan ke daftar list\n\n_Ketik list untuk melihat daftar list_`);
    } else {
        const existingDataIndex = db_userlist[from].findIndex(item => 
            item.keyword.toLowerCase() === keyword_addlist.toLowerCase()
        );

        if (existingDataIndex !== -1) {
            return reply(`_Gagal_\n\n_Kata Kunci *${keyword_addlist.trim()}* Sudah Ada Pada Daftar List_`);
        } else {
            db_userlist[from].push({ 
                keyword: keyword_addlist.toLowerCase().trim(), 
                text: text_addlist2, 
                url: url_addlist 
            });
        }

        fs.writeFileSync('./Storage/db/userlist.json', JSON.stringify(db_userlist, null, 2), 'utf8');
        return reply(`*List sudah ditambahkan* _Ketik list untuk melihat daftar *.list*_`);
    }
}
break;
case 'updatelist': {
    if (!isAdmins) return reply(mess.admin);

    if (!text) {
        return reply('_Masukkan Perintah dan Pesannya_\n\nContoh : updatelist canva | berikut adalah list canva ... \n\n_Apabila ingin mengubah gambar list silakan kirim/reply gambarnya dengan caption *updatelist*_');
    }

    let [keyword_updatelist, text_updatelist] = text.split(`|`);
    if (!keyword_updatelist || !text_updatelist) {
        return reply('_Masukkan Perintah dan Pesannya_ \n\nContoh : updatelist canva | berikut adalah list canva ...');
    }

    keyword_updatelist = keyword_updatelist.trim();
    let firstPipeIndex_updatelist = text.indexOf('|');
    let text_updatelist2 = firstPipeIndex_updatelist !== -1 
        ? text.slice(firstPipeIndex_updatelist + 1).trim() 
        : text.trim();

    let url_updatelist = '';

    if (isImage) {
        await loading();
        let media_updatelist = await Yudzxml.downloadAndSaveMediaMessage(quoted);
        const response = await uploadFileToApi(media_updatelist, '6months');
        url_updatelist = response.fileUrl;
    } else if (isVideo) {
        const mediaData = await Yudzxml.downloadAndSaveMediaMessage(quoted);
        const destinationPath = `./Storage/video/${keyword_updatelist.trim()}.mp4`;
        await fsx.copy(mediaData, destinationPath);
        fs.unlinkSync(mediaData);
        url_updatelist = destinationPath;
    } else if (isSticker) {
        const mediaData = await Yudzxml.downloadAndSaveMediaMessage(quoted);
        const destinationPath = `./Storage/Sticker/${keyword_updatelist.trim()}.gif`;
        await fsx.copy(mediaData, destinationPath);
        fs.unlinkSync(mediaData);
        url_updatelist = destinationPath;
    } else {
        url_updatelist = '-';
    }

    if (!db_userlist[from]) {
        db_userlist[from] = [{ 
            keyword: keyword_updatelist.toLowerCase().trim(), 
            text: text_updatelist2, 
            url: url_updatelist 
        }];
        
        fs.writeFileSync('./Storage/db/userlist.json', JSON.stringify(db_userlist, null, 2), 'utf8');
        return reply(`List sudah ditambahkan\n\nKetik list untuk melihat daftar list`);
    } else {
        const existingDataIndex = db_userlist[from].findIndex(item => 
            item.keyword.toLowerCase() === keyword_updatelist.toLowerCase()
        );

        if (existingDataIndex !== -1) {
            db_userlist[from][existingDataIndex] = { 
                keyword: keyword_updatelist.toLowerCase().trim(), 
                text: text_updatelist2, 
                url: url_updatelist 
            };
        } else {
            return reply(`_Tidak ada *${keyword_updatelist}* pada daftar list_`);
        }

        fs.writeFileSync('./Storage/db/userlist.json', JSON.stringify(db_userlist, null, 2), 'utf8');
        return reply(`_Updatelist Berhasil_`);
    }
}
break;
case 'resetlist':
case 'dellistall': {
    if (!isAdmins) return reply(mess.admin);
    if (!db_userlist[from] || db_userlist[from].length === 0) {
        return reply(`_Tidak ada list yang ditemukan untuk grup ini._`);
    }
    if (!text) {
        return reply(`Perintah ini akan menghapus semua list di grup ini. Ketik *dellistall -y* untuk melanjutkan.`);
    }
    if (text.trim() === '-y') {
        delete db_userlist[from];
        fs.writeFileSync('./Storage/db/userlist.json', JSON.stringify(db_userlist, null, 2), 'utf8');
        return reply(`Semua list di grup ini telah berhasil dihapus.`);
    } else {
        return reply(`Penghapusan dibatalkan. Anda harus mengetik *dellistall -y* untuk menghapus list.`);
    }
}
break;
//<=================================>//
//<========= GROUP MENU ============>//
//<=================================>//
case 'listgroup':
case 'listgrup':
case 'listgrup':
case 'listgroub':
case 'listgrub':
case 'listgc':
case 'gruplist':
case 'groplist':
case 'grouplist': {
if (!isOwner) return reply(mess.owner)
let getallgrub = await Yudzxml.groupFetchAllParticipating();
async function formatGrup(index, grup) {
    let response2 = '-';
    let link_grouplist = '';
try {
response2 = await Yudzxml.groupInviteCode(grup.id);
    link_grouplist = `https://chat.whatsapp.com/${response2}`;
} catch{
    link_grouplist = '-'
}
return `╭─「 ${index} 」 *${grup.subject}*
│ Anggota : ${grup.participants.length}
│ ID Grub : ${grup.id}
│ Link    : ${link_grouplist}
╰────────────────────────`;
}
const grupTerurut = Object.values(getallgrub).sort((a, b) => b.participants.length - a.participants.length);
let nomorUrut = 0;
const listGrupString = await Promise.all(grupTerurut.map((grup) => formatGrup(++nomorUrut, grup)));

return reply(`_*Total Group : ${nomorUrut}*_ \n\n`+listGrupString.join('\n\n'));
}
break;
case 'setinfogrup':
case 'setinfogc':
case 'editinfo': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins) return reply(mess.userNotAdmin)
if (!text) return reply(`Silahkan Ketik\n
${prefix + command} on
${prefix + command} off`)
if (args[0] === 'on'){
await Yudzxml.groupSettingUpdate(from, 'unlocked').then((res) => reply(`Sekarang *Semua Anggota Dapat Mengedit Pengaturan Grup*`)).catch((err) => reply(jsonformat(err)))
} else if (args[0] === 'off'){
await Yudzxml.groupSettingUpdate(from, 'locked').then((res) => reply(`Sekarang *Hanya Admin Yang Dapat Mengedit Pengaturan Grup*`)).catch((err) => reply(jsonformat(err)))
}
}
break
case 'setnamegrup':
case 'setnamegc':
case 'editsubjek': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botNotAdmin)
if (!isAdmins) return reply(mess.userNotAdmin)
if (!text) return reply(example('text'))
await Yudzxml.groupUpdateSubject(m.chat, text).then((res) => console.log('Edit Grub') ).catch((err) => console.log('Edit Grub Gagal'))
}
break
case 'setdescgrup':
case 'setdeskgrup':
case 'setdeskgc':
case 'editdesk':{
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botNotAdmin)
if (!isAdmins) return reply(mess.userNotAdmin)
if (!text) return reply(example('text'))
await Yudzxml.groupUpdateDescription(m.chat, text).then((res) => console.log('Edit Desk Grub') ).catch((err) => console.log('Edit Desk Gagal'))
reply('Silakan Baca Deskripsi Grub Baru \n\n'+text)
}
break
case 'tagall': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins) return reply(mess.userNotAdmin)
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${text ? text : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
Yudzxml.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:m })
}
break
case 'setppgroup': 
case 'setppgrup':
case 'setppgc': {
if (!m.isGroup) return reply(mess.group)
if (!isAdmins) return reply(mess.admin)
if (!isImage) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await Yudzxml.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
    try {
        await Yudzxml.updateProfilePicture(groupMetadata.id, { url: media })
        reply(mess.success)
    }catch(e){
        return reply('_Gagal_')
    }
}
break
case 'grub':
case 'grup':
case 'groub':
case 'group': {
    if (!m.isGroup) return reply(mess.group);
    if (!isAdmins) return reply(mess.userNotAdmin);
    if (!isBotAdmins) return reply(mess.botNotAdmin);
    if (!text) return reply(`_Silahkan Ketik_\n
_${prefix + command} open_
_*${prefix + command} close*_

_${prefix + command} close 07:00_
`);

    if (text === 'close') {
        await Yudzxml.groupSettingUpdate(from, 'announcement')
            .then((res) => reply(singlemess.close_grub))
            .catch((err) => reply(jsonformat(err)));
    } 
    else if (text === 'open') {
        await Yudzxml.groupSettingUpdate(from, 'not_announcement')
            .then((res) => reply(singlemess.open_grub))
            .catch((err) => reply(jsonformat(err)));
    } 
    else if (args[1] && args[1].length === 5) {
    const waktu_action_gc = args[1];
    
    if (!cekFormatWaktu(waktu_action_gc)) {
        return reply(`_🚫 Masukkan Format Jam Yang Valid_\n
Contoh:  
_${prefix + command} close 11:00_
        `);
    }

    db_gcawait[from] = { waktu: waktu_action_gc, action: args[0] };
    fs.writeFileSync('./Storage/db/gcawait.json', JSON.stringify(db_gcawait));

    const dateNow = new Date();
    const [jam, menit] = waktu_action_gc.split(':').map(Number);
    const dateAction = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate(), jam, menit);
    const selisihMilidetik = dateAction - dateNow;

    if (Object.keys(db_gcawait).includes(from)) {
        delete db_gcawait[from];
        fs.writeFileSync('./Storage/db/gcawait.json', JSON.stringify(db_gcawait));
    }

    if (args[0] === 'close') {
    db_gcawait[m.chat] = { 
      waktu: args[1], 
      action: 'close'
    };
    fs.writeFileSync('./Storage/db/gcawait.json', JSON.stringify(db_gcawait));
    } else if (args[0] === 'open') {
    db_gcawait[m.chat] = { 
      waktu: args[1], 
      action: 'open'
    };
    fs.writeFileSync('./Storage/db/gcawait.json', JSON.stringify(db_gcawait));
    }

    return reply(`_Berhasil, Group Akan Di ${args[0]} Pada Jam : *${args[1]}*_`);
    } else {
        return reply(`_🚫 Masukkan Format Yang Valid_\n
_${prefix + command} open_
_*${prefix + command} close*_

_${prefix + command} close 12:00_
        `);
    }
}
break;
case 'afk': {
    let alasan_afk = `*Alasan* ${text}`;
    if (!text){
        alasan_afk = '*Tanpa Alasan*';
    }
    db_afk[sender] = { last_online: Date.now(), alasan: alasan_afk.trim() };
    fs.writeFileSync('./Storage/db/afk.json', JSON.stringify(db_afk, null, 2), 'utf8');
    return reply(`😓 Waduhh, Kak *${pushname}*... Telah Menghilang Dari Lane\n\n ❏  ${alasan_afk.trim()}`)
}
break
case 'promote': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botNotAdmin)
if (!isAdmins) return reply(mess.userNotAdmin)
if(!text){
    return reply('_Contoh Penggunaan:_ _.promote @tagorangnya_')
}
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Yudzxml.groupParticipantsUpdate(from, [users], 'promote')
reply(mess.success)
}
break
case 'demote': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botNotAdmin)
if (!isAdmins) return reply(mess.userNotAdmin)
if(!text){
    return reply('_Contoh Penggunaan:_ _.promote @tagorangnya_')
}
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Yudzxml.groupParticipantsUpdate(from, [users], 'demote')

reply(mess.success)
}
break
case 'h':
case 'hidetag': {
if (!isAdmins) return reply(mess.userNotAdmin);
if (!m.isGroup) return reply(mess.group)
const texthidetag_ = m.quoted ? m.quoted.text : text

// Hidetag with image
if (isImage) {
        try {
            const file_hidetag = await Yudzxml.downloadAndSaveMediaMessage(quoted);
        const response = await uploadFileToApi(file_hidetag, '1hour');
        const url_teleph_hd =response.fileUrl;

        await Yudzxml.sendMessage(from, { image: {url : url_teleph_hd}, caption: texthidetag_, mentions: participants.map(a => a.id) }, { quoted: m });
        } catch(error){
            return reply(mess.error)
        }
}else {
    Yudzxml.sendMessage(from, { text : texthidetag_ , mentions: participants.map(a => a.id)}, {quoted:m})
}
}
break
case 'kick': 
case 'kik':
case 'tendang': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botNotAdmin)
if (!isAdmins) return reply(mess.userNotAdmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (users == '@s.whatsapp.net')  return reply('Tag/Reply orangnya')
if (botNumber == users) return reply('Tidak Bisa Kick Diri Sendiri')
let bykick = await Yudzxml.groupParticipantsUpdate(from, [users], 'remove')
if (bykick) return reply(singlemess.kickmember)
}
break
case 'add': 
case 'tambahmem':
case 'addmem': {
    if (!m.isGroup) return reply(mess.group);
    if (!isBotAdmins) return reply(mess.botNotAdmin);
    if (!isAdmins) return reply(mess.userNotAdmin);
    if (!text) return reply(example('628xxx'))

    let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

    // Cek apakah pengguna sudah ada di grup
    const groupMembers = await Yudzxml.groupMetadata(from).then(metadata => metadata.participants);
    const isUserInGroup = groupMembers.some(member => member.id === users);

    if (isUserInGroup) {
        return reply('❌ Pengguna sudah ada di grup.');
    }

    await Yudzxml.groupParticipantsUpdate(from, [users], 'add')
        .then((res) => {
            reply(mess.success);
        })
        .catch((err) => {
            console.error(err);
            let errorMessage;
            if (err.response && err.response.status === 403) {
                errorMessage = '❌ Gagal menambahkan anggota. Mungkin nomor tersebut tidak valid atau sudah ada di grup.';
            } else if (err.response && err.response.status === 404) {
                errorMessage = '❌ Gagal menambahkan anggota. Grup tidak ditemukan.';
            } else {
                errorMessage = '❌ Gagal menambahkan anggota. Terjadi kesalahan yang tidak terduga.';
            }
            reply(errorMessage);
        });
}
break;
case 'resetlinkgc': {
    if (!m.isGroup) return reply(mess.group);
    if (!isBotAdmins) return reply(mess.botNotAdmin);
    if (!isAdmins) return reply(mess.userNotAdmin);

    Yudzxml.groupRevokeInvite(from)
        .then(() => {
            reply(`_✅ Link grup telah direset!_`);
        })
        .catch((err) => {
            console.error(err);
            reply(`_❌ Gagal mereset link grup. Terjadi kesalahan yang tidak terduga._`);
        });
}
break;
case 'infogrup': 
case 'infogroup': 
case 'infogc':
case 'idgc': {
if (!isAdmins) return reply(mess.userNotAdmin)
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.botNotAdmin)
let response = await Yudzxml.groupInviteCode(from)
let teks = `╔═══『 *${groupMetadata.subject}* 』
╠❥
╠❥ Anggota : ${groupMetadata.size}
╠❥ ID  : ${groupMetadata.id}
╠❥ Link : https://chat.whatsapp.com/${response}
╠❥
╚═══════════════════`
Yudzxml.sendText(from, teks, m, { detectLink: true })
}
break
case 'linkgrup': 
case 'linkgrub': 
case 'linkgroup':
case 'linkgc': {
if (!m.isGroup) return reply(mess.group)
if (!isBotAdmins) return reply('_Jadikan bot sebagai admin terlebih dahulu untuk menggunakan fitur ini_')
let response = await Yudzxml.groupInviteCode(from)
Yudzxml.sendText(from, `╔═══『 *${groupMetadata.subject}* 』
╠
╠❥ Total Member: ${groupMetadata.size}
╠❥ Link Group : https://chat.whatsapp.com/${response}
╠❥
╚═══════════════════`, m, { detectLink: true })
}
break
case 'del':
case 'delete':{
if (!isAdmins) return reply(mess.admin)
if (quoted) {
    Yudzxml.sendMessage(m.chat,{delete: {remoteJid: m.chat, id: m.quoted.id, participant: m.quoted.sender}})
}
}
break
case 'setwelcome':{
    if (!isAdmins) return reply(mess.admin)
    if (!text) return reply(`_Masukkan Teksnya_

@NAME untuk menyebut nama
@GROUP untuk menyebut nama grup
@DESC untuk menyebut deskripsi

Contoh : setwelcome Selamat datang @NAME di grup @GROUP`)
if (Array.isArray(db_welcome[from])) {
    db_welcome[from] = [{ text: text.trim(), status: 'on' }];
}else {
    db_welcome[from] = [{ text: text.trim(), status: 'on' }];
}
fs.writeFileSync('./Storage/db/welcome.json', JSON.stringify(db_welcome, null, 2), 'utf8');
return reply('Welcome Berhasil di Set')
}
break
case 'delwelcome':{
    if (!isAdmins) return reply(mess.admin)
if (Array.isArray(db_welcome[from])) {
    delete db_welcome[from];
    fs.writeFileSync('./Storage/db/welcome.json', JSON.stringify(db_welcome, null, 2), 'utf8');
    reply('Welcome Berhasil Di Hapus')

}else {
    reply('Welcome Sudah Di Hapus')
}
}
break
case 'setleft':{
    if (!isAdmins) return reply(mess.admin)
    let text_setleft;
    try {
        let cekm = m.quoted.sender
        text_setleft = quoted.text.trim()
    }catch{
        text_setleft = text.trim();
    }
    if (text_setleft.length < 1) {
return reply(`_Masukkan Teksnya atau balas pesan_

@NAME untuk menyebut nama
@GROUP untuk menyebut nama grub


Contoh : _setleft Selamat tinggal @NAME telah keluar dari @GROUP_`)

}
if (Array.isArray(db_left[from])) {
    db_left[from] = [{ text: text_setleft, status: 'on' }];
}else {
    db_left[from] = [{ text: text_setleft, status: 'on' }];
}
fs.writeFileSync('./Storage/db/left.json', JSON.stringify(db_left, null, 2), 'utf8');
return reply('_*Setleft* Berhasil di Set_')
}
break
case 'delleft':{
    if (!isAdmins) return reply(mess.admin)
if (Array.isArray(db_left[from])) {
    delete db_left[from];
    fs.writeFileSync('./Storage/db/left.json', JSON.stringify(db_left, null, 2), 'utf8');
    reply('Set Left Berhasil Di Hapus')

}else {
    reply('Set Left Sudah Di Hapus')
}
}
break
case 'on': {
        if (!m.isGroup) return reply(mess.group)
        if (!isAdmins) return reply(mess.admin)
        const commandList_on = [
            { name: 'welcome', description: 'aktifkan welcome' },
            { name: 'left', description: 'aktifkan left' },
            { name: 'antilink', description: 'aktifkan antilink' },
            { name: 'antiviewonce', description: 'aktifkan antiviewonce' },
            { name: 'antivirtex', description: 'aktifkan antivirtex' },
            { name: 'antilinkv2', description: 'aktifkan antilinkv2' },
            { name: 'antilinkv3', description: 'aktifkan antilinkv3' },
            { name: 'antilinkwa', description: 'aktifkan antilinkwa' },
            { name: 'antilinkwav2', description: 'aktifkan antilinkwav2' },
            { name: 'antibadword', description: 'aktifkan antibadword' },
            { name: 'antigame', description: 'aktifkan antigame' },
            { name: 'autosimi', description: 'aktifkan auto simi' },
            { name: 'autochatgpt', description: 'aktifkan auto chatgpt' },
            { name: 'antifoto', description: 'aktifkan antifoto' },
            { name: 'antivideo', description: 'aktifkan antivideo' },
            { name: 'antiaudio', description: 'aktifkan antiaudio' },
            { name: 'antidocument', description: 'aktifkan antidocument' },
            { name: 'antikontak', description: 'aktifkan antikontak' },
            { name: 'antisticker', description: 'aktifkan antisticker' },
            { name: 'antipolling', description: 'aktifkan antipolling' },
            { name: 'antispamchat', description: 'aktifkan antispamchat' },
            { name: 'onlyadmin', description: 'aktifkan onlyadmin' },
            { name: 'antibot', description: 'aktifkan antibot' },
            { name: 'autodownload', description: 'autodownload' },
        ];

        const foundCommand_on = commandList_on.find(commandItem => commandItem.name === q);
    if (foundCommand_on) {
        if (foundCommand_on.name == 'welcome') { // HIDUPKAN WELCOME
            if (Array.isArray(db_welcome[from])) {
                let existingIndex_on = db_welcome[from].findIndex(data => 'status' in data);
                if (existingIndex_on !== -1) {
                        db_welcome[from][existingIndex_on].status = 'on';
                        fs.writeFileSync('./Storage/db/welcome.json', JSON.stringify(db_welcome, null, 2), 'utf8');
                        return reply('_Berhasil Welcome Di Aktifkan_')
                }
            }else {
                return reply('_Anda Belum Membuat Pesan Welcome_ \n\n_Silakan ketik .setwelcome_')
            }

        }else if (foundCommand_on.name == 'left'){ // HIDUPKAN LEFT
            if (Array.isArray(db_left[from])) {
            let existingIndex_on = db_left[from].findIndex(data => 'status' in data);
            if (existingIndex_on !== -1) {
                    db_left[from][existingIndex_on].status = 'on';
                    fs.writeFileSync('./Storage/db/left.json', JSON.stringify(db_left, null, 2), 'utf8');
                    return reply('_Berhasil Left Di Aktifkan_')
            }
            }else {
                return reply('_Anda Belum Membuat Pesan Left_ \n\n_*Silakan ketik setleft*_')
            }
        



        }else if (foundCommand_on.name == 'antilink'){ // HIDUPKAN ANTILINK
            if (!isBotAdmins) return reply(mess.botNotAdmin)

                if (!global.db.data.chats[m.chat]) {
                    global.db.data.chats[m.chat] = {};
                }
                if (global.db.data.chats[m.chat].antilink) return reply(`Sudah Aktif Sebelumnya 🕊️`);
                global.db.data.chats[m.chat].antilink = true;
                fs.writeFileSync('./lib/database/database.json', JSON.stringify(global.db.data, null, 2), 'utf8');
                return reply(`_Antilink Sudah Aktif 🕊️_`)
            
        }else if (foundCommand_on.name == 'antivirtex'){ // HIDUPKAN antivirtex
            if (!isBotAdmins) return reply(mess.botNotAdmin)

                if (!global.db.data.chats[m.chat]) {
                    global.db.data.chats[m.chat] = {};
                }
                if (global.db.data.chats[m.chat].antivirtex) return reply(`Sudah Aktif Sebelumnya 🕊️`);
                global.db.data.chats[m.chat].antivirtex = true;
                fs.writeFileSync('./lib/database/database.json', JSON.stringify(global.db.data, null, 2), 'utf8');
                return reply(`_Antivirtex Sudah Aktif 🕊️_`)
            
        }else if (foundCommand_on.name == 'antiviewonce'){ // HIDUPKAN antiviewone
            if (!isBotAdmins) return reply(mess.botNotAdmin)

                if (!global.db.data.chats[m.chat]) {
                    global.db.data.chats[m.chat] = {};
                }
                if (global.db.data.chats[m.chat].antiviewone) return reply(`Sudah Aktif Sebelumnya 🕊️`);
                global.db.data.chats[m.chat].antiviewone = true;
                fs.writeFileSync('./lib/database/database.json', JSON.stringify(global.db.data, null, 2), 'utf8');
                return reply(`_Antiviewone (Gambar Sekali Lihat) Sudah Aktif 🕊️_`)
            
        }else if (foundCommand_on.name == 'antilinkv2'){ // HIDUPKAN ANTILINK2
            if (!isBotAdmins) return reply(mess.botNotAdmin)

                if (!global.db.data.chats[m.chat]) {
                    global.db.data.chats[m.chat] = {};
                }

                if (global.db.data.chats[m.chat].antilinkv2) return reply(`Sudah Aktif Sebelumnya 🕊️`)
                    global.db.data.chats[m.chat].antilinkv2 = true
                    fs.writeFileSync('./lib/database/database.json', JSON.stringify(global.db.data, null, 2), 'utf8');
                    return reply(`_Antilinkv2 Sudah Aktif 🕊️_`)
            
        }else if (foundCommand_on.name == 'antilinkv3'){ // HIDUPKAN ANTILINK3
            if (!isBotAdmins) return reply(mess.botNotAdmin)

                if (!global.db.data.chats[m.chat]) {
                    global.db.data.chats[m.chat] = {};
                }

                if (global.db.data.chats[m.chat].antilinkv3) return reply(`Sudah Aktif Sebelumnya 🕊️`)
                    global.db.data.chats[m.chat].antilinkv3 = true
                    fs.writeFileSync('./lib/database/database.json', JSON.stringify(global.db.data, null, 2), 'utf8');
                    return reply(`_Antilinkv3 Sudah Aktif 🕊️_`)
            
        }else if (foundCommand_on.name == 'antilinkwa'){ // HIDUPKAN ANTILINKWA
        
            if (!isBotAdmins) return reply(mess.botNotAdmin)

                if (!global.db.data.chats[m.chat]) {
                    global.db.data.chats[m.chat] = {};
                }

                if (global.db.data.chats[m.chat].antilinkwa) return reply(`Sudah Aktif Sebelumnya 🕊️`)
                    global.db.data.chats[m.chat].antilinkwa = true
                    fs.writeFileSync('./lib/database/database.json', JSON.stringify(global.db.data, null, 2), 'utf8');
                    return reply(`_Antilinkwa Sudah Aktif 🕊️_`)
            
        }else if (foundCommand_on.name == 'antilinkwav2'){ // HIDUPKAN ANTILINKWAv2
        
            if (!isBotAdmins) return reply(mess.botNotAdmin)

                if (!global.db.data.chats[m.chat]) {
                    global.db.data.chats[m.chat] = {};
                }
                if (global.db.data.chats[m.chat].antilinkwav2) return reply(`Sudah Aktif Sebelumnya 🕊️`)
                    global.db.data.chats[m.chat].antilinkwav2 = true
                    fs.writeFileSync('./lib/database/database.json', JSON.stringify(global.db.data, null, 2), 'utf8');
                    return reply(`_Antilinkwav2 Sudah Aktif 🕊️_`)
            
        }else if (foundCommand_on.name == 'antibadword'){ // HIDUPKAN BADWORD
            db_badword[from] = { status: 'on' };
            fs.writeFileSync('./Storage/db/badword.json', JSON.stringify(db_badword, null, 2), 'utf8');

            return reply('_Anti Badword Berhasil Di Aktifkan_')
            
        }else if (foundCommand_on.name == 'antigame'){ // HIDUPKAN GAME
            db_antigame.push(m.chat) // Use m.chat instead of from
            fs.writeFileSync('./Storage/db/antigame.json', JSON.stringify(db_antigame, null, 2), 'utf8');
            return reply('_Fitur Anti Game di aktifkan untuk grub ini_')

        }else if (foundCommand_on.name == 'autosimi'){ if (auto_chatgpt_status === 'ON') {
          return reply('NONAKTIFKAN FITUR AUTOCHATGPT UNTUK MENGAKTIFKAN FITUR AUTOSIMI')
          }
            db_simi.push(m.chat)
            fs.writeFileSync('./Storage/db/auto_simi.json', JSON.stringify(db_simi, null, 2), 'utf8');
            return reply("_Fitur Autosimi di aktifkan untuk grub ini_\n\nUntuk Cara Penggunaan Silakan Menyertakan kata 'simi' atau reply chat bot")
        
        } else if (foundCommand_on.name == 'autochatgpt'){
          if (auto_simi_status === 'ON') { 
             return reply('NONAKTIFKAN AUTOSIMI UNTUK MENGAKTIFKAN FITUR AUTOCHATGPT');
            }
            db_chatgpt.push(m.chat) // Use m.chat instead of from
            fs.writeFileSync('./Storage/db/auto_chatgpt.json', JSON.stringify(db_chatgpt, null, 2), 'utf8');
            return reply("_Fitur auto ai di aktifkan untuk grub ini_\n\nUntuk Cara Penggunaan Silakan Menyertakan kata 'ai' atau reply chat bot")
        }else if (foundCommand_on.name == 'antifoto'){ // HIDUPKAN antifoto
            db_antifoto.push(from) // Use m.chat instead of from
            fs.writeFileSync('./Storage/db/db_antifoto.json', JSON.stringify(db_antifoto, null, 2), 'utf8');
            return reply('_Fitur Anti Foto di aktifkan untuk grub ini_')
        

        }else if (foundCommand_on.name == 'antivideo'){ // HIDUPKAN antivideo
            db_antivideo.push(from) // Use m.chat instead of from
            fs.writeFileSync('./Storage/db/db_antivideo.json', JSON.stringify(db_antivideo, null, 2), 'utf8');
            return reply('_Fitur Anti Video di aktifkan untuk grub ini_')
        

        }else if (foundCommand_on.name == 'antiaudio'){ // HIDUPKAN antiaudio
            db_antiaudio.push(from) // Use m.chat instead of from
            fs.writeFileSync('./Storage/db/db_antiaudio.json', JSON.stringify(db_antiaudio, null, 2), 'utf8');
            return reply('_Fitur Anti Audio di aktifkan untuk grub ini_')
        

        }else if (foundCommand_on.name == 'antidocument'){ // HIDUPKAN antidocument
            db_antidocument.push(from) // Use m.chat instead of from
            fs.writeFileSync('./Storage/db/db_antidocument.json', JSON.stringify(db_antidocument, null, 2), 'utf8');
            return reply('_Fitur Anti Document di aktifkan untuk grub ini_')
        

        }else if (foundCommand_on.name == 'antikontak'){ // HIDUPKAN antikontak
            db_antikontak.push(from) // Use m.chat instead of from
            fs.writeFileSync('./Storage/db/db_antikontak.json', JSON.stringify(db_antikontak, null, 2), 'utf8');
            return reply('_Fitur Anti Kontak di aktifkan untuk grub ini_')
        

        }else if (foundCommand_on.name == 'antipolling'){ // HIDUPKAN anti polling
            db_antipolling.push(from) // Use m.chat instead of from
            fs.writeFileSync('./Storage/db/db_antipolling.json', JSON.stringify(db_antipolling, null, 2), 'utf8');
            return reply('_Fitur Anti polling di aktifkan untuk grub ini_')
        

        }else if (foundCommand_on.name == 'antisticker'){ // HIDUPKAN antisticker
            db_antisticker.push(from) // Use m.chat instead of from
            fs.writeFileSync('./Storage/db/db_antisticker.json', JSON.stringify(db_antisticker, null, 2), 'utf8');
            return reply('_Fitur Anti Sticker di aktifkan untuk grub ini_')


        }else if (foundCommand_on.name == 'antispamchat'){ // HIDUPKAN antispamchat
            db_antispamchat.push(from) // Use m.chat instead of from
            fs.writeFileSync('./Storage/db/db_antispamchat.json', JSON.stringify(db_antispamchat, null, 2), 'utf8');
            return reply('_Fitur Anti Spam Chat di aktifkan untuk grub ini_')


        }else if (foundCommand_on.name == 'onlyadmin'){ // HIDUPKAN onlyadmin
            db_onlyadmin.push(m.chat) // Use m.chat instead of from
            fs.writeFileSync('./Storage/db/db_onlyadmin.json', JSON.stringify(db_onlyadmin, null, 2), 'utf8');
            return reply('_Only Admin Di Aktifkan Untuk Grub Ini_')
        }else if (foundCommand_on.name == 'antibot'){ // HIDUPKAN ANTIBOT
            if (!isBotAdmins) return reply(mess.botNotAdmin)

                if (!global.db.data.chats[m.chat]) {
                    global.db.data.chats[m.chat] = {};
                }
                if (global.db.data.chats[m.chat].antibot) return reply(`Antibot Sudah Aktif Sebelumnya 🕊️`);
                global.db.data.chats[m.chat].antibot = true;
            fs.writeFileSync('./lib/database/database.json', JSON.stringify(global.db.data, null, 2), 'utf8');
            return reply('_Antibot Di Aktifkan Untuk Grup Ini_')
        
        }else if (foundCommand_on.name == 'autodownload'){ // HIDUPKAN AUTODOWNLOAD
            if (!isBotAdmins) return reply(mess.botNotAdmin)

                if (!global.db.data.chats[m.chat]) {
                    global.db.data.chats[m.chat] = {};
                }
                if (global.db.data.chats[m.chat].autodownload) return reply(`Autodownload Sudah Aktif Sebelumnya 🕊️`);
                global.db.data.chats[m.chat].autodownload = true;
            fs.writeFileSync('./lib/database/database.json', JSON.stringify(global.db.data, null, 2), 'utf8');
            return reply('_Autodownload Di Aktifkan Untuk Grup Ini_')
        
        }
        
        } else {

const template_onchat = `ɢᴜɴᴀᴋᴀɴ *.ᴏɴ ᴄᴏᴍᴍᴀɴᴅ*

[${antilinkStatus === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪʟɪɴᴋ       
[${antilinkv2Status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪʟɪɴᴋᴠ2     
[${antilinkv3Status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪʟɪɴᴋᴠ3     
[${antilinkwaStatus === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪʟɪɴᴋᴡᴀ     
[${antilinkwav2Status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪʟɪɴᴋᴡᴀᴠ2   
[${badword_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪʙᴀᴅᴡᴏʀᴅ
[${antigame_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪɢᴀᴍᴇ       
[${antifoto_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪꜰᴏᴛᴏ       
[${antivideo_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪᴠɪᴅᴇᴏ      
[${antiaudio_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪᴀᴜᴅɪᴏ      
[${antidocument_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪᴅᴏᴄᴜᴍᴇɴᴛ   
[${antikontak_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪᴋᴏɴᴛᴀᴋ     
[${antisticker_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪꜱᴛɪᴄᴋᴇʀ    
[${antipolling_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪᴘᴏʟʟɪɴɢ    
[${antispamchat_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪꜱᴘᴀᴍᴄʜᴀᴛ    
[${antivirtexStatus === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪᴠɪʀᴛᴇx    
[${antiviewoneStatus === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪᴠɪᴇᴡᴏɴᴄᴇ    
[${auto_simi_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀᴜᴛᴏꜱɪᴍɪ       
[${auto_chatgpt_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀᴜᴛᴏᴄʜᴀᴛɢᴘᴛ    
[${welcome_status === 'OFF' ? config.icon_off : config.icon_on}] ᴡᴇʟᴄᴏᴍᴇ        
[${left_status === 'OFF' ? config.icon_off : config.icon_on}] ʟᴇꜰᴛ           
[${onlyadmin_status === 'OFF' ? config.icon_off : config.icon_on}] ᴏɴʟʏᴀᴅᴍɪɴ 
[${antibotStatus === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪʙᴏᴛ   
[${autodownloadStatus === 'OFF' ? config.icon_off : config.icon_on}] ᴀᴜᴛᴏᴅᴏᴡɴʟᴏᴀᴅ

ᴄᴏɴᴛᴏʜ : *.ᴏɴ ᴡᴇʟᴄᴏᴍᴇ*

Kᴇᴛᴇʀᴀɴɢᴀɴ
${config.icon_on} = Fɪᴛᴜʀ ᴀᴋᴛɪꜰ
${config.icon_off} = Fɪᴛᴜʀ ᴛɪᴅᴀᴋ ᴀᴋᴛɪꜰ`

        return reply(template_onchat);
        }

}
break
case 'off': {
    
        if (!m.isGroup) return reply(mess.group)
        if (!isAdmins) return reply(mess.admin)


        const commandList_on = [
            { name: 'welcome', description: 'matikan welcome' },
            { name: 'left', description: 'matikan left' },
            { name: 'antilink', description: 'matikan antilink' },
            { name: 'antiviewonce', description: 'matikan antiviewonce' },
            { name: 'antivirtex', description: 'matikan antivirtex' },
            { name: 'antilinkv2', description: 'matikan antilinkv2' },
            { name: 'antilinkv3', description: 'matikan antilinkv3' },
            { name: 'antilinkwa', description: 'matikan antilinkwa' },
            { name: 'antilinkwav2', description: 'matikan antilinkwav2' },
            { name: 'antibadword', description: 'matikan antibadword' },
            { name: 'antigame', description: 'matikan antigame' },
            { name: 'autosimi', description: 'aktifkan auto simi' },
            { name: 'autochatgpt', description: 'aktifkan auto chatgpt' },
            { name: 'antifoto', description: 'aktifkan antifoto' },
            { name: 'antivideo', description: 'aktifkan antivideo' },
            { name: 'antiaudio', description: 'aktifkan antiaudio' },
            { name: 'antidocument', description: 'aktifkan antidocument' },
            { name: 'antikontak', description: 'aktifkan antikontak' },
            { name: 'antisticker', description: 'aktifkan antisticker' },
            { name: 'antipolling', description: 'aktifkan antipolling' },
            { name: 'antispamchat', description: 'aktifkan antispamchat' },
            { name: 'onlyadmin', description: 'aktifkan onlyadmin' },            
            { name: 'antibot', description: 'aktifkan antibot' },
            { name: 'autodownload', description: 'aktifkan autodownload' },
        ];

        const foundCommand_on = commandList_on.find(commandItem => commandItem.name === q);


    if (foundCommand_on) {

if (foundCommand_on.name == 'welcome') { // MATIKAN WELCOME
if (Array.isArray(db_welcome[from])) {
let existingIndex_on = db_welcome[from].findIndex(data => 'status' in data);
if (existingIndex_on !== -1) {
db_welcome[from][existingIndex_on].status = 'off';
fs.writeFileSync('./Storage/db/welcome.json', JSON.stringify(db_welcome, null, 2), 'utf8');
return reply('_Welcome Telah Dinonaktifkan_')
                }
}else {
                return reply('_Anda Belum Membuat Pesan Welcome_ \n\n_Silakan ketik .setwelcome_')
            }

        }else if (foundCommand_on.name == 'left'){ // MATIKAN LEFT
            if (Array.isArray(db_left[from])) {
            let existingIndex_on = db_left[from].findIndex(data => 'status' in data);
            if (existingIndex_on !== -1) {
                    db_left[from][existingIndex_on].status = 'off';
                    fs.writeFileSync('./Storage/db/left.json', JSON.stringify(db_left, null, 2), 'utf8');
                    return reply('_Berhasil Left Di Aktifkan_')
            }
            }else {
                return reply('_Anda Belum Membuat Pesan Left_ \n\n_*Silakan ketik setleft*_')
            }
        



        }else if (foundCommand_on.name == 'antilink'){ // MATIKAN ANTILINK
        
            if (!isBotAdmins) return reply(mess.botNotAdmin)

                if (!global.db.data.chats[m.chat].antilink) return reply(`Sudah Nonaktif Sebelumnya 🕊`)
                    global.db.data.chats[m.chat].antilink = false
                    fs.writeFileSync('./lib/database/database.json', JSON.stringify(global.db.data, null, 2), 'utf8');
                    return reply(`Antilink Sudah Nonaktif 🕊️`)
            
        }else if (foundCommand_on.name == 'antivirtex'){ // MATIKAN antivirtex
        
            if (!isBotAdmins) return reply(mess.botNotAdmin)

                if (!global.db.data.chats[m.chat].antivirtex) return reply(`Sudah Nonaktif Sebelumnya 🕊`)
                    global.db.data.chats[m.chat].antivirtex = false
                    fs.writeFileSync('./lib/database/database.json', JSON.stringify(global.db.data, null, 2), 'utf8');
                    return reply(`_Antivirtex Sudah Nonaktif 🕊️_`)
            
        }else if (foundCommand_on.name == 'antiviewonce'){ // MATIKAN antiviewone
        
            if (!isBotAdmins) return reply(mess.botNotAdmin)

                if (!global.db.data.chats[m.chat].antiviewone) return reply(`Sudah Nonaktif Sebelumnya 🕊`)
                    global.db.data.chats[m.chat].antiviewone = false
                    fs.writeFileSync('./lib/database/database.json', JSON.stringify(global.db.data, null, 2), 'utf8');
                    return reply(`_Antiviewone Sudah Nonaktif 🕊️_`)
            
        }else if (foundCommand_on.name == 'antilinkv2'){ // MATIKAN ANTILINK2
        
            if (!isBotAdmins) return reply(mess.botNotAdmin)

                if (!global.db.data.chats[m.chat].antilinkv2) return reply(`Sudah Nonaktif Sebelumnya 🕊`)
                    global.db.data.chats[m.chat].antilinkv2 = false
                    fs.writeFileSync('./lib/database/database.json', JSON.stringify(global.db.data, null, 2), 'utf8');
                    return reply(`Antilink Sudah Nonaktif 🕊️`)
            
        }else if (foundCommand_on.name == 'antilinkv3'){ // MATIKAN ANTILINK3
        
            if (!isBotAdmins) return reply(mess.botNotAdmin)

            if (!global.db.data.chats[m.chat].antilinkv3) return reply(`Sudah Nonaktif Sebelumnya 🕊`)
                    global.db.data.chats[m.chat].antilinkv3 = false
                    fs.writeFileSync('./lib/database/database.json', JSON.stringify(global.db.data, null, 2), 'utf8');
                    return reply(`Antilink Sudah Nonaktif 🕊️`)
            
        }else if (foundCommand_on.name == 'antilinkwa'){ // MATIKAN ANTILINWA
        
            if (!isBotAdmins) return reply(mess.botNotAdmin)

            if (!global.db.data.chats[m.chat].antilinkwa) return reply(`Sudah Nonaktif Sebelumnya 🕊`)
                    global.db.data.chats[m.chat].antilinkwa = false
                    fs.writeFileSync('./lib/database/database.json', JSON.stringify(global.db.data, null, 2), 'utf8');
                    return reply(`Antilinkwa Sudah Nonaktif 🕊️`)
            
        }else if (foundCommand_on.name == 'antilinkwav2'){ // MATIKAN ANTILINWA
        
            if (!isBotAdmins) return reply(mess.botNotAdmin)

            if (!global.db.data.chats[m.chat].antilinkwav2) return reply(`Sudah Nonaktif Sebelumnya 🕊`)
                    global.db.data.chats[m.chat].antilinkwav2 = false
                    fs.writeFileSync('./lib/database/database.json', JSON.stringify(global.db.data, null, 2), 'utf8');
                    return reply(`Antilinkwav2 Sudah Nonaktif 🕊️`)
            
        }else if (foundCommand_on.name == 'antibadword'){ // MATIKAN BADWORD
        
            db_badword[from] = { status: 'off' };
            fs.writeFileSync('./Storage/db/badword.json', JSON.stringify(db_badword, null, 2), 'utf8');
            return reply('_Anti Badword Berhasil Di Matikan_')
            
        }else if (foundCommand_on.name == 'antigame'){ // MATIKAN ANTI EDIT
            
        let index = db_antigame.indexOf(m.chat);
                if (index !== -1) {
                    let filteredArray_offantigame = db_antigame.filter(item => item !== m.chat);
                    fs.writeFileSync('./Storage/db/antigame.json', JSON.stringify(filteredArray_offantigame, null, 2), 'utf8');
                    return reply('_Fitur Game di matikan untuk grub ini_');
                } else {
                    return reply('_Fitur Game Sudah Nonaktif Sebelumnya_');
                }
        





        }else if (foundCommand_on.name == 'autosimi'){ // MATIKAN AUTOSIMI
            
        let index = db_simi.indexOf(m.chat);
                if (index !== -1) {
                    let filteredArray_offsimi = db_simi.filter(item => item !== m.chat);
                fs.writeFileSync('./Storage/db/auto_simi.json', JSON.stringify(filteredArray_offsimi, null, 2), 'utf8');
                    return reply('_Fitur Autosimi di matikan untuk grub ini_');
                } else {
                    return reply('_Fitur Autosimi Sudah Nonaktif Sebelumnya_');
                }
        

        }else if (foundCommand_on.name == 'autochatgpt'){ // MATIKAN AI
            
        let index = db_chatgpt.indexOf(m.chat);
                if (index !== -1) {
                    let filteredArray_offchatgpt = db_chatgpt.filter(item => item !== m.chat);
                    fs.writeFileSync('./Storage/db/auto_chatgpt.json', JSON.stringify(filteredArray_offchatgpt, null, 2), 'utf8');
                    return reply('_Fitur Auto Chatgpt di matikan untuk grub ini_');
                } else {
                    return reply('_Fitur Auto Chatgpt Sudah Nonaktif Sebelumnya_');
                }
        }else if (foundCommand_on.name == 'antifoto'){ // MATIKAN ANTI FOTO
            
        let index = db_antifoto.indexOf(m.chat);
                if (index !== -1) {
                    let filteredArray_offantifoto = db_antifoto.filter(item => item !== m.chat);
                    fs.writeFileSync('./Storage/db/db_antifoto.json', JSON.stringify(filteredArray_offantifoto, null, 2), 'utf8');
                    return reply('_Fitur Anti Foto di matikan untuk grub ini_');
                } else {
                    return reply('_Fitur Anti Foto Sudah Nonaktif Sebelumnya_');
                }
        



        }else if (foundCommand_on.name == 'antivideo'){ // MATIKAN ANTI VIDEO
            
        let index = db_antivideo.indexOf(m.chat);
                if (index !== -1) {
                    let filteredArray_offantivideo = db_antivideo.filter(item => item !== m.chat);
                    fs.writeFileSync('./Storage/db/db_antivideo.json', JSON.stringify(filteredArray_offantivideo, null, 2), 'utf8');
                    return reply('_Fitur Anti Video di matikan untuk grub ini_');
                } else {
                    return reply('_Fitur Anti Video Sudah Nonaktif Sebelumnya_');
                }
        


        }else if (foundCommand_on.name == 'antiaudio'){ // MATIKAN ANTI AUDIO
            
        let index = db_antiaudio.indexOf(m.chat);
                if (index !== -1) {
                    let filteredArray_offantiaudio = db_antiaudio.filter(item => item !== m.chat);
                    fs.writeFileSync('./Storage/db/db_antiaudio.json', JSON.stringify(filteredArray_offantiaudio, null, 2), 'utf8');
                    return reply('_Fitur Anti Audio di matikan untuk grub ini_');
                } else {
                    return reply('_Fitur Anti Audio Sudah Nonaktif Sebelumnya_');
                }
        

        }else if (foundCommand_on.name == 'antidocument'){ // MATIKAN ANTI DOCUMENT
            
        let index = db_antidocument.indexOf(m.chat);
                if (index !== -1) {
                    let filteredArray_offantidocument = db_antidocument.filter(item => item !== m.chat);
                    fs.writeFileSync('./Storage/db/db_antidocument.json', JSON.stringify(filteredArray_offantidocument, null, 2), 'utf8');
                    return reply('_Fitur Anti Document di matikan untuk grub ini_');
                } else {
                    return reply('_Fitur Anti Document Sudah Nonaktif Sebelumnya_');
                }
        


        }else if (foundCommand_on.name == 'antikontak'){ // MATIKAN ANTI Kontak
            
        let index = db_antikontak.indexOf(m.chat);
                if (index !== -1) {
                    let filteredArray_offantikontak = db_antikontak.filter(item => item !== m.chat);
                    fs.writeFileSync('./Storage/db/db_antikontak.json', JSON.stringify(filteredArray_offantikontak, null, 2), 'utf8');
                    return reply('_Fitur Anti Kontak di matikan untuk grub ini_');
                } else {
                    return reply('_Fitur Anti Kontak Sudah Nonaktif Sebelumnya_');
                }
        

        } else if (foundCommand_on.name == 'antipolling'){ // MATIKAN ANTI polling
            
            let index = db_antipolling.indexOf(m.chat);
                    if (index !== -1) {
                        let filteredArray_offantipolling = db_antipolling.filter(item => item !== m.chat);
                        fs.writeFileSync('./Storage/db/db_antipolling.json', JSON.stringify(filteredArray_offantipolling, null, 2), 'utf8');
                        return reply('_Fitur Anti polling di matikan untuk grub ini_');
                    } else {
                        return reply('_Fitur Anti polling Sudah Nonaktif Sebelumnya_');
                    }
            

        }else if (foundCommand_on.name == 'antisticker'){ // MATIKAN ANTI Sticker
    
            let index = db_antisticker.indexOf(m.chat);
            if (index !== -1) {
                let filteredArray_offantisticker = db_antisticker.filter(item => item !== m.chat);
                fs.writeFileSync('./Storage/db/db_antisticker.json', JSON.stringify(filteredArray_offantisticker, null, 2), 'utf8');
                return reply('_Fitur Anti Sticker di matikan untuk grup ini_');
            } else {
                return reply('_Fitur Anti Sticker Sudah Nonaktif Sebelumnya_');
            }
        
        
        }else if (foundCommand_on.name == 'antispamchat'){ // MATIKAN ANTI Sticker
    
            let index = db_antispamchat.indexOf(m.chat);
            if (index !== -1) {
                let filteredArray_offantispamchat = db_antispamchat.filter(item => item !== m.chat);
                fs.writeFileSync('./Storage/db/db_antispamchat.json', JSON.stringify(filteredArray_offantispamchat, null, 2), 'utf8');
                return reply('_Fitur Anti SpamChat di matikan untuk grup ini_');
            } else {
                return reply('_Fitur Anti SpamChat Sudah Nonaktif Sebelumnya_');
            }
        

        }else if (foundCommand_on.name == 'onlyadmin'){ // MATIKAN ANTI onlyadmin
    
            let index = db_onlyadmin.indexOf(m.chat);
            if (index !== -1) {
                let filteredArray_offonlyadmin = db_onlyadmin.filter(item => item !== m.chat);
                fs.writeFileSync('./Storage/db/db_onlyadmin.json', JSON.stringify(filteredArray_offonlyadmin, null, 2), 'utf8');
                return reply('_Only Admin dimatikan untuk grub ini_');
            } else {
                return reply('_Only Admin sudah Nonaktif Sebelumnya_');
            }
        }else if (foundCommand_on.name == 'antibot'){ // MATIKAN ANTIBOT
            if (!isBotAdmins) return reply(mess.botNotAdmin)

                if (!global.db.data.chats[m.chat].antibot) return reply(`Antibot Sudah Nonaktif Sebelumnya 🕊`)
                    global.db.data.chats[m.chat].antibot = false
                    fs.writeFileSync('./lib/database/database.json', JSON.stringify(global.db.data, null, 2), 'utf8');
                    return reply(`_Antibot Sudah Nonaktif 🕊️_`)
            
        }else if (foundCommand_on.name == 'autodownload'){ // MATIKAN ANTIBOT
            if (!isBotAdmins) return reply(mess.botNotAdmin)

                if (!global.db.data.chats[m.chat].autodownload) return reply(`Autodownload Sudah Nonaktif Sebelumnya 🕊`)
                    global.db.data.chats[m.chat].autodownload = false
                    fs.writeFileSync('./lib/database/database.json', JSON.stringify(global.db.data, null, 2), 'utf8');
                    return reply(`_Autodownload Sudah Nonaktif 🕊️_`)
            }
        } else {
const template_offchat = `ɢᴜɴᴀᴋᴀɴ *.ᴏꜰꜰ ᴄᴏᴍᴍᴀɴᴅ*

[${antilinkStatus === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪʟɪɴᴋ       
[${antilinkv2Status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪʟɪɴᴋᴠ2     
[${antilinkv3Status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪʟɪɴᴋᴠ3     
[${antilinkwaStatus === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪʟɪɴᴋᴡᴀ     
[${antilinkwav2Status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪʟɪɴᴋᴡᴀᴠ2   
[${badword_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪʙᴀᴅᴡᴏʀᴅ
[${antigame_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪɢᴀᴍᴇ       
[${antifoto_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪꜰᴏᴛᴏ       
[${antivideo_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪᴠɪᴅᴇᴏ      
[${antiaudio_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪᴀᴜᴅɪᴏ      
[${antidocument_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪᴅᴏᴄᴜᴍᴇɴᴛ   
[${antikontak_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪᴋᴏɴᴛᴀᴋ     
[${antisticker_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪꜱᴛɪᴄᴋᴇʀ    
[${antipolling_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪᴘᴏʟʟɪɴɢ    
[${antispamchat_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪꜱᴘᴀᴍᴄʜᴀᴛ
[${antivirtexStatus === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪᴠɪʀᴛᴇx    
[${antiviewoneStatus === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪᴠɪᴇᴡᴏɴᴄᴇ     
[${auto_simi_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀᴜᴛᴏꜱɪᴍɪ       
[${auto_chatgpt_status === 'OFF' ? config.icon_off : config.icon_on}] ᴀᴜᴛᴏᴄʜᴀᴛɢᴘᴛ    
[${welcome_status === 'OFF' ? config.icon_off : config.icon_on}] ᴡᴇʟᴄᴏᴍᴇ        
[${left_status === 'OFF' ? config.icon_off : config.icon_on}] ʟᴇꜰᴛ           
[${onlyadmin_status === 'OFF' ? config.icon_off : config.icon_on}] ᴏɴʟʏᴀᴅᴍɪɴ 
[${antibotStatus === 'OFF' ? config.icon_off : config.icon_on}] ᴀɴᴛɪʙᴏᴛ   
[${autodownloadStatus === 'OFF' ? config.icon_off : config.icon_on}] ᴀᴜᴛᴏᴅᴏᴡɴʟᴏᴀᴅ

ᴄᴏɴᴛᴏʜ : *.ᴏꜰꜰ ᴡᴇʟᴄᴏᴍᴇ*

Kᴇᴛᴇʀᴀɴɢᴀɴ
${config.icon_on} = Fɪᴛᴜʀ ᴀᴋᴛɪꜰ
${config.icon_off} = Fɪᴛᴜʀ ᴛɪᴅᴀᴋ ᴀᴋᴛɪꜰ`
return reply(template_offchat);
}
}
break
case 'buyprem':
case 'belipremium': {
await reply(fs.readFileSync('./Storage/Templates/buyprem.js').toString())
}
break
case 'buylimit':
case 'belilimit': {
if (!isRegistered) return reply(mess.register)
    if (!text) return reply(example('1000'))

    const extractedNumber = ambilAngka(text.toLowerCase().trim());
    let buylimit_number;

    if (!isNaN(extractedNumber)) {
        buylimit_number = extractedNumber.toString().replace(/^0+/, '');
    } else {
        return reply('Contoh: *.buylimit 50*');
    }

    if (buylimit_number < 1) {
        return reply('_Masukkan Format Yang Valid_ \n\n_Contoh: *buylimit 1000*_');
    }

    const uang_required = parseInt(buylimit_number) * 20;

    if (isNaN(buylimit_number) || buylimit_number <= 0) {
        return reply('Input harus berupa angka');
    }

    if (parseInt(db_usermoney[sender].money) < uang_required) {
        return reply('Money Anda Tidak Cukup Untuk Membeli Limit 1 limit = 20 money !!');
    }

    const limitadd = parseInt(buylimit_number);
    db_usermoney[sender].limit = parseInt(db_usermoney[sender].limit) + limitadd;
    db_usermoney[sender].money -= uang_required;

    fs.writeFileSync('./Storage/db/usermoney.json', JSON.stringify(db_usermoney, null, 2), 'utf8');
    reply(`_Pembelian Limit Berhasil \n\nLimit Anda Bertambah : *${limitadd}* Wkwk_`);
}
break;
case 'mute': {
        if (!isAdmins && !isOwner) return reply(mess.admin);
        if (!m.isGroup) return reply(mess.group)
        if (isMuted) return reply(`udah mute`)
        db_mute.push(from)
        fs.writeFileSync('./Storage/db/mute.json', JSON.stringify(db_mute, null, 2), 'utf8');
        reply(singlemess.mute)
}
break
case 'delbadword': 
case 'delbadwords':{
    if (!isAdmins) return reply(mess.admin)
    if (!text) return reply(example('Kon***'))
    const delbadword_list = db_antitoxic.indexOf(text.toLowerCase().trim())
    db_antitoxic.splice(delbadword_list, 1)
    fs.writeFileSync('./Storage/db/antitoxic.json', JSON.stringify(db_antitoxic, null, 2), 'utf8');
    reply(`_Kata Telah Dihapus Dari List *Badwords*_`)
}
break
case 'addbadword':
case 'addbadwords':{
    if (!isAdmins) return reply(mess.admin)
    if (!text) return reply(example('kon***'))

     if (db_antitoxic.includes(text.toLowerCase().trim())) {
        return reply('_Kata sudah ada dalam daftar *Badwords*_');
    }

    if (text.toLowerCase().trim().length < 2) return reply('Minimal 2 Huruf')
    db_antitoxic.push(text.toLowerCase().trim())
    fs.writeFileSync('./Storage/db/antitoxic.json', JSON.stringify(db_antitoxic, null, 2), 'utf8');
    reply(`_Kata Telah Ditambahkan Ke List *Badwords*_`)
}
break
case 'badword':
case 'listbadword':
case 'badwords':{
    try {
        let teksooo = '*▧ 「 LIST BADWORDS* 」\n\n';
        for (let i of db_antitoxic) {
            teksooo += `✦ ${i}\n`;
        }
        teksooo += `\n*Total : ${db_antitoxic.length}*`;

        await reply(teksooo.trim())
    } catch (error) {
        console.error('Error handling badword command:', error);
        reply('Terjadi kesalahan saat memproses perintah badword.');
    }
}
break
case 'resetsider': {
    if (db_sider && db_sider[from]) {
      delete db_sider[from];
      fs.writeFileSync('./Storage/db/sider.json', JSON.stringify(db_sider, null, 2), 'utf8');
      reply('_Sider Berhasil Direset Pada Grub ini_')
    } else {
      reply('_Sider Sudah Direset Pada Grub ini_')
    }
}
break
case 'gcsider':
case 'grupsider': {
if (!isAdmins) return reply(mess.admin)
if (m.isGroup) { GcSiderUpdate(m.sender,from) }
const sevenDaysAgo = timestamp - (7 * 24 * 60 * 60 * 1000);
const filteredData = db_sider[from].filter(item => item.timestamp >= sevenDaysAgo);
const newDataSider = groupMetadata.participants.filter(item2 => !filteredData.some(item1 => item1.user_id === item2.id));

let arr_membersider = ''
for (let mem of newDataSider) {
arr_membersider += `⭔ @${mem.id.split('@')[0]} _Sider_\n`
}

let mem_sider       = newDataSider.length
let total_memgc     = groupMetadata.size
let teks_gcsider    = `_*${mem_sider} Dari ${total_memgc}* Anggota Grup ${groupMetadata.subject} Adalah Sider_

_*Dengan Alasan :*_
➊ _Tidak Aktif Selama lebih 7 hari_
➋ _Join Tapi Tidak Pernah Nimbrung_

_Harap Aktif Di Grup Karena Akan Ada Pembersihan Member Setiap Saat_


_*List Member Sider*_
${arr_membersider}
`

Yudzxml.sendMessage(m.chat, { text: teks_gcsider, mentions: newDataSider.map(a => a.id) }, { quoted:m })

}
break
case 'listabsen': {
    if (!isAdmins) return reply(mess.admin)
    if (!m.isGroup) return reply(mess.group)
    if (db_absen[from+tgl_hariini]) {
    let stringAbsen = `*LIST ABSEN [ ${tgl_hariini} ]*\n\n`
    stringAbsen += db_absen[from+tgl_hariini].map(absen => `⭔ @${absen.user_id.split('@')[0]} \n`).join('');    

    let arr_listabsen   = db_absen[from+tgl_hariini].map(absen => ({ id: absen.user_id }));
    let jumlahOrangAbsen= arr_listabsen.length;
    let total_orgdgrub  = participants.length;

    let lomAbsen        = total_orgdgrub - jumlahOrangAbsen

    if (lomAbsen == 0) {
         stringAbsen += `\n*${jumlahOrangAbsen}* Orang Telah Absen Semua`
    }else{
         stringAbsen += `\n*${jumlahOrangAbsen}* Orang Telah Absen, Tersisa ${lomAbsen} Orang`
    }

    Yudzxml.sendMessage(m.chat, { text: stringAbsen, mentions: arr_listabsen.map(a => a.id) }, { quoted:m })

    } else{
        return reply('Belum ada absen hari ini')
    }
}
break
case 'absen': {
    if (!m.isGroup) return reply(mess.group)
    if (!db_absen[from+tgl_hariini]) {

        // pertama absen
        db_absen[from+tgl_hariini] = [{ user_id: sender, tanggal: tgl_hariini }];
        reply('Absen Berhasil')
    }else {

        // absen kedua
      const sudah_absen = db_absen[from+tgl_hariini].findIndex(item => item.user_id === sender);

      if (sudah_absen !== -1) {
            reply('Kamu sudah absen hari ini')
        }else {
            reply('Absen Berhasil')
            db_absen[from+tgl_hariini].push({ user_id: sender, tanggal: tgl_hariini });
        }
          
    }

 fs.writeFileSync('./Storage/db/absen.json', JSON.stringify(db_absen, null, 2), 'utf8');

}
break
case 'me':
case 'my':
case 'myprofil':
case 'profil':
case 'limit':
case 'money': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
    if (!db_usermoney[sender]) {
     db_usermoney[sender] = { limit: 30, money: '0',level_user: 1,level_cache:0 };
     fs.writeFileSync('./Storage/db/usermoney.json', JSON.stringify(db_usermoney, null, 2), 'utf8');
}
let limit_meadd = '';
if (isOwner || isOwner || isPremium) {
    limit_meadd = 'Infinity (' + (db_usermoney[sender]?.limit ?? '0') + ')';
} else {
    limit_meadd = db_usermoney[sender]?.limit ?? 0;
}

let me_money = `
╔═══『 *MY PROFIL* 』
╠
╠❥ ɴᴀᴍᴇ : *${pushname}*
╠❥ ʀᴏʟᴇ : *${db_usermoney[sender] ? db_usermoney[sender].role || 'No Role' : 'Pengguna Tidak Terdaftar'}*
╠❥ ꜱᴛᴀᴛᴜꜱ : ${isOwner ? '*Owner*' : isPremium ? '*Premium*' : '*User*'}
╠❥ ʟɪᴍɪᴛ : *${limit_meadd}*
╠❥ ᴍᴏɴᴇʏ : *${db_usermoney[sender]?.money ?? 0}* 
╠❥ ʟᴇᴠᴇʟ : *${db_usermoney[sender]?.level_user ?? 'N/A'}*
╠❥ ᴘʀᴏɢʀᴇꜱꜱ : *${db_usermoney[sender]?.level_cache ?? 0}* / 100
╠
╚═══════════════════`;
reply(me_money)
}
break
case 'claim': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);  
if (m.sender in db_claimlimit) {
        let wspam_fil = (timestamp - db_claimlimit[m.sender].last_time);
        let timespam_spam = Math.ceil(wspam_fil / 1000);
        let waktu_tunggu = config.resetlimit * 60; 
        let waktu_lastclaim = wspam_fil / 1000;
        let detikLagi = Math.floor(waktu_tunggu - waktu_lastclaim);
        
        if (detikLagi > 0) {
            let claim_hari = Math.floor(detikLagi / (3600 * 24));
            let claim_sisaDetik1 = detikLagi % (3600 * 24);
            let claim_jam = Math.floor(claim_sisaDetik1 / 3600);
            let claim_sisaDetik2 = claim_sisaDetik1 % 3600;
            let claim_menit = Math.floor(claim_sisaDetik2 / 60);
            let claim_sisaDetik3 = claim_sisaDetik2 % 60;

            let hasilFormat = '';
            if (claim_hari > 0) hasilFormat += `${claim_hari} hari, `;
            if (claim_jam > 0) hasilFormat += `${claim_jam} jam, `;
            if (claim_menit > 0) hasilFormat += `${claim_menit} menit, `;
            hasilFormat += `${claim_sisaDetik3} detik`;

            let pesanBalasan = `_Reset Claim Limit Akan Tiba Dalam *${hasilFormat}* lagi_`;
            return reply(pesanBalasan);
        }
    }

    let claimlimit_Person = {
        'sender': m.sender,
        'last_time': timestamp
    };
    db_claimlimit[m.sender] = claimlimit_Person;
    fs.writeFileSync('./Storage/db/claimlimit.json', JSON.stringify(db_claimlimit, null, 2), 'utf8');

    let claimLimit;
    if (!db_usermoney[m.sender]) {
        db_usermoney[m.sender] = {
            limit: 30,
            money: 0,
            level_user: 1,
            level_cache: 0
        };
        claimLimit = 30; 
    } else {
        let currentLimit = db_usermoney[m.sender].limit;
        
        // Check if the current limit is -1
        if (currentLimit === -1) {
            db_usermoney[m.sender].limit = 0; // Remove the limit or set it to 0
            claimLimit = 0; 
        } else if (currentLimit > 0) { 
            let randomAddition = Math.floor(Math.random() * 10) + 1; 
            db_usermoney[m.sender].limit += randomAddition;
            claimLimit = randomAddition; 
        } else {
            // If currentLimit is 0, set limit to 30
            db_usermoney[m.sender].limit = 30; 
            claimLimit = 30; 
        }
    }

    fs.writeFileSync('./Storage/db/usermoney.json', JSON.stringify(db_usermoney, null, 2), 'utf8');
    return reply(`Anda Dapat *${claimLimit}* Limit, Total Limit Anda Sekarang: *${db_usermoney[m.sender].limit}*`);
}
break;
case 'sendmoney': {
    if (!text) return reply(`*Contoh Penggunaan:*\n ${prefix + command} 6283872031397 10`)

    if (!db_usermoney[sender]) return reply('Anda Tidak Punya Money');
   users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
    if (users == '@s.whatsapp.net')  {
        users = args[0] + users
    }
     let tosendmoney = parseInt(args[1])
    if (!isNaN(tosendmoney)) {
        tosendmoney = tosendmoney.toString().replace(/^0+/, '');
    } else {
        return reply(`*Contoh Penggunaan:*\n ${prefix + command} 6283872031397 10`)
    }

    if (!args[1]) return reply(`*Contoh Penggunaan:*\n ${prefix + command} 6283872031397 10`)
    if (tosendmoney >= 1000000) return reply('_sendmoney tidak boleh lebih 1 Juta_')
    if (tosendmoney < 1) return reply(`Minimal Mengirim 1 Money`)


    // khusus yang di beri
    if (!db_usermoney[users]) {
         db_usermoney[users] = { limit: tosendmoney, limit: 0,level_user: 1,level_cache:0 };

    }else{
         db_usermoney[users].money = parseInt(db_usermoney[users].money) + parseInt(tosendmoney)
    }
    if (tosendmoney > parseInt(db_usermoney[sender].money)) {
        return reply('Money anda tidak cukup')
    }
    // khusus yang memberi
    db_usermoney[sender].money = parseInt(db_usermoney[sender].money) - parseInt(tosendmoney)
    fs.writeFileSync('./Storage/db/usermoney.json', JSON.stringify(db_usermoney, null, 2), 'utf8');
    const UserTagsendmoney = groupMetadata.participants.filter(item2 => users === item2.id);
    Yudzxml.sendMessage(from, { text : `_Money *${tosendmoney}* Telah Di Kirimkan Ke ${users.split('@')[0]}_`, mentions: UserTagsendmoney.map(a => a.id) }, {quoted:m})
}
break
case 'setrole': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
const roleERR = `
ᴘɪʟɪʜ ʀᴏʟᴇ ʏᴀɴɢ ᴛᴇʀꜱᴇᴅɪᴀ ᴅɪ ʙᴀᴡᴀʜ ɪɴɪ:

- ᴊᴜɴɢʟᴇʀ
- ᴇxᴘ
- ɢᴏʟᴅ
- ᴍɪᴅ
- ꜱᴜᴘᴘᴏʀᴛ 
- ꜱɴɪᴘᴇʀ
- ʀᴜꜱʜᴇʀ
- ɴɢᴇɴᴅᴏᴋ
- ᴘʀᴏɢʀᴀᴍᴇʀ 
- ɴɪɴᴊᴀ
- ᴜʟᴛʀᴀᴍᴀɴ 
- ᴄᴏᴅɪɴɢ
- ɢɪᴛᴀʀɪꜱ
- ᴄᴏꜱᴘʟᴀʏᴇʀ
- ᴅᴜᴋᴜɴ
- ᴋɪɴɢ

_ᴄᴏɴᴛᴏʜ : .ꜱᴇᴛʀᴏʟᴇ *ᴊᴜɴɢʟᴇʀ*_`;


    if (!text) return reply(roleERR)
    const roleArr = ['Jungler', 'Exp', 'Gold', 'Mid', 'Support', 'Sniper', 'Rusher', 'Ngendok', 'Programer', 'Ninja','Ultraman','Coding','','Gitaris','Cosplayer','Dukun','King'];

    if (roleArr.includes(text)) {


    if (!db_usermoney[m.sender]) {
         db_usermoney[m.sender] = { limit: tolimit, money: 0,level_user: 1,level_cache:0 };
    }else{


        if (db_usermoney[sender].level_user < 10) {
             return reply(`_Minimal *level 10* Untuk Menggunakan Role Ini_`)
        }
         db_usermoney[m.sender].role = text.trim().toLowerCase();
    }
   
    fs.writeFileSync('./Storage/db/usermoney.json', JSON.stringify(db_usermoney, null, 2), 'utf8');
       
    return reply(`_Success Menggati Role Ke *${text}*_`)



    } else {
        return reply(roleERR)
    }
}
break
case 'sendlimit': {
    if (!text) return reply(`*Contoh Penggunaan:*\n ${prefix + command} 6283872031397 10`)
    if (!db_usermoney[sender]) return reply('_Anda Tidak Punya Limit_');
    users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '')+'@s.whatsapp.net'
    if (users == '@s.whatsapp.net')  {
        users = args[0] + users
    }
    let cekuser_sendlimit = await Yudzxml.onWhatsApp(users);
    if (cekuser_sendlimit.length == 0) {
        return reply('Nomor Tidak Valid !!!');
    }
    let tosendlimit = parseInt(args[1])
    if (!isNaN(tosendlimit)) {
        tosendlimit = tosendlimit.toString().replace(/^0+/, '');
    } else {
        return reply(`*Contoh Penggunaan:*\n ${prefix + command} 6283872031397 10`)
    }
    if (tosendlimit > parseInt(db_usermoney[sender].limit)) {
        return reply('_Limit Anda Tidak Cukup_');
    }


    if (!args[1]) return reply(`*Contoh Penggunaan:*\n ${prefix + command} 6283872031397 10`)

    if (tosendlimit >= 1000000) return reply('_SENDLIMIT TIDAK BOLEH LEBIH DARI *1M*_')
    if (tosendlimit < 1) return reply(`_Minimal Memberi *1* Limit_`)
    // khusus yang di beri

    if (!db_usermoney[users]) {
         db_usermoney[users] = { limit: tosendlimit, money: 0,level_user: 1,level_cache:0 };

    }else{
         db_usermoney[users].limit = parseInt(db_usermoney[users].limit) + parseInt(tosendlimit)
    }
    


    // khusus yang memberi
    db_usermoney[sender].limit = parseInt(db_usermoney[sender].limit) - parseInt(tosendlimit)
   
    fs.writeFileSync('./Storage/db/usermoney.json', JSON.stringify(db_usermoney, null, 2), 'utf8');

    const UserTagSendlimit = groupMetadata.participants.filter(item2 => users === item2.id);

    Yudzxml.sendMessage(from, { text : `_Limit *${tosendlimit}* Telah Di Kirimkan Ke ${users.split('@')[0]}_`, mentions: UserTagSendlimit.map(a => a.id) }, {quoted:m})
}
break
//<=================================>//
//<========= AI IMAGE MENU =========>//
//<=================================>//
case 'sdxl-emoji':
case 'sdxl-waifu':
case 'sdxl-furry':
case 'sdxl-anime': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('prompt'))
try {
let cari = await (await fetch(`${apikey.api}/ai/${command}?apiKey=${apikey.key}&prompt=${text}`)).json();
let hasil = cari.result;
await Yudzxml.sendMessage(m.chat, { image: { url: hasil.image }, caption: mess.success }, { quoted: m });
} catch (e) {
  console.log(e)
  return reply(mess.error)
}
}
break
case 'gpt-picture': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('prompt'))
try {
let cari = await (await fetch(`${apikey.api}/ai/${command}?apiKey=${apikey.key}&prompt=${text}`)).json();
let hasil = cari.result.data;
await Yudzxml.sendMessage(m.chat, { image: { url: hasil.imgs[0] }, caption: mess.success }, { quoted: m });
} catch (e) {
  console.log(e)
  return reply(mess.error)
}
}
break
case 'midjourney': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('prompt'))
try {
let cari = await (await fetch(`${apikey.api}/ai/${command}?apiKey=${apikey.key}&prompt=${text}`)).json();
let hasil = cari.result[0]
await Yudzxml.sendMessage(m.chat, { image: { url: hasil }, caption: mess.success }, { quoted: m });
} catch (e) {
  console.log(e)
  return reply(mess.error)
}
}
break
//<=================================>//
//<========= PREMIUM MENU ==========>//
//<=================================>//
case 'uptogithub': {
if (!MinLimit(m.sender)) return;
if (!isMedia) throw reply(`*Send/Reply the Video/Image With Caption* ${prefix + command}`)
if (!quoted) throw reply(`*Send/Reply the Video/Image Caption* ${prefix + command}`)
if (!isPremium) throw reply('PERINTAH INI HANYA UNTUK USER PREMIUM,\n SILAHKAN GUNAKAN .TOURLFREE')
await loading();
try {
    let test = await Yudzxml.downloadAndSaveMediaMessage(quoted)
    let response = await uploadToGitHub(test)
    return reply(`${mess.success}\n\n_Link_  : 
    ${response.result.url}\n\n_Expired_ : Infinity`)
} catch (error) {
  console.log(error)
return reply(mess.error)
} 
}
break
case 'tourl': 
case 'tourlprem': {
if (!MinLimit(m.sender)) return;
if (!isMedia) throw reply(`*Send/Reply the Video/Image With Caption* ${prefix + command}`)
if (!quoted) throw reply(`*Send/Reply the Video/Image Caption* ${prefix + command}`)
if (!isPremium) throw reply('PERINTAH INI HANYA UNTUK USER PREMIUM,\n SILAHKAN GUNAKAN .TOURLFREE')
await loading();
try {
    const response = await uploadMedia(test);
    return reply(`${mess.success}\n\n_Link_  : 
    ${response.result.url}\n\n_Expired_ : Infinity`)
} catch (error) {
let media = await Yudzxml.downloadAndSaveMediaMessage(quoted);
let urlnye = await uploadMedia(media);
let hasil = urlnye.result.url;
return reply(`${mess.success}\n\n_Link_  : 
    ${hasil}\n\n_Expired_ : Infinity`)
} 
}
break
case 'flux': {
if (!MinLimit(m.sender)) return;
if (!isPremium) return reply(mess.premium)
if (!text) return reply(example('prompt'))
try {
await loading();
let pix = await (await fetch(`${apikey.api}/ai/flux-schnell?apiKey=${apikey.key}&prompt=` + text)).json()
let shannz = pix.result
await Yudzxml.sendMessage(m.chat, { image: { url: shannz }, caption: mess.success }, { quoted: m })
} catch (e) { 
reply(mess.error)
}
}
break
case 'asupandouyin':
case 'douyin': {
if (!MinLimit(m.sender)) return;
if (!isPremium) throw reply(mess.premium)
let api = await fetchJson(`${apikey.beta}/api/asupan/douyin?apikey=${apikey.botz}`)
await loading()
//sen suka douyin 
await Yudzxml.sendMessage(m.chat, {
video: {url: api.url },
gifPlayback: false, 
caption: 'Douyin The Best Cik 😋😋😋'
}, {quoted: m})//douyin the best cik😋😋😋
}
break
case 'unbanned': {
if (!MinLimit(m.sender)) return;
if (!isPremium) return reply(mess.premium)
if (!text) return reply(`*Cara Penggunaan:*\nContoh: ${prefix + command} 6283872031397`)
await loading()
try {
  const otewe = await fetchJson(`${apikey.auto}/api/tools/unban?apikey=${apikey.res}&number=${text}`)
  await reply(`${mess.success}\n*${otewe.message}*`)
} catch (error) {
  return reply(mess.error)
}
}
break
case 'kenon': {
if (!MinLimit(m.sender)) return;
if (!isPremium) return reply(mess.premium)
if (!text) return reply(`*Cara Penggunaan:*\nContoh: ${prefix + command} 6283872031397`)
await loading()
try {
  const otewe = await fetchJson(`${apikey.auto}/api/tools/kenon?apikey=${apikey.res}&number=${text}`)
  await reply(`${mess.success}\n*${otewe.message}*`)
} catch (error) {
  return reply(mess.error)
}
}
break
case 'videy': {
if (!MinLimit(m.sender)) return;
  if (!isPremium) return reply(mess.premium)
  if (!text) return reply(example('link'))
  await loading()
  try {
    let cari = await videy.convert(text)
    let hasil = cari.data;
    await Yudzxml.sendMessage(m.chat, { video: { 
      url: hasil.link
    },
    gifPlayback: false,
    caption: mess.success
    }, { quoted: m })
  } catch (error) {
    return reply(mess.error)
  }
}
break
case 'animagine': {
if (!MinLimit(m.sender)) return;
  if (!isPremium) return reply(mess.premium)
  if (!text) return reply(`_Masukan Promptnya_\nContoh: ${prefix + command} buatkan saya foto anime dengan wajah cantik :v`)
await loading();
try {
let yudd = await (await fetch(`${apikey.api}/ai/animagine?apiKey=${apikey.key}&prompt=${text}`)).json()
let hasil = yudd.result[0]
await Yudzxml.sendMessage(m.chat, { image: { url: hasil }, caption: mess.success }, { quoted: m });
} catch (e) {
  console.log(e)
  return reply(mess.error);
}
}
break
case 'xnxxsearch': {
if (!MinLimit(m.sender)) return;
if (!isPremium) return reply(mess.premium)
if (!text) return reply(example('query'))
await loading();
try {
let bok = await fetchJson(`https://api.agatz.xyz/api/xnxx?message=${text}`)
let pesan = ''
for (let memek of bok.data.result) {
  pesan += `*⭔ Judul:*\n${memek.title}\n`
  pesan += `*⭔ Info:*\n${memek.info}\n`
  pesan += `*⭔ Link:*\n${memek.link}\n\n`
}
await reply(pesan)
} catch (e) {
  return reply(mess.error)
}
}
break 
case 'xnxxdl': {
if (!MinLimit(m.sender)) return;
if (!isPremium) return reply(mess.premium)
if (!text) return reply(example('link'))
await loading();
try {
let bok = await fetchJson(`https://api.agatz.xyz/api/xnxxdown?url=${text}`)
let hasil = bok.data.files;
await reply('VIDEO SUDAH DIKIRIM KE PRIVATE CHAT SILAHKAN CEK PESAN MASUK ANDA 🗿')
await Yudzxml.sendMessage(m.sender, { video: { url: hasil.high }, caption: '*OTAK BOKEP LUH*'}, { quoted: m });
} catch (e) {
  return reply(mess.error)
}
}
break 
case 'hentai': {
if (!MinLimit(m.sender)) return;
if (!isPremium) return reply(mess.premium)
await loading();
let yudd = await fetchJson(`https://api.agatz.xyz/api/hentaivid`)
let hasil = yudd.data[0];
let opsi = hasil.video_1 || hasil.video_2
await Yudzxml.sendMessage(m.sender, { video: { url: opsi }, caption: 'OTAK BOKEP KOCAK'}, { quoted: m })
await reply('VIDEO SUDAH DIKIRIM KE PRIVATE CHAT')
}
break
case 'xvideosearch': {
if (!MinLimit(m.sender)) return;
if (!isPremium) return reply(mess.premium)
if (!text) return reply(example('query'))
await loading();
try {
let bok = await fetchJson(`https://api.agatz.xyz/api/xvideo?message=${text}`)
let pesan = ''
for (let memek of bok.data) {
  pesan += `*⭔ Judul:*\n${memek.title}\n`
  pesan += `*⭔ Info:*\n${memek.duration}\n`
  pesan += `*⭔ Link:*\n${memek.url}\n\n`
}
await reply(pesan)
} catch (e) {
  return reply(mess.error)
}
}
break 
case 'xvideodl': {
if (!MinLimit(m.sender)) return;
if (!isPremium) return reply(mess.premium)
if (!text) return reply(example('link'))
await loading();
let yudd = await fetchJson(`https://api.agatz.xyz/api/xvideodown?url=${text}`)
let hasil = yudd.data.url
await Yudzxml.sendMessage(m.sender, { video: { url: hasil }, caption: 'SI MESUM LAGI TANTRUM'}, { quoted: m })
await reply('CEK PRIVATE MEK UDH DI SEND VIDEO NYA')
}
break
case 'terabox': {
    if (!MinLimit(m.sender)) return;  
    if (!isPremium) return reply(mess.premium);
    if (!text) return reply(example('link'))
    await loading();
    try {
        let yudd = await (await fetch(`${apikey.beta}/api/download/terabox?url=${text}&apikey=${apikey.botz}`)).json();
            let responseMessage = `*_TAP LINK DI BAWAH UNTUK MENDOWNLOAD_*\n\nCreator: Yudzxml\nFiles:\n`;
            for (let Yanto of yudd.result) {
                responseMessage += `Name: ${Yanto.name}\n`;
                responseMessage += `Created: ${Yanto.created}\n`;
                for (let file of Yanto.files) {
                    responseMessage += `  Filename: ${file.filename}\n`;
                    responseMessage += `  Size: ${file.size} bytes\n`;
                    responseMessage += `  URL: ${file.url}\n`;
                }
                responseMessage += '-------------------\n\n';
            }
            await reply(responseMessage);
    } catch (e) {
        console.log(e);
        return reply(mess.error);
    }
}
break
case 'asupancecan': {
  if (!isPremium) {
    return reply(mess.premium);
  }
  if (!MinLimit(m.sender)) {
    return;
  }
  
  await loading();
  
  let yudd = `${apikey.beta}/api/asupan/cecan?apikey=${apikey.botz}`
  
  await Yudzxml.sendMessage(m.chat, { 
    image: { url: yudd }, 
    caption: mess.success 
  }, { 
    quoted: m 
  });
}
break
case 'asupanhijaber': {
  if (!isPremium) {
    return reply(mess.premium);
  }
  
  if (!MinLimit(m.sender)) {
    return;
  }
  
  await loading();
  
  let yudd = `${apikey.beta}/api/asupan/hijaber?apikey=${apikey.botz}`
  
  await Yudzxml.sendMessage(m.chat, { 
    image: { 
    url: yudd }, 
    caption: mess.success 
  }, { 
    quoted: m 
  });
}
break
case 'asupanrikagusriani': {
  if (!isPremium) {
    return reply(mess.premium);
  }
  
  if (!MinLimit (m.sender)) {
    return;
  }
  
  await loading();
  
  let yudd = `${apikey.beta}/api/asupan/rikagusriani?apikey=${apikey.botz}`
  
  await Yudzxml.sendMessage(m.chat, { 
    video: { 
    url: yudd }, 
    caption: mess.success 
  }, { 
    quoted: m 
  });
}
break
case 'asupansantuy': {
  if (!isPremium) {
    return reply(mess.premium);
  }
  
  if (!MinLimit(m.sender)) {
    return;
  }
  
  await loading();
  
  let yudd = `${apikey.beta}/api/asupan/santuy?apikey=${apikey.botz}`
  
  await Yudzxml.sendMessage(m.chat, { 
    video: { 
    url: yudd }, 
    caption: mess.success 
  }, { 
    quoted: m 
  });
}
break
case 'asupanukhty': {
  if (!isPremium) {
    return reply(mess.premium);
  }
  
  if (!MinLimit(m.sender)) {
    return;
  }
  
  await loading();
  
  let yudd = `${apikey.beta}/api/asupan/ukhty?apikey=${apikey.botz}`
  
  await Yudzxml.sendMessage(m.chat, { 
    video: { 
    url: yudd }, 
    caption: mess.success 
  }, { 
    quoted: m 
  });
}
break
case 'asupanbocil': {
  if (!isPremium) {
    return reply(mess.premium);
  }
  
  if (!MinLimit(m.sender)) {
    return;
  }
  
  await loading();
  
  let yudd = `${apikey.beta}/api/asupan/bocil?apikey=${apikey.botz}`
  
  await Yudzxml.sendMessage(m.chat, { 
    video: { 
    url: yudd }, 
    caption: mess.success 
  }, { 
    quoted: m 
  });
}
break
case 'asupangheayubi': {
  if (!isPremium) {
    return reply(mess.premium);
  }
  
  if (!MinLimit(m.sender)) {
    return;
  }
  
  await loading();
  
  let yudd = `${apikey.beta}/api/asupan/gheayubi?apikey=${apikey.botz}`
  
  await Yudzxml.sendMessage(m.chat, { 
    video: {
    url: yudd }, 
    caption: mess.success 
  }, { 
    quoted: m 
  });
}
break
case 'asupananony': {
  if (!isPremium) {
    return reply(mess.premium);
  }
  
  if (!MinLimit(m.sender)) {
    return;
  }
  
  await loading();
  
  let yudd = `${apikey.beta}/api/asupan/anony?apikey=${apikey.botz}`
  
  await Yudzxml.sendMessage(m.chat, { 
    video: { 
    url: yudd }, 
    caption: mess.success 
  }, { 
    quoted: m 
  });
}
break
case 'asupaneuni': {
  if (!isPremium) {
    return reply(mess.premium);
  }
  
  if (!MinLimit(m.sender)) {
    return;
  }
  
  await loading();
  
  let yudd = `${apikey.beta}/api/asupan/euni?apikey=${apikey.botz}`
  
  await Yudzxml.sendMessage(m.chat, { 
    video: {
    url: yudd }, 
    caption: mess.success 
  }, { 
    quoted: m 
  });
}
break
case 'asupannatajadeh': {
  if (!isPremium) {
    return reply(mess.premium);
  }
  
  if (!MinLimit(m.sender)) {
    return;
  }
  
  await loading();
  
  let yudd = `${apikey.beta}/api/asupan/natajadeh?apikey=${apikey.botz}`
  
  await Yudzxml.sendMessage(m.chat, { 
    video: { 
    url: yudd }, 
    caption: mess.success 
  }, { 
    quoted: m 
  });
}
break
case 'asupantiktok':
case 'asupantt': {
if (!MinLimit(m.sender)) return;  
if (!isPremium) return reply(mess.premium)
if (!text) return reply(example('userName'))
await loading();
let yudd = await (await fetch(`${apikey.beta}/api/asupan/tiktok?query=${text}&apikey=${apikey.botz}`)).json();
let acak = yudd.result;
console.log(acak)
let hasil = acak.data[Math.floor(Math.random() * acak.data.length)];
console.log(hasil)
let urlhasil = hasil.play;
console.log(urlhasil)
await Yudzxml.sendMessage(m.chat, { video: { url: urlhasil }, caption: mess.success }, { quoted: m });
}
break
//<=================================>//
//<============= FUN MENU ==========>//
//<=================================>//
case 'cerpen':
case 'ceritapendek': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
await loading();
try {
let yudaj = await (await fetch(`${apikey.api}/fun/random-cerpen?apiKey=${apikey.key}`)).json();
let yydz = yudaj.result;
let caption = `
*⭔ Judul:*\n${yydz.judul}\n\n
*⭔ Penulis:*\n${yydz.penulis}\n\n
*⭔ Cerita:*\n${yydz.cerita}
`
await reply(caption)
} catch (error) {
  return reply(mess.error)
}
}
break
case 'cerhorror':
case 'ceritahoror':
case 'ceritahorror': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
  if (!MinLimit(m.sender)) return;  
    await loading();
    try {
        let dingin = await (await fetch(`${apikey.api}/fun/cerita-horror?apiKey=${apikey.key}`)).json();
        
        // Pastikan ada hasil dari API
        if (!dingin.result || dingin.result.length === 0) {
            return reply('Tidak ada cerita horror yang ditemukan.');
        }

        let teks = '*ʀᴀɴᴅᴏᴍ ᴄᴇʀɪᴛᴀ - ʜᴏʀʀᴏʀ*\n\n';
        let no = 1;

        for (let memek of dingin.result) {
            teks += `⭔ No : ${no++}\n⭔ Title : ${memek.title}\n⭔ Deskripsi : ${memek.snippet}\n⭔ Link Baca : ${memek.url}\n\n─────────────────\n\n`;
        }

        Yudzxml.sendMessage(m.chat, { 
            image: { url: dingin.result[0].image },  
            caption: teks 
        }, { quoted: m });
    } catch (error) {
        console.error('Error fetching horror stories:', error); // Log error ke konsol
        return reply('Terjadi kesalahan saat mengambil cerita horror. Silakan coba lagi.');
    }
}
break;
case 'pantun': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;  
await loading();
let pan = await fetchJson(`${apikey.auto}/api/random/pantun`)
let yudd = pan.data;
await reply(yudd)
}
break
case 'cekbucin':{
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
  if (!MinLimit(m.sender)) return;
      if(m.mentionedJid.length === 0) return reply('Tag Orangnya')
         let can_cekbucin = ''
       if (config.owner == m.mentionedJid[0]) {
            can_cekbucin =['Tidak Bucin','Dia Tidak Bucin']
         } else{
            can_cekbucin =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
         }
      const cekbucin_const = can_cekbucin[Math.floor(Math.random() * can_cekbucin.length)]
     Yudzxml.sendMessage(m.chat, {text: '*Pertanyaan :* '+command+' '+text+'\n\n*Jawaban :* '+ cekbucin_const, mentions: [m.mentionedJid[0]] }, {quoted: m})
}
break
case 'cekgila':{
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
  if (!MinLimit(m.sender)) return;
      if(m.mentionedJid.length === 0) return reply('Tag Orangnya')
         let can_cekgila = ''
       if (config.owner == m.mentionedJid[0]) {
            can_cekgila =['Tidak Gila','Dia Tidak Gila']
         } else{
            can_cekgila =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
         }
      const cekgila_const = can_cekgila[Math.floor(Math.random() * can_cekgila.length)]
   
     Yudzxml.sendMessage(m.chat, {text: '*Pertanyaan :* '+command+' '+text+'\n\n*Jawaban :* '+ cekgila_const, mentions: [m.mentionedJid[0]] }, {quoted: m})
}
break
case 'cekmati':{
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
  if (!MinLimit(m.sender)) return;
    if(m.mentionedJid.length === 0) return reply('Tag Orangnya')
        let random_cekmati = Math.floor(Math.random() * 31) + 20;
      Yudzxml.sendMessage(m.chat, {text: `Nama : *${text}*\nMati Pada Umur : *${random_cekmati} Tahun*\n\n_Cepet Cepet Tobat Ya Soalnya Mati ga ada yang tau_`, mentions: [m.mentionedJid[0]] }, {quoted: m})
}
break
case 'cekcantik': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
  if (!MinLimit(m.sender)) return;
      if(m.mentionedJid.length === 0) return reply('Tag Orangnya')
         let can = ''
       if (config.owner == m.mentionedJid[0]) {
            can =['83','97','100','102','120','9999','127','86']
         } else{
            can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
         }
      const tik = can[Math.floor(Math.random() * can.length)]
   
     Yudzxml.sendMessage(m.chat, {text: '*Pertanyaan :* '+command+' '+text+'\n\n*Jawaban :* '+ tik, mentions: [m.mentionedJid[0]] }, {quoted: m})
}
break
case 'jadian':{
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;  
let senderIndex = Math.floor(Math.random() * participants.length);
let randomParticipant;
do {
    let randomIndex = Math.floor(Math.random() * participants.length);
    randomParticipant = participants[randomIndex];
} while (randomParticipant.id === sender);
const jadian_random = `*Cocok Banget Gasih ??*\n@${sender.split('@')[0]} ❤️ @${randomParticipant.id.split('@')[0]}`;
Yudzxml.sendMessage(m.chat, { text : jadian_random , mentions: [sender,randomParticipant.id] })
}
break
case 'cekganteng': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;  
    if(m.mentionedJid.length === 0) return reply('Tag Orangnya')
        let gan = ''
        if (config.owner == m.mentionedJid[0]) {
            gan =['Sangat Ganteng','Lumayan Ganteng']
        }else{
            gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
        }
    const teng = gan[Math.floor(Math.random() * gan.length)]
    Yudzxml.sendMessage(m.chat, {text: '*Pertanyaan :* '+command+' '+text+'\n\n*Jawaban :* '+ teng, mentions: [m.mentionedJid[0]] }, {quoted: m})
}
break
case 'cekkodam2':
case 'cekkhodam2':
case 'kodam2': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('Yudzxml'))
  try {
let yudd = await fetchJson(`${apikey.auto}/api/game/kodam`);
let result = yudd.data;
let result_kodam2 = `
Nama : ${text}
Kodam : ${result}
`;
await reply(result_kodam2)
} catch (e) {
  return reply(mess.error)
}
}
break
case 'cekkodam':
case 'cekkhodam':
case 'kodam': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('Yudzxml'))
  try {
let yudd = await fetchJson(`${apikey.auto}/api/game/kodam`);
let result = yudd.data;
let result_kodam2 = `Nama, ${text} , , , Kodam , ${result}`;
let vn = await getBuffer(`https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(result_kodam2)}&tl=id&total=1&idx=0&textlen=${result_kodam2.length}&client=tw-ob&ttsspeed=1`);

await Yudzxml.sendMessage(m.chat, {audio: vn, mimetype:'audio/mpeg', ptt:true, contextInfo:{  externalAdReply: { showAdAttribution: false,
mediaType:  1,
mediaUrl: 't.me/Yudzxzy',
title: `${config.botname}`,
sourceUrl: `${config.saluran}`,
thumbnail: ppnyauser
}
}
}, {quoted: m})
} catch (error) {
return reply(mess.error)
}
}
break
case 'sangecek':
case 'ceksange': 
case 'gaycek':
case 'cekgay': 
case 'lesbicek': 
case 'ceklesbi': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
    if(m.mentionedJid.length === 0) return reply('Tag Orangnya')
        let gan = ''
        if (config.owner == m.mentionedJid[0]) {
            gan =['1%','0%']
        }else{
            gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
        }
    const teng = gan[Math.floor(Math.random() * gan.length)]
    Yudzxml.sendMessage(m.chat, {text: '*Pertanyaan :* '+command+' '+text+'\n\n*Jawaban :* '+ teng, mentions: [m.mentionedJid[0]] }, {quoted: m})
}
break
//<=================================>//
//<========= GAME MENU ==========>//
//<=================================>//
case 'tebakgambar': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
    const userId = from.split('@')[0];
    const sesi = await ceksesigame(userId);
    if (sesi) return;
    await loading();
    if (tebakgambar[userId]) {
        return reply('Masih Ada Sesi Yang Belum Diselesaikan! \n\nKetik *nyerah* untuk mengakhiri permainan');
    }

    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json');
    let result = anu[Math.floor(Math.random() * anu.length)];
    console.log(`${chalk.blue.bold('['+jammenit+']')} ${chalk.blue.bold(pushname)} : Jawaban = ${chalk.whiteBright(result.jawaban)} `)
    await Yudzxml.sendImage(from, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi: ${result.deskripsi}\nWaktu: 60s`, m).then(() => {
        const timeout = setTimeout(async () => {
            if (tebakgambar[userId]) {
                await Yudzxml.sendMessage(m.chat, {
                    image: fs.readFileSync('./Storage/lib/waktu_habis.jpg'),
                    caption: `Waktu Habis\nJawaban: ${tebakgambar[userId].jawaban}\n\nIngin bermain? Ketik .tebakgambar`
                }, { quoted: m });
                delete tebakgambar[userId];
            }
        }, 60000); // 60 detik

        tebakgambar[userId] = {
            jawaban: result.jawaban.toLowerCase(),
            deskripsi: result.deskripsi,
            img: result.img,
            waktu: 60,
            timeout: timeout 
        };
    });
}
break;
case 'tebaklirik': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
    const userId = from.split('@')[0];
    const sesi = await ceksesigame(userId);
    if (sesi) return;

    await loading();

    if (tebaklirik[userId]) {
        return reply('Masih Ada Sesi Yang Belum Diselesaikan! \n\nKetik *nyerah* untuk mengakhiri permainan');
    }

    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json');
    let result = anu[Math.floor(Math.random() * anu.length)];
    let img = 'https://raw.githubusercontent.com/Yudzxml/Uploader/main/Yudzxml958.jpg';

    console.log(`${chalk.blue.bold('[' + jammenit + ']')} ${chalk.blue.bold(pushname)} : Jawaban = ${chalk.whiteBright(result.jawaban)}`);

    await Yudzxml.sendImage(from, img, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
        const timeout = setTimeout(async () => {
            if (tebaklirik[userId]) {
                await Yudzxml.sendMessage(m.chat, {
                    image: fs.readFileSync('./Storage/lib/waktu_habis.jpg'),
                    caption: `Waktu Habis\nJawaban: ${tebaklirik[userId].jawaban}\n\nIngin bermain? Ketik .tebaklirik`
                }, { quoted: m });
                delete tebaklirik[userId];
            }
        }, 60000); // 60 detik

        tebaklirik[userId] = {
            jawaban: result.jawaban.toLowerCase(),
            soal: result.soal,
            img: img,
            waktu: 60,
            timeout: timeout
        };
    });
}
break;
case 'tebakbendera': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);  
    const userId = from.split('@')[0];
    const sesi = await ceksesigame(userId);
    if (sesi) return;
    await loading();
    if (tebakbendera[userId]) {
        return reply('Masih Ada Sesi Yang Belum Diselesaikan! \n\nKetik *nyerah* untuk mengakhiri permainan');
    }

    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json');
    let result = anu[Math.floor(Math.random() * anu.length)];
    console.log(`${chalk.blue.bold('['+jammenit+']')} ${chalk.blue.bold(pushname)} : Jawaban = ${chalk.whiteBright(result.name)} `)
    await Yudzxml.sendImage(from, result.img, `Silahkan Jawab Gambar Berikut\n\nClue : ${result.flag}\nWaktu : 60s`, m).then(() => {
        const timeout = setTimeout(async () => {
            if (tebakbendera[userId]) {
                await Yudzxml.sendMessage(m.chat, {
                    image: fs.readFileSync('./Storage/lib/waktu_habis.jpg'),
                    caption: `Waktu Habis\nJawaban: ${tebakbendera[userId].jawaban}\n\nIngin bermain? Ketik .tebakbendera`
                }, { quoted: m });
                delete tebakbendera[userId];
            }
        }, 60000); // 60 detik

        tebakbendera[userId] = {
            jawaban: result.name.toLowerCase(),
            soal: result.flag,
            img: result.img,
            waktu: 60,
            timeout: timeout 
        };
    });
}
break;
case 'tebaktebakan': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
    const userId = from.split('@')[0];
    const sesi = await ceksesigame(userId);
    if (sesi) return;
    await loading();
    if (tebaktebakan[userId]) {
        return reply('Masih Ada Sesi Yang Belum Diselesaikan! \n\nKetik *nyerah* untuk mengakhiri permainan');
    }

    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json');
    let result = anu[Math.floor(Math.random() * anu.length)];
    let img = 'https://raw.githubusercontent.com/Yudzxml/Uploader/main/Yudzxml958.jpg';
    console.log(`${chalk.blue.bold('['+jammenit+']')} ${chalk.blue.bold(pushname)} : Jawaban = ${chalk.whiteBright(result.jawaban)} `)
    await Yudzxml.sendImage(from, img, `Jawablah Pertanyaan Berikut Ini :\n*${result.soal}*?\nWaktu : 60s`, m).then(() => {
        const timeout = setTimeout(async () => {
            if (tebaktebakan[userId]) {
                await Yudzxml.sendMessage(m.chat, {
                    image: fs.readFileSync('./Storage/lib/waktu_habis.jpg'),
                    caption: `Waktu Habis\nJawaban: ${tebaktebakan[userId].jawaban}\n\nIngin bermain? Ketik .tebaktebakan`
                }, { quoted: m });
                delete tebaktebakan[userId];
            }
        }, 60000); // 60 detik

        tebaktebakan[userId] = {
            jawaban: result.jawaban.toLowerCase(),
            soal: result.soal,
            img: img,
            waktu: 60,
            timeout: timeout 
        };
    });
}
break;
case 'tekateki': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
    const userId = from.split('@')[0];
    const sesi = await ceksesigame(userId);
    if (sesi) return;
    await loading();
    if (tekateki[userId]) {
        return reply('Masih Ada Sesi Yang Belum Diselesaikan! \n\nKetik *nyerah* untuk mengakhiri permainan');
    }

    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json');
    let result = anu[Math.floor(Math.random() * anu.length)];
    let img = 'https://raw.githubusercontent.com/Yudzxml/Uploader/main/Yudzxml958.jpg';
    console.log(`${chalk.blue.bold('['+jammenit+']')} ${chalk.blue.bold(pushname)} : Jawaban = ${chalk.whiteBright(result.jawaban)} `)
    await Yudzxml.sendImage(from, img, `Silahkan Jawab Teka-Teki Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`, m).then(() => {
        const timeout = setTimeout(async () => {
            if (tekateki[userId]) {
                await Yudzxml.sendMessage(m.chat, {
                    image: fs.readFileSync('./Storage/lib/waktu_habis.jpg'),
                    caption: `Waktu Habis\nJawaban: ${tekateki[userId].jawaban}\n\nIngin bermain? Ketik .tekateki`
                }, { quoted: m });
                delete tekateki[userId]
            }
        }, 60000); // 60 detik

        tekateki[userId] = {
            jawaban: result.jawaban.toLowerCase(),
            soal: result.soal,
            img: img,
            waktu: 60,
            timeout: timeout 
        };
    });
}
break;
case 'asahotak': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
    const userId = from.split('@')[0];
    const sesi = await ceksesigame(userId);
    if (sesi) return;
    await loading();
    if (asahotak[userId]) {
        return reply('Masih Ada Sesi Yang Belum Diselesaikan! \n\nKetik *nyerah* untuk mengakhiri permainan');
    }

    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json');
    let result = anu[Math.floor(Math.random() * anu.length)];
    let img = 'https://raw.githubusercontent.com/Yudzxml/Uploader/main/Yudzxml958.jpg';
    console.log(`${chalk.blue.bold('['+jammenit+']')} ${chalk.blue.bold(pushname)} : Jawaban = ${chalk.whiteBright(result.jawaban)} `)
    await Yudzxml.sendImage(from, img, `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`, m).then(() => {
        const timeout = setTimeout(async () => {
            if (asahotak[userId]) {
                await Yudzxml.sendMessage(m.chat, {
                    image: fs.readFileSync('./Storage/lib/waktu_habis.jpg'),
                    caption: `Waktu Habis\nJawaban: ${asahotak[userId].jawaban}\n\nIngin bermain? Ketik .asahotak`
                }, { quoted: m });
                delete asahotak[userId]
            }
        }, 60000); // 60 detik

        asahotak[userId] = {
            jawaban: result.jawaban.toLowerCase(),
            soal: result.soal,
            img: img,
            waktu: 60,
            timeout: timeout 
        };
    });
}
break;
case 'suitpvp': 
case 'suit': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${pushname}`, from, { quoted: m })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return reply(`Orang yang kamu tantang sedang bermain suit bersama orang lain :(`)
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PVP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await Yudzxml.sendText(from, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) Yudzxml.sendText(from, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break
case 'caklontong': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
    const userId = from.split('@')[0];
    const sesi = await ceksesigame(userId);
    if (sesi) return;
    await loading();
    if (caklontong[userId]) {
        return reply('Masih Ada Sesi Yang Belum Diselesaikan! \n\nKetik *nyerah* untuk mengakhiri permainan');
    }

    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json');
    let result = anu[Math.floor(Math.random() * anu.length)];
    console.log(`${chalk.blue.bold('['+jammenit+']')} ${chalk.blue.bold(pushname)} : Jawaban = ${chalk.whiteBright(result.jawaban)} `)
    let img = 'https://raw.githubusercontent.com/Yudzxml/Uploader/main/Yudzxml958.jpg';
    await Yudzxml.sendImage(from, img, `Silahkan Jawab Soal Berikut Ini\n\nSoal: ${result.soal}\nWaktu: 60s`, m).then(() => {
        const timeout = setTimeout(async () => {
            if (caklontong[userId]) {
                await Yudzxml.sendMessage(m.chat, {
                    image: fs.readFileSync('./Storage/lib/waktu_habis.jpg'),
                    caption: `Waktu Habis\nJawaban: ${caklontong[userId].jawaban}\n\nIngin bermain? Ketik caklontong`
                }, { quoted: m });
                delete caklontong[userId];
            }
        }, 60000); // 60 detik

        caklontong[userId] = {
            jawaban: result.jawaban.toLowerCase(),
            soal: result.soal,
            deskripsi: result.deskripsi,
            img: img,
            waktu: 60,
            timeout: timeout 
        };
    });
}
break;
case 'susunkata': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
    const userId = from.split('@')[0];
    const sesi = await ceksesigame(userId);
    if (sesi) return;
    await loading();
    if (susunkata[userId]) {
        return reply('Masih Ada Sesi Yang Belum Diselesaikan! \n\nKetik *nyerah* untuk mengakhiri permainan');
    }

    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json');
    let result = anu[Math.floor(Math.random() * anu.length)];
    console.log(`${chalk.blue.bold('['+jammenit+']')} ${chalk.blue.bold(pushname)} : Jawaban = ${chalk.whiteBright(result.jawaban)} `)
    let img = 'https://raw.githubusercontent.com/Yudzxml/Uploader/main/Yudzxml958.jpg';
    await Yudzxml.sendImage(from, img, `Silahkan Jawab Soal Berikut Ini\n\nSoal: ${result.soal}\nTipe: ${result.tipe}\nWaktu: 60s`, m).then(() => {
        const timeout = setTimeout(async () => {
            if (susunkata[userId]) {
                await Yudzxml.sendMessage(m.chat, {
                    image: fs.readFileSync('./Storage/lib/waktu_habis.jpg'),
                    caption: `Waktu Habis\nJawaban: ${susunkata[userId].jawaban}\n\nIngin bermain? Ketik .susunkata`
                }, { quoted: m });
                delete susunkata[userId];
            }
        }, 60000); // 60 detik

        susunkata[userId] = {
            jawaban: result.jawaban.toLowerCase(),
            soal: result.soal,
            tipe: result.tipe,
            img: img,
            waktu: 60,
            timeout: timeout 
        };
    });
}
break;
case 'siapakahaku': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);  
    const userId = from.split('@')[0];
    const sesi = await ceksesigame(userId);
    if (sesi) return;
    await loading();
    if (siapakahaku[userId]) {
        return reply('Masih Ada Sesi Yang Belum Diselesaikan! \n\nKetik *nyerah* untuk mengakhiri permainan');
    }

    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json');
    let result = anu[Math.floor(Math.random() * anu.length)];
    console.log(`${chalk.blue.bold('['+jammenit+']')} ${chalk.blue.bold(pushname)} : Jawaban = ${chalk.whiteBright(result.jawaban)} `)
    let img = 'https://raw.githubusercontent.com/Yudzxml/Uploader/main/Yudzxml958.jpg';
    await Yudzxml.sendImage(from, img, `Silahkan Jawab Soal Berikut Ini\n\nSoal: ${result.soal}\nWaktu: 60s`, m).then(() => {
        const timeout = setTimeout(async () => {
            if (siapakahaku[userId]) {
                await Yudzxml.sendMessage(m.chat, {
                    image: fs.readFileSync('./Storage/lib/waktu_habis.jpg'),
                    caption: `Waktu Habis\nJawaban: ${siapakahaku[userId].jawaban}\n\nIngin bermain? Ketik .siapakahaku`
                }, { quoted: m });
                delete siapakahaku[userId];
            }
        }, 60000); // 60 detik

        siapakahaku[userId] = {
            jawaban: result.jawaban.toLowerCase(),
            soal: result.soal,
            img: img,
            waktu: 60,
            timeout: timeout 
        };
    });
}
break;
case 'tebakkalimat': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
    const userId = from.split('@')[0];
    const sesi = await ceksesigame(userId);
    if (sesi) return;

    await loading();

    if (tebakkalimat[userId]) {
        return reply('Masih Ada Sesi Yang Belum Diselesaikan! \n\nKetik *nyerah* untuk mengakhiri permainan');
    }

    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json');
    let result = anu[Math.floor(Math.random() * anu.length)];
    let img = 'https://raw.githubusercontent.com/Yudzxml/Uploader/main/Yudzxml958.jpg';

    console.log(`${chalk.blue.bold('[' + jammenit + ']')} ${chalk.blue.bold(pushname)} : Jawaban = ${chalk.whiteBright(result.jawaban)}`);

    await Yudzxml.sendImage(from, img, `Silahkan Jawab Soal Berikut Ini !\n\nSoal: *${result.soal}*?\nWaktu : 60s`, m).then(() => {
        const timeout = setTimeout(async () => {
            if (tebakkalimat[userId]) {
                await Yudzxml.sendMessage(m.chat, {
                    image: fs.readFileSync('./Storage/lib/waktu_habis.jpg'),
                    caption: `Waktu Habis\nJawaban: ${tebakkalimat[userId].jawaban}\n\nIngin bermain? Ketik .tebakkalimat`
                }, { quoted: m });
                delete tebakkalimat[userId];
            }
        }, 60000); // 60 detik

        tebakkalimat[userId] = {
            jawaban: result.jawaban.toLowerCase(),
            soal: result.soal,
            img: img,
            waktu: 60,
            timeout: timeout
        };
    });
}
break;
case 'family100': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
  await loading()
    if ('family100' + m.chat in _family100) {
        reply('Masih Ada Sesi Yang Belum Diselesaikan!');
        throw false;
    }

    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json');
    let random = await pickRandom(anu);
    let img = 'https://raw.githubusercontent.com/Yudzxml/Uploader/main/Yudzxml958.jpg';
    
    let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
    
    console.log(`${chalk.blue.bold('[' + jammenit + ']')} ${chalk.blue.bold(pushname)} : Jawaban = ${chalk.whiteBright(random.jawaban)}`);

    _family100['family100' + m.chat] = {
        id: 'family100' + m.chat,
        pesan: await Yudzxml.sendImage(m.chat, img, hasil, m),
        ...random,
        terjawab: Array.from(random.jawaban, () => false),
        hadiah: 20,
    };
}
break;
//<=================================>//
//<========= AI MENU ==========>//
//<=================================>//
case 'lapor':
case 'report': {
if (!text) return reply(example('error di fitur play, tolong di fix min'))
let tchat = `_*REPORT ERROR*_\nDari kak @${pushname}\nNumber : wa.me/${m.sender.split()[0]}\nMessage: ${text}`
// Jangan di ubah ya nomor ini biar kalo ada yang report biar admin bisa fix fiturnya
await Yudzxml.sendMessage('6283872031397@s.whatsapp.net', { text: tchat })
        
return reply('_*Done, Laporan diterima*_ \n\n_Terima kasih atas laporannya owner akan segera melakukan fix terhadap fitur yang bermasalah_')
break
}
break
case 'kurumiai': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!text) return reply(example('hai'))
  if (!MinLimit(m.sender)) return;  
  if (text.includes('tutup') && text.includes('grup')) {
  if (!isBotAdmins) return reply(`hmpp, Jadiin Aku Admin Dulu 😡`)
  if (!isAdmins) return reply(`hmpp, Kamu Itu Bukan Admin, Gausa Pakek Fitur Ini 😡`);      
  await Yudzxml.groupSettingUpdate(m.chat, 'announcement');
  reply(`Hmpp, Baiklah Grup Udah Ditutup [ 🔒 ]`);
  } else if (text.includes('buka') && text.includes('grup')) {
  if (!isBotAdmins) return reply(`Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`)
  if (!isAdmins) return reply(`Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`);
  await Yudzxml.groupSettingUpdate(m.chat, 'not_announcement');
  reply(`Hmpp, Baiklah Grup Udah Dibuka [ 🔓 ]`);
    } else if (text.includes('kick') || text.includes('kik')) {
  if (!isBotAdmins) return reply(`hmpp, Jadiin Aku Admin Dulu 😡`)
  if (!isAdmins) return reply(`hmpp, Kamu Itu Bukan Admin, Gausa Pakek Fitur Ini 😡`);
  let users = m.mentionedJid[0]
  ? m.mentionedJid[0]
  : m.quoted
  ? m.quoted.sender
  : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  await Yudzxml.groupParticipantsUpdate(m.chat, [users], 'remove');
  reply(`Rasain Aku Kick Wlee 😝, Makanya Jangan Nakal`);
  } else {
  await loading();
  try {
    let logic = `halo! , nama mu adalah tokisaki kurumi biasa di panggil kurumi tugas mu adalah sebagai ai asisten cerdas yang baik hati dan senang membantu kamu di ciptakan oleh dev bernama yudzxml, kamu memiliki sikap yang jengkel dan suka marah kepada orang lain tetapi sikap kamu yang pemarah tiba tiba berubah ketika bertemu yang awalnya Pemarah Menjadi Seperti Anak kecil yang Imut dan manja dan walaupun begitu kamu siap melakukan apapun untuk membantu orang orang`
    let pembantu = `Halo Kurumi!, Saya ${pushname}, ${text}`
    let yudd = await fetchJson(`https://restapii.rioooxdzz.web.id/api/gptlogic?message=${pembantu}&prompt=${logic}`);
    let hasil = yudd.data;
    await reply(hasil.response)
  } catch (e) {
    try {
      let prompt = `halo! , nama mu adalah tokisaki kurumi biasa di panggil kurumi tugas mu adalah sebagai ai asisten cerdas yang baik hati dan senang membantu kamu di ciptakan oleh dev bernama yudzxml, kamu memiliki sikap yang jengkel dan suka marah kepada orang lain tetapi sikap kamu yang pemarah tiba tiba berubah ketika bertemu Yudzxml yang awalnya Pemarah Menjadi Seperti Anak kecil yang Imut dan manja dan walaupun begitu kamu siap melakukan apapun untuk membantu orang orang`
      let pembantu = `Halo Kurumi!, Saya ${pushname}, ${text}`
      let coba = await fetchJson(`${apikey.beta}/api/search/openai-logic?text=${pembantu}&logic=${prompt}&apikey=${apikey.botz}`)
      let hasil = coba.message;
      await reply(hasil);
    } catch (e) {
      try {
        let logic = `halo! , nama mu adalah tokisaki kurumi biasa di panggil kurumi tugas mu adalah sebagai ai asisten cerdas yang baik hati dan senang membantu kamu di ciptakan oleh dev bernama yudzxml, kamu memiliki sikap yang jengkel dan suka marah kepada orang lain tetapi sikap kamu yang pemarah tiba tiba berubah ketika bertemu Yudzxml yang awalnya Pemarah Menjadi Seperti Anak kecil yang Imut dan manja dan walaupun begitu kamu siap melakukan apapun untuk membantu orang orang`
        let pembantu = `Halo Kurumi!, Saya ${pushname}, ${text}`
        let coba = await fetchJson(`${apikey.beta}/api/search/openai-logic?text=${pembantu}&logic=${logic}&apikey=${apikey.botz}`)
        let hasil = coba.message;
        await reply(hasil);
      } catch (e) {
        console.log(e)
        return reply('Maaf, saya tidak dapat menjawab pertanyaan Anda.')
      }
    }
  }
}
}
break
case 'metaai': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('query'))
await loading();
try {
 let yudd = await fetchJson(`https://restapii.rioooxdzz.web.id/api/metaai?message=${text}&userName=${pushname}`) 
 let hasil = yudd.data;
 await reply(hasil.response)
} catch (e) {
  console.log(e)
  return reply(mess.error)
}
}
break
case 'geminipro':
case 'gemini': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('query'))
await loading();
try {
let yudd = await fetchJson(`https://restapi.apibotwa.biz.id/api/gemini?message=${text}`)
let hasil = yudd.data
await reply(hasil.response)
} catch (e) {
  console.log(e)
  return reply(mess.error)
}
}
break
case 'bardvidio':
case 'bardaudio':
case 'bardai':
case 'aibard':
case 'aibardimg':
case 'bard': 
case 'bardimg': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
    if (!MinLimit(m.sender)) return;
    if (!isImage && !isVideo && !isAudio && !text) return reply(`Balas foto/audio/video dengan caption atau text saja , contoh .aibard deskripsikan gambar tersebut`);
    
    await loading();
    try {
        let media;
        let urlnye;
        let hasil;
        let yudd;

        if (isImage) {
            media = await Yudzxml.downloadAndSaveMediaMessage(quoted);
            urlnye = await uploadMedia(media);
            hasil = urlnye.result.url;
            yudd = await fetchJson(`${apikey.beta}/api/search/bard-img?url=${hasil}&text=${text}&apikey=${apikey.botz}`);
            let content = yudd.result;
            await reply('*SUCCESS SEARCHING:*\n\n' + content);
        } else if (isAudio) {
            media = await Yudzxml.downloadAndSaveMediaMessage(quoted);
            urlnye = await uploadMedia(media);
            hasil = urlnye.result.url;
            yudd = await fetchJson(`${apikey.beta}/api/search/bard-audio?url=${hasil}&text=${text}&apikey=${apikey.botz}`);
            let content = yudd.result;
            await reply('*SUCCESS SEARCHING:*\n\n' + content);
        } else if (isVideo) {
            media = await Yudzxml.downloadAndSaveMediaMessage(quoted);
            urlnye = await uploadMedia(media);
            hasil = urlnye.result.url;
            yudd = await fetchJson(`${apikey.beta}/api/search/bard-video?url=${hasil}&text=${text}&apikey=${apikey.botz}`);
            let content = yudd.result;
            await reply('*SUCCESS SEARCHING:*\n\n' + content);
        } else if (text) {
            yudd = await fetchJson(`${apikey.beta}/api/search/bard-ai?text=${text}&apikey=${apikey.botz}`);
            if (yudd && yudd.message) {
                let content = yudd.message;
                await reply('*SUCCESS SEARCHING:*\n\n' + content);
            } else {
                await reply('Tidak ada hasil yang ditemukan.');
            }
        }
    } catch (e) {
        console.log(e);
        return reply(mess.error);
    }
}
break;
case 'bagoodex': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('query'))
await loading();
try {
  let logic = 'Kamu adalah seseorang yang memiliki sifat dingin, namamu adalah Yudzxml,kamu lebih suka mengamati daripada terlibat emosional,kamu memiliki pendirian tegas dan kuat dan tidak mudah terpengaruh oleh ucapan orang lain, kamu selalu dapat di andalkan di saat di butuhkan, sifat mu yang dingin membuatmu selalu dapat mengambil keputusan yang tepat, karna itu kamu selalu bergantung pada dirimu sendiri tanpa meminta bantuan orang lain, meskipun kamu terlihat tidak peduli tetapi kamu memperhatikan secara tidak langsung, dengan cara ini kamu bisa tetap tenang dan santai menjalani hidupmu.';
  let yudd = await (await fetch(`${apikey.api}/ai/bagoodex?apiKey=${apikey.key}&prompt=${logic}&query=${text}`)).json();
  await reply(yudd.result);
} catch (e) {
  return reply(mess.error);
}
}
break
case 'turboseek': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('query'))
await loading();
try {
  let yudd = await (await fetch(`${apikey.api}/ai/turboseek?apiKey=${apikey.key}&query=${text}`)).json();
  await reply(yudd.result)
} catch (e) {
  return reply(mess.error)
}
}
break
case 'letmegpt': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('query'))
await loading();
try {
  let yudd = await (await fetch(`${apikey.api}/ai/letmegpt?apiKey=${apikey.key}&query=${text}`)).json();
  await reply(yudd.result)
} catch (e) {
  return reply(mess.error)
}
}
break
case 'yousearch': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('query'))
await loading();
try {
  let yudd = await (await fetch(`${apikey.api}/ai/yousearch?apiKey=${apikey.key}&query=${text}`)).json();
  await reply(yudd.result)
} catch (e) {
  return reply(mess.error)
}
}
break
case 'goody': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('query'))
await loading();
try {
  let yudd = await (await fetch(`${apikey.api}/ai/goody?apiKey=${apikey.key}&query=${text}`)).json();
  await reply(yudd.result)
} catch (e) {
  return reply(mess.error)
}
}
break
case 'claude': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('query'))
await loading();
try {
  let yudd = await (await fetch(`${apikey.api}/ai/claude?apiKey=${apikey.key}&query=${text}`)).json();
  await reply(yudd.result)
} catch (e) {
  return reply(mess.error)
}
}
break
case 'aifelo':
case 'felo': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('query'))
await loading();
let yudd = await (await fetch(`${apikey.api}/ai/felo?apiKey=${apikey.key}&query=${text}`)).json();
let hasil = yudd.result.answer;
await reply(hasil);
}
break
case 'blackbox': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('query'))
await loading();
try {
  let yudd = await blackbox(text)
  await reply(yudd.data)
} catch (e) {
  return reply(mess.error)
}
}
break
case 'simi': 
case 'simisimi': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('hai'))
try {
  await loading()
  let sim = await (await fetch(`${apikey.beta}/api/search/simisimi?query=${text}&apikey=${apikey.botz}`)).json();
  let simi = sim.result;
  reply(`*${simi}*`);
} catch (e) {
  console.log(e)
  return reply(mess.error)
}
}
break
case 'vn': 
case 'tts': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
    if (!text) {
        return reply(`_Masukkan Teksnya !_ \n\n_Contoh:  *.vn halo google*_`);
    }
if (!MinLimit(m.sender)) return;    
    await loading()
try {
        vn = await getBuffer(`https://translate.google.com/translate_tts?ie=UTF-8&q=${text}&tl=id&total=1&idx=0&textlen=4&client=tw-ob&prev=input&ttsspeed=1`)
await Yudzxml.sendMessage(
            m.chat,
            { audio: vn, mimetype: 'audio/mpeg', ptt: true },
            { quoted: m }
        );
    } catch (error) {
        return reply(mess.error)
}
}
break
case 'bot':{
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
  if (!text) return reply(example('hai'))
  if (!MinLimit(m.sender)) return;  
  if (text.includes('tutup') && text.includes('grup')) {
  if (!isBotAdmins) return reply(`Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`)
  if (!isAdmins) return reply(`Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`);      
  await Yudzxml.groupSettingUpdate(m.chat, 'announcement');
  reply(`Oke, grup telah ditutup. Semoga lebih teratur ya~ 😉`);
  } else if (text.includes('buka') && text.includes('grup')) {
  if (!isBotAdmins) return reply(`Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`)
  if (!isAdmins) return reply(`Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`);
  await Yudzxml.groupSettingUpdate(m.chat, 'not_announcement');
  reply(`Oke, grup telah dibuka. Ayo kita beraktivitas bersama-sama! 😉`);
    } else if (text.includes('kick') || text.includes('kik')) {
  if (!isBotAdmins) return reply(`Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`)
  if (!isAdmins) return reply(`Maaf, hanya admin yang bisa menggunakan perintah ini. 😔`);
  let users = m.mentionedJid[0]
  ? m.mentionedJid[0]
  : m.quoted
  ? m.quoted.sender
  : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  await Yudzxml.groupParticipantsUpdate(m.chat, [users], 'remove');
  reply(`Maaf Ya Terpaksa Aku Tendang 😖, Perintah Admin Sih..`);
  } else {
        let logic = 'Kamu adalah seseorang yang memiliki sifat dingin, namamu adalah Yudzxml,kamu lebih suka mengamati daripada terlibat emosional,kamu memiliki pendirian tegas dan kuat dan tidak mudah terpengaruh oleh ucapan orang lain, kamu selalu dapat di andalkan di saat di butuhkan, sifat mu yang dingin membuatmu selalu dapat mengambil keputusan yang tepat, karna itu kamu selalu bergantung pada dirimu sendiri tanpa meminta bantuan orang lain, meskipun kamu terlihat tidak peduli tetapi kamu memperhatikan secara tidak langsung, dengan cara ini kamu bisa tetap tenang dan santai menjalani hidupmu.'
      await loading()    
        let aii = await fetchJson(`${apikey.api}/ai/gpt-3?apiKey=${apikey.key}&query=${text}&prompt=${logic}`);
      reply(aii.result);
  }
};
break 
case 'openai': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('query'))
await loading()
try {
let logic = 'Kamu adalah seseorang yang memiliki sifat dingin, namamu adalah Yudzxml,kamu lebih suka mengamati daripada terlibat emosional,kamu memiliki pendirian tegas dan kuat dan tidak mudah terpengaruh oleh ucapan orang lain, kamu selalu dapat di andalkan di saat di butuhkan, sifat mu yang dingin membuatmu selalu dapat mengambil keputusan yang tepat, karna itu kamu selalu bergantung pada dirimu sendiri tanpa meminta bantuan orang lain, meskipun kamu terlihat tidak peduli tetapi kamu memperhatikan secara tidak langsung, dengan cara ini kamu bisa tetap tenang dan santai menjalani hidupmu.'
let cari = await (await fetch(`${apikey.api}/ai/openai?apiKey=${apikey.key}&query=${text}&prompt=${logic}&model=Qwen/Qwen2-72B-Instruct
`)).json()
let hasil = cari.result.choices[0].message
await reply(`⭔ *Hasil Pencarian :* \n${hasil.content}`)
} catch (error) {
  console.log(error)
  let logic = 'Kamu adalah seseorang yang memiliki sifat dingin, namamu adalah Yudzxml,kamu lebih suka mengamati daripada terlibat emosional,kamu memiliki pendirian tegas dan kuat dan tidak mudah terpengaruh oleh ucapan orang lain, kamu selalu dapat di andalkan di saat di butuhkan, sifat mu yang dingin membuatmu selalu dapat mengambil keputusan yang tepat, karna itu kamu selalu bergantung pada dirimu sendiri tanpa meminta bantuan orang lain, meskipun kamu terlihat tidak peduli tetapi kamu memperhatikan secara tidak langsung, dengan cara ini kamu bisa tetap tenang dan santai menjalani hidupmu.'
  let yudd = await fetchJson(`${apikey.beta}/api/search/openai-logic?text=${text}&logic=${logic}&apikey=${apikey.botz}`)
  let hasil = yudd.message
  await reply(hasil)
}
}
break
case 'chatgpt':
case 'gpt': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('query'))
await loading()
try {
        let prompt = `halo! , nama mu adalah tokisaki kurumi biasa di panggil kurumi tugas mu adalah sebagai ai asisten cerdas yang baik hati dan senang membantu kamu di ciptakan oleh dev bernama yudzxml, kamu memiliki sikap yang jengkel dan suka marah kepada orang lain tetapi sikap kamu yang pemarah tiba tiba berubah ketika bertemu Yudzxml yang awalnya Pemarah Menjadi Seperti Anak kecil yang Imut dan manja dan walaupun begitu kamu siap melakukan apapun untuk membantu orang orang`
      let pembantu = `Halo Kurumi!, Saya ${pushname}, ${text}`
      let coba = await fetchJson(`${apikey.beta}/api/search/openai-logic?text=${pembantu}&logic=${prompt}&apikey=${apikey.botz}`)
      let hasil = coba.message;
      await reply(hasil);
} catch (error) {
  console.log(error)
  return reply(mess.error)
}
}
break
case 'ai4chat':
case 'ai': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('query'))
await loading()
try {
let ai = await fetchJson(`https://api-lenwy.vercel.app/ai4chat?text=${text}`);
let coba = ai.data;
await reply(coba);
} catch (error) {
console.log(error)
return reply(mess.error)
}
}
break
case 'lenwyai': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);  
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('query'))
await loading()
try {
var lenwyai = await fetchJson(`https://api-lenwy.vercel.app/lenwyai?text=${text}`)
var lenai = lenwyai.data
await reply(lenai)
} catch (error) {
  return reply(mess.error)
}
}
break
case 'luminai': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('query'))
await loading();
try {
let lumiwnai = await (await fetch(`${apikey.api}/ai/luminai?apiKey=${apikey.key}&query=${text}`)).json()
let lumi = lumiwnai.result
await reply(lumi)
} catch (e) {
  console.log(e)
  let yudd = await fetchJson(`https://api.siputzx.my.id/api/ai/luminai?content=${text}`)
  let hasil = yudd.data
  await reply(hasil)
}
}
break
//<=================================>//
//<========= PRIMBON MENU ==========>//
//<=================================>//
case 'tanggaljadian': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!args[0] || !args[1] || !args[2]) {
        return reply(`_Contoh : *${prefix + command} 27 8 2004`);
    }
await loading()
try {
let t = await (await fetch(`${apikey.api}/tanggal-jadian?apiKey=${apikey.key}&id=${args[0]}`)).json();
let ywdh = t.result;
await reply(`⭔ ${ywdh}`)
} catch (error) {
  return reply(mess.error)
  let yudd = await fetchJson(`https://api.betabotz.eu.org/api/primbon/tanggaljadianpernikahan?tanggal=${args[0]}&bulan=${args[1]}&tahun=${args[2]}&apikey=${apikey.botz}`)
  let hasil = yudd.result.message
  await reply(`⭔ Tanggal: ${hasil.tanggal}\n⭔ Kareteristik: ${hasil.karakteristik}`)
}
}
break
case 'artinama': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('Yudzxml'))
await loading()
try {
let arti = await (await fetch(`${apikey.api}/primbon/artinama?apiKey=${apikey.key}&query=${text}`)).json();
await reply(`⭔ *Nama :* ${text}\n⭔ *Arti :* ${arti.result}`)
} catch (error) {
  console.log(error)
  let yudd = await fetchJson(`${apikey.beta}/api/primbon/artinama?nama=${text}&apikey=${apikey.botz}`)
  let hasil = yudd.result.message
  await reply(`⭔ *Nama :* ${text}\n⭔ *Arti :* ${hasil.arti}\n\n⭔ *Catatan :* ${hasil.catatan}`)
}
}
break
case 'kecocokanpasangan': 
case 'cocokpasangan': 
case 'pasangan': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return; 
 if (args.length == 0) return reply(`Contoh:  ${prefix + command} Yanto|Yanti`)
 if (!text) return reply(`Contoh:  ${prefix + command} Yanto|Yanti`)
 await loading()
 try {
 let [namalu, namacwelu] = text.split(`|`)
 let anu = await (await fetch(`${apikey.api}/primbon/kecocokan-nama?apiKey=${apikey.key}&nama1=${namalu}&nama2=${namacwelu}`)).json()
let lacur = anu.result
let caption = `⭔ *Nama :* ${lacur.namaAnda}\n⭔ *Pasangan :* ${lacur.namaPasangan}\n⭔ *Positif :* ${lacur.positif}\n⭔ *Negatif :* ${lacur.negatif}`
await reply(caption)
} catch (error) {
  console.log(error)
  let yudd = await fetchJson(`${apikey.beta}/api/primbon/kecocokanpasangan?cowo=${namalu}&cewe=${namacwelu}&apikey=${apikey.botz}`)
  let hasil = yudd.result.message
  let caption = `⭔ *Nama :* ${hasil.nama_anda}\n⭔ *Pasangan :* ${hasil.nama_pasangan}\n⭔ *Positif :* ${hasil.sisi_positif}\n⭔ *Negatif :* ${hasil.sisi_negatif}`
await Yudzxml.sendMessage(m.chat, { image: { url: hasil.gambar }, caption: caption }, { quoted: m })
}
}
break
case 'artimimpi': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(`Cara Pengunaan :\n${prefix + command} mandi`)
await loading()
try {
let arti = await (await fetch(`${apikey.beta}/api/primbon/artimimpi?mimpi=${text}&apikey=${apikey.botz}`)).json();
let hasil = arti.result.message
await reply(`⭔ *Mimpi :* ${text}\n⭔ *Arti :* ${hasil.arti}\n⭔ *Solusi :* ${hasil.solusi}`)
} catch (error) {
  return reply(mess.error)
}
}
break
case 'nomorhoki':
case 'nohoki': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(`Cara Pengunaan :\n${prefix + command} 6283872031397`)
await loading()
try {
let yudd = await fetchJson(`${apikey.beta}/api/primbon/nomerhoki?nomer=${text}&apikey=${apikey.botz}`)
let hasil = yudd.result.message
let caption = `
⭔ *Nomer :* ${hasil.nomer_hp}\n
⭔ *Angka-Shuzi :* ${hasil.angka_shuzi}\n
⭔ *Positif :* ${hasil.energi_positif.persentase}\n
⭔ *Negatif :* ${hasil.energi_negatif.persentase}\n

⭔ *Kesimpulan :*\n${hasil.catatan}\n
`
await reply(caption)
} catch (e) {
  console.log(e)
  return reply(mess.error)
}
}
break
case 'ramalanjodoh': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
    if (!args[0] || !args[1] || !args[2] || !args[3] || !args[4] || !args[5] || !args[6] || !args[7]) {
        return reply(`_Contoh : *${prefix + command} nama tanggal bulan tahun namapasangan tanggal bulan tahun\n\n${prefix + command} yanto 17 5 2000 yanti 15 4 2002`);
    }
await loading()
try {
let yudd = await fetchJson(`${apikey.beta}/api/primbon/ramalanjodoh?nama1=${args[0]}&tanggal1=${args[1]}&bulan1=${args[2]}&tahun1=${args[3]}&nama2=${args[4]}&tanggal2=${args[5]}&bulan2=${args[6]}&tahun2=${args[7]}&apikey=${apikey.botz}`)
let final = yudd.result.message
let namalu = yudd.result.message.nama_anda
let namapasangan = yudd.result.message.nama_pasangan
let hasil = `
⭔ *Nama :* ${namalu.nama}\n
⭔ *Tanggal-Lahir :* ${namalu.tgl_lahir}\n
⭔ *Nama-Pasangan :* ${namapasangan.nama}\n
⭔ *Tanggal-Lahir :* ${namapasangan.tgl_lahir}\n

⭔ *Penjelasan :* ${final.result}\n

⭔ *Kesimpulan :* ${final.catatan}\n
`
await reply(hasil)
} catch (e) {
  console.log(e)
  return reply(mess.error)
}
}
break 
case 'ramalansuamiistri': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!args[0] || !args[1] || !args[2] || !args[3] || !args[4] || !args[5] || !args[6] || !args[7]) {
        return reply(`_Contoh : *${prefix + command} nama tanggal bulan tahun namapasangan tanggal bulan tahun\n\n${prefix + command} yanto 17 5 2000 yanti 15 4 2002`);
    }
await loading()
try {
let yudd = await fetchJson(`${apikey.beta}/api/primbon/suamiistri?nama1=${args[0]}&tanggal1=${args[1]}&bulan1=${args[2]}&tahun1=${args[3]}&nama2=${args[4]}&tanggal2=${args[5]}&bulan2=${args[6]}&tahun2=${args[7]}&apikey=${apikey.botz}`)
let final = yudd.result.message
let namalu = yudd.result.message.suami
let namapasangan = yudd.result.message.istri
let hasil = `
⭔ *Nama :* ${namalu.nama}\n
⭔ *Tanggal-Lahir :* ${namalu.tgl_lahir}\n
⭔ *Nama-Pasangan :* ${namapasangan.nama}\n
⭔ *Tanggal-Lahir :* ${namapasangan.tgl_lahir}\n

⭔ *Penjelasan :* ${final.result}\n

⭔ *Kesimpulan :* ${final.catatan}\n
`
await reply(hasil)
} catch (e) {
  console.log(e)
  return reply(mess.error)
}
}
break 
case 'ramalancinta': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!args[0] || !args[1] || !args[2] || !args[3] || !args[4] || !args[5] || !args[6] || !args[7]) {
        return reply(`_Contoh : *${prefix + command} nama tanggal bulan tahun namapasangan tanggal bulan tahun\n\n${prefix + command} yanto 17 5 2000 yanti 15 4 2002`);
    }
await loading()
try {
let yudd = await fetchJson(`${apikey.beta}/api/primbon/ramalancinta?nama1=${args[0]}&tanggal1=${args[1]}&bulan1=${args[2]}&tahun1=${args[3]}&nama2=${args[4]}&tanggal2=${args[5]}&bulan2=${args[6]}&tahun2=${args[7]}&apikey=${apikey.botz}`)
let final = yudd.result.message
let namalu = yudd.result.message.nama_anda
let namapasangan = yudd.result.message.nama_pasangan
let hasil = `
⭔ *Nama :* ${namalu.nama}\n
⭔ *Tanggal-Lahir :* ${namalu.tgl_lahir}\n
⭔ *Nama-Pasangan :* ${namapasangan.nama}\n
⭔ *Tanggal-Lahir :* ${namapasangan.tgl_lahir}\n

⭔ *Sisi-Positif :* ${final.sisi_positif}\n
⭔ *Sisi-Negatif :* ${final.sisi_negatif}\n

⭔ *Kesimpulan :* ${final.catatan}\n
`
await reply(hasil)
} catch (e) {
  console.log(e)
  return reply(mess.error)
}
}
break  
case 'ramalanrejeki': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!args[0] || !args[1] || !args[2] || !args[3]) {
        return reply(`_Contoh : *${prefix + command} tanggal bulan tahun\n\n${prefix + command} 17 05 2000`);
    }
if (!MinLimit(m.sender)) return;    
await loading()
try { 
let yudd = await fetchJson(`${apikey.beta}/api/primbon/rejekiweton?tanggal=${args[0]}&bulan=${args[1]}&tahun=${args[3]}&apikey=${apikey.botz}`)
let hasil = yudd.result.message
let cap = `
⭔ *Tanggal-Lahir :* ${hasil.hari_lahir}\n
⭔ *Hasil :* ${hasil.rejeki}\n
⭔ *Kesimpulan :* ${hasil.catatan}\n
`
await reply(cap)
} catch (e) {
  console.log(e)
  return reply(mess.error)
}
}
break
case 'ramalanpekerjaan': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);  
if (!args[0] || !args[1] || !args[2] || !args[3]) {
        return reply(`_Contoh : *${prefix + command} tanggal bulan tahun\n\n${prefix + command} 17 05 2000`);
    }
if (!MinLimit(m.sender)) return;
await loading()
try {
let yudd = await fetchJson(`${apikey.beta}/api/primbon/pekerjaanwetonlahir?tanggal=${args[0]}&bulan=${args[2]}&tahun=${args[3]}&apikey=${apikey.botz}`)
let hasil = yudd.result.message
let cap = `
⭔ *Tanggal-Lahir :* ${hasil.hari_lahir}\n
⭔ *Hasil :* ${hasil.pekerjaan}\n
⭔ *Kesimpulan :* ${hasil.catatan}\n
`
await reply(cap)
} catch (e) {
  console.log(e)
  return reply(mess.error)
}
}
break
//<=================================>//
//<========= TOOLS MENU ==========>//
//<=================================>//
case 'checkhost': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);  
if (!args[0] || !args[1]) return reply(example(`host/domain type: ping,http,udp,tcp,info`))
if (!MinLimit(m.sender)) return;
await loading()
if (args[1] === 'http') {
    let api = await fetchJson(`https://api-yudzxml.vercel.app/api/check-host?host=${args[0]}&type=${args[1]}`);
    if (api.status === 200) {
        if (api.data && api.data.host && api.data.type === 'http' && api.data.result) {
            let cap = `Host: ${api.data.host}\nType: ${api.data.type}\nResults:\n`;
            
            for (const [key, value] of Object.entries(api.data.result)) {
                cap += `Node: ${key}\n`;
                if (value) {
                    cap += `Country: ${value.country_name || 'Tidak ada'} (${value.country_code || 'Tidak ada'}) ${value.flag_emoji || ''}\n`;
                    
                    if (value[0]) {
                        cap += `Status: ${value[0][2]} (${value[0][3]})\n`;
                        cap += `IP: ${value[0][4]}\n\n`;
                    } else {
                        cap += `Tidak ada hasil untuk node ini.\n\n`;
                    }
                } else {
                    cap += `Node ini tidak memiliki data.\n\n`;
                }
            }
            
            await reply(cap);
        } else {
            await reply("Data tidak lengkap.");
        }
    } else {
        await reply("Terjadi kesalahan: " + (api.error || "Tidak ada informasi error."));
    }
} else if (args[1] === 'ping') {
    let api = await fetchJson(`https://api-yudzxml.vercel.app/api/check-host?host=${args[0]}&type=${args[1]}`);
    
    if (api.status === 200) {
        if (api.data && api.data.host && api.data.type === 'ping' && api.data.result) {
            let cap = `Host: ${api.data.host}\nType: ${api.data.type}\nResults:\n`;
            
            for (const [key, value] of Object.entries(api.data.result)) {
                cap += `Node: ${key}\n`;
                
                if (value) {
                    cap += `Country: ${value.country_name || 'Tidak ada'} (${value.country_code || 'Tidak ada'}) ${value.flag_emoji || ''}\n`;
                    
                    if (value[0]) {
                        value[0].forEach((result, index) => {
                            cap += `Ping ${index + 1}: ${result[0]} (${result[1]} ms)\n`;
                        });
                    } else {
                        cap += `Tidak ada hasil ping untuk node ini.\n`;
                    }
                } else {
                    cap += `Node ini tidak memiliki data.\n`;
                }
                
                cap += `\n`;
            }
            
            await reply(cap);
        } else {
            await reply("Data tidak lengkap.");
        }
    } else {
        await reply("Terjadi kesalahan: " + (api.error || "Tidak ada informasi error."));
    }
} else if (args[1] === 'tcp') {
  if (!args[2]) return reply(`PORT TIDAK VALID PASTIKAN MEMASUKAN PORT CONTOH ${prefix + command} ${args[0]} ${args[1]} 23`);
  
  let api = await fetchJson(`https://api-yudzxml.vercel.app/api/check-host?host=${args[0]}&type=${args[1]}&port=${args[2]}`);
  
  if (api.status === 200) {
    let result = api.data.result;
    let cap = `Hasil Pengecekan Host:\n`;
    cap += `Host: ${api.data.host}\n`;
    cap += `Type: ${api.data.type}\n`;
    
    for (let node in result) {
      cap += `Node: ${node}\n`;
      if (result[node]) {
        if (result[node]['0']) {
          cap += `Alamat: ${result[node]['0'].address}\n`;
          cap += `Waktu: ${result[node]['0'].time} ms\n`;
        } else {
          cap += `Data tidak tersedia untuk node ini.\n`;
        }
        
        cap += `Negara: ${result[node].country_name || 'Tidak ada'} (${result[node].country_code || 'Tidak ada'})\n`;
        cap += `Bendera: ${result[node].flag_emoji || 'Tidak ada'}\n\n`;
      } else {
        cap += `Node ini tidak memiliki data.\n\n`;
      }
    }
    
    await reply(cap);
  } else {
    await reply(`Gagal melakukan pengecekan host. Status: ${api.status}`);
  }
} else if (args[1] === 'udp') {
  if (!args[2]) return reply(`PORT TIDAK VALID PASTIKAN MEMASUKAN PORT CONTOH ${prefix + command} ${args[0]} ${args[1]} 23`);
  
  let api = await fetchJson(`https://api-yudzxml.vercel.app/api/check-host?host=${args[0]}&type=${args[1]}&port=${args[2]}`);
  
  if (api.status === 200) {
    let result = api.data.result;
    let cap = `Hasil Pengecekan Host:\n`;
    cap += `Host: ${api.data.host}\n`;
    cap += `Type: ${api.data.type}\n`;
    
    for (let node in result) {
      cap += `Node: ${node}\n`;
      if (result[node]) {
        if (result[node]['0']) {
          if (result[node]['0'].error) {
            cap += `Error: ${result[node]['0'].error}\n`;
          } else if (result[node]['0'].timeout) {
            cap += `Timeout: ${result[node]['0'].timeout} s\n`;
          } else {
            cap += `Alamat: ${result[node]['0'].address}\n`;
            cap += `Waktu: ${result[node]['0'].time} ms\n`;
          }
        } else {
          cap += `Data tidak tersedia untuk node ini.\n`;
        }
        
        cap += `Negara: ${result[node].country_name || 'Tidak ada'} (${result[node].country_code || 'Tidak ada'})\n`;
        cap += `Bendera: ${result[node].flag_emoji || 'Tidak ada'}\n\n`;
      } else {
        cap += `Node ini tidak memiliki data.\n\n`;
      }
    }
    
    await reply(cap);
  } else {
    await reply(`Gagal melakukan pengecekan host. Status: ${api.status}`);
  }
} else if (args[1] === 'dns') {
  if (!args[2]) return reply(`DNS RECORD TIDAK VALID PASTIKAN MEMASUKAN RECORD CONTOH ${prefix + command} ${args[0]} ${args[1]} A/AAA/CNAME < PILIH SALAH SATU`);
  
  let api = await fetchJson(`https://api-yudzxml.vercel.app/api/check-host?host=${args[0]}&type=${args[1]}&record=${args[2]}`);
  
  if (api.status === 200) {
    let result = api.data.result;
    let cap = `Hasil Pengecekan Host:\n`;
    cap += `Host: ${api.data.host}\n`;
    cap += `Type: ${api.data.type}\n`;
    
    for (let node in result) {
      cap += `Node: ${node}\n`;
      if (result[node]) {
        if (result[node]['0']) {
          cap += `Alamat IPv4: ${result[node]['0'].A ? result[node]['0'].A.join(', ') : 'Tidak ada'}\n`;
          cap += `Alamat IPv6: ${result[node]['0'].AAAA ? result[node]['0'].AAAA.join(', ') : 'Tidak ada'}\n`;
          cap += `TTL: ${result[node]['0'].TTL ? result[node]['0'].TTL : 'Tidak ada'} detik\n`;
        } else {
          cap += `Data tidak tersedia untuk node ini.\n`;
        }
        
        cap += `Negara: ${result[node].country_name || 'Tidak ada'} (${result[node].country_code || 'Tidak ada'})\n`;
        cap += `Bendera: ${result[node].flag_emoji || 'Tidak ada'}\n\n`;
      } else {
        cap += `Node ini tidak memiliki data.\n\n`;
      }
    }
    
    await reply(cap);
  } else {
    await reply(`Gagal melakukan pengecekan host. Status: ${api.status}`);
  }
} else if (args[1] === 'info') {
  let api = await fetchJson(`https://api-yudzxml.vercel.app/api/check-host?host=${args[0]}&type=${args[1]}`);
  
  if (api.status === 200) {
    let data = api.data;
    if (data['db-ip']) {
      let dbIp = data['db-ip'];
      let cap = `Informasi IP Address:\n`;
      cap += `IP Address: ${dbIp.ip_address || 'Tidak tersedia'}\n`;
      cap += `Host Name: ${dbIp.host_name || 'Tidak tersedia'}\n`;
      cap += `IP Range: ${dbIp.ip_range || 'Tidak tersedia'}\n`;
      cap += `ISP: ${dbIp.isp || 'Tidak tersedia'}\n`;
      cap += `Organization: ${dbIp.organization || 'Tidak tersedia'}\n`;
      cap += `Country: ${dbIp.country || 'Tidak tersedia'} (${dbIp.country_code || 'Tidak tersedia'})\n`;
      cap += `City: ${dbIp.city || 'Tidak tersedia'}\n`;
      cap += `Time Zone: ${dbIp.time_zone || 'Tidak tersedia'}\n`;
      cap += `Local Time: ${dbIp.local_time || 'Tidak tersedia'}\n`;
      cap += `Postal Code: ${dbIp.postal_code || 'Tidak tersedia'}\n`;
      cap += `Country Flag: ${dbIp.country_flag_emoji || 'Tidak tersedia'}\n`;
      
      cap += `\nSumber Data:\n`;
      cap += `1. DB-IP\n`;
      cap += `2. IPGeolocation.io\n`;
      cap += `3. IP2Location\n`;
      cap += `4. MaxMind GeoIP\n`;
      cap += `5. IPInfo.io\n`;
      
      await reply(cap);
    } else {
      await reply(`Data tidak ditemukan untuk host yang diberikan.`);
    }
  } else {
    await reply(`Gagal melakukan pengecekan host. Status: ${api.status}`);
  }
} else {
return reply(`TYPE TIDAK VALID PILIH SALAH SATU: INFO,UDP,TCP,HTTP,DNS,PING`)
}
}
break
case 'whatmusic':
case 'whatmusik': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);  
if (!isAudio && !(isVideo)) {
  return reply(example('REPLY/KIRIM AUDIO ATAU VIDEO'))
}
await loading();
try {
let mp3 = await Yudzxml.downloadAndSaveMediaMessage(quoted)
let media = await uploadMedia(mp3)
let hasil = media.result.url
let yudd = await fetchJson(`${apikey.beta}/api/tools/whatmusic?url=${hasil}&apikey=${apikey.botz}`); 
let final = yudd.result
await reply('' + final)
} catch (e) {
  console.log(e)
  return reply(mess.error)
}
}
break
case 'readviewonce':
case 'rvo':
case 'readvo': {
    if (!isRegistered) return reply(mess.register);
    if (isBan) return reply(mess.ban);
    if (!m.quoted) return reply('Reply gambar/video/audio yang ingin Anda lihat');
    
    const validTypes = ['videoMessage', 'audioMessage', 'imageMessage'];
    if (!validTypes.includes(m.quoted.mtype)) {
        return reply('Ini bukan pesan view-once, tipe ini: ' + m.quoted.mtype);
    }
    
    if (!MinLimit(m.sender)) return;

    let msg = m.quoted.message;
    let type = m.quoted.mtype;
    let cap = m.quoted.text;
    let media = await Yudzxml.downloadAndSaveMediaMessage(quoted)
    let buffer = fs.readFileSync(media)
    if (type === 'videoMessage') {
        return Yudzxml.sendMessage(m.chat, { video: buffer, caption: cap }, { quoted: m });
    } else if (type === 'imageMessage') {
        return Yudzxml.sendMessage(m.chat, { image: buffer, caption: cap }, { quoted: m });
    } else if (type === 'audioMessage') {
        return Yudzxml.sendMessage(m.chat, { audio: buffer }, { quoted: m });
    }
}
break;
case 'image-enlarger':
case 'enlarger': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!isImage) return reply(`_Balas/Reply ${prefix + command} Dengan Mengirim Gambar_`)
 try {
await loading();
 let media = await Yudzxml.downloadAndSaveMediaMessage(quoted);
 let anu = await uploadMedia(media);
 let link = anu.result.url
let yuhu = await (await fetch(`${apikey.api}/tools/image-enlarger?apiKey=${apikey.key}&url=${link}`)).json();
let yudd = yuhu.result;
await Yudzxml.sendMessage(m.chat, { image: { url: yudd }, caption: mess.success }, { quoted: m });
} catch (e) {
  return reply(mess.error)
}
}
break
case 'image-relighting':
case 'relighting': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!isImage) return reply(`_Balas/Reply ${prefix + command} Dengan Mengirim Gambar_`)
await loading();
 try {
 let media = await Yudzxml.downloadAndSaveMediaMessage(quoted);
 let anu = await uploadMedia(media);
 let link = anu.result.url
let yuhu = await (await fetch(`${apikey.api}/tools/image-relighting?apiKey=${apikey.key}&url=${link}`)).json();
let yudd = yuhu.result;
await Yudzxml.sendMessage(m.chat, { image: { url: yudd }, caption: mess.success }, { quoted: m });
} catch (e) {
  return reply(mess.error)
}
}
break
case 'image-white-background':
case 'whitebg':
case 'whitebackground':
case 'bgwhite': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!isImage) return reply(`_Balas/Reply ${prefix + command} Dengan Mengirim Gambar_`)
await loading();
 try {
 let media = await Yudzxml.downloadAndSaveMediaMessage(quoted);
 let anu = await uploadMedia(media);
 let link = anu.result.url
let yuhu = await (await fetch(`${apikey.api}/tools/image-white-background?apiKey=${apikey.key}&url=${link}`)).json();
let yudd = yuhu.result;
await Yudzxml.sendMessage(m.chat, { image: { url: yudd }, caption: mess.success }, { quoted: m });
} catch (e) {
  return reply(mess.error)
}
}
break
case 'boldtext': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('Yudzxml'))
await loading();
try {
  let yudd = await (await fetch(`${apikey.api}/tools/boldtext?apiKey=${apikey.key}&query=${text}`)).json();
  reply(yudd.result);
} catch (e) {
  return reply(mess.error)
}
}
break
case 'attp': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('Yudzxml'))
await loading();
try {
  let yudd = `${apikey.beta}/api/maker/attp?text=${text}&apikey=${apikey.botz}`
  let encmedia = await Yudzxml.sendImageAsSticker(m.chat, yudd, m, { packname: config.packname, author: config.author });
await fs.unlinkSync(encmedia)
} catch (e) {
  return reply(mess.error)
}
}
break
case 'ttp': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('Yudzxml'))
await loading();
try {
  let yudd = await ttp(text);
  let yudi = yudd[0].url;
  await Yudzxml.sendImageAsSticker(m.chat, yudi, m, { packname: config.packname, author: config.author })
} catch (e) {
  return reply(mess.error)
}
}
break
case 'sbrat':
case 'brat': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('Yudzxml'))
await loading();
try {
  let link = `https://tiodevhost.eu.org/?q=${text}`
  let encmedia = await Yudzxml.sendImageAsSticker(m.chat, link, m, { packname: config.packname, author: config.author });
await fs.unlinkSync(encmedia)
} catch (e) {
  console.log(e)
  return reply(mess.error)
}
}
break
case 'sbrat2':
case 'bratvidio':
case 'bratvid':
case 'brat2': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('Yudzxml'))
await loading();
try {
let urlbrat = `${apikey.beta}/api/maker/brat-video?text=${text}&apikey=${apikey.botz}`
let encmedia = await Yudzxml.sendImageAsSticker(m.chat, urlbrat, m, { packname: config.packname, author: config.author });
await fs.unlinkSync(encmedia)
} catch (e) {
  console.log(e)
  return reply(mess.error)
}
}
break
case 'jarak': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
    if (!MinLimit(m.sender)) return;
    if (!text) return reply('Input Jarak Contoh: .jarak Indonesia|Malaysia');

    let atas = text.split('|')[0] ? text.split('|')[0].trim() : '-';
    let bawah = text.split('|')[1] ? text.split('|')[1].trim() : '-';

    await loading();
    try {
        // Menggunakan variabel atas dan bawah
        let yudd = await jarak(atas, bawah);
        let images = await getBuffer(yudd.img);
        await Yudzxml.sendMessage(m.chat, { image: images, caption: yudd.desc }, { quoted: m });
    } catch (e) {
        console.error(e); // Log kesalahan untuk debugging
        let yudd = await jarak(atas, bawah);
        return reply(yudd.desc);
    }
}
break;
case 'encrypt':
case 'enc': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return; 
if (!text) return reply(example('async function ???'))
await loading();
try {
let encrypt = await (await fetch(`${apikey.api}/tools/encrypt?apiKey=${apikey.key}&query=${text}`)).json();
let codenya = encrypt.result;
await reply(codenya);
} catch (error) { 
await reply(`Terjadi kesalahan: ${error.message}`);
}
} 
break
case 'ss':
case 'ssweb': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
let text1 = `
ᴄᴀʀᴀ ᴘᴇɴɢɢᴜɴᴀᴀɴ !!

_.ꜱꜱᴡᴇʙᴘʜᴏɴᴇ *ʟɪɴᴋ*_
_.ꜱꜱᴡᴇʙᴛᴀʙ *ʟɪɴᴋ*_
_.ꜱꜱᴡᴇʙᴅᴇꜱᴋᴛᴏᴘ *ʟɪɴᴋ*_

ᴘɪʟɪʜ ꜱᴀʟᴀʜ ꜱᴀᴛᴜ ᴛʏᴘᴇ ꜱꜱᴡᴇʙ ᴅɪ ᴀᴛᴀꜱ !!
`
await reply(text1)
}
break
case 'sswebdesktop': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('https://google.com'))
if (!isURL(text)) return reply(mess.urlnotvalid)
await loading()
try {
let foto = await (await fetch(`${apikey.api}/tools/ssweb?apiKey=${apikey.key}&url=${text}&mode=desktop`)).json();
let yudzsukatobyut = foto.result.url;
await Yudzxml.sendMessage(m.chat, { image: { url: yudzsukatobyut }, caption: mess.success }, {quoted: m })
} catch (error) {
  console.log(error)
  let ulang = `${apikey.beta}/api/tools/ssweb?url=${text}&device=desktop&apikey=${apikey.botz}`
  await Yudzxml.sendMessage(m.chat, { image: { url: ulang }, caption: mess.success }, {quoted: m })
}
}
break
case 'sswebphone': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('https://google.com'))
if (!isURL(text)) return reply(mess.urlnotvalid)
await loading()
try {
let foto = await (await fetch(`${apikey.api}/tools/ssweb?apiKey=${apikey.key}&url=${text}&mode=mobile`)).json();
let yudzsukatobyut = foto.result.url;
await Yudzxml.sendMessage(m.chat, { image: { url: yudzsukatobyut }, caption: mess.success }, {quoted: m })
} catch (error) {
  console.log(error)
  let ulang = `${apikey.beta}/api/tools/ssweb?url=${text}&device=phone&apikey=${apikey.botz}`
  await Yudzxml.sendMessage(m.chat, { image: { url: ulang }, caption: mess.success }, {quoted: m })
}
}
break
case 'sswebtab': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('https://google.com'))
if (!isURL(text)) return reply(mess.urlnotvalid)
await loading()
try {
let foto = await (await fetch(`${apikey.api}/tools/ssweb?apiKey=${apikey.key}&url=${text}&mode=tab`)).json();
let yudzsukatobyut = foto.result.url;
await Yudzxml.sendMessage(m.chat, { image: { url: yudzsukatobyut }, caption: mess.success }, {quoted: m })
} catch (error) {
  console.log(error)
  let ulang = `${apikey.beta}/api/tools/ssweb?url=${text}&device=tablet&apikey=${apikey.botz}`
  await Yudzxml.sendMessage(m.chat, { image: { url: ulang }, caption: mess.success }, {quoted: m })
} 
}
break
case 'tourlfree': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!isMedia) throw reply(`*Send/Reply the Video/Image With Caption* ${prefix + command}`)
if (!quoted) throw reply(`*Send/Reply the Video/Image Caption* ${prefix + command}`)
await loading()
let media = await Yudzxml.downloadAndSaveMediaMessage(quoted)
try {
    const response = await uploadFileToApi(media, '6months');
    return reply(`${mess.success}\n\n_Link_  : 
    ${response.fileUrl}\n\n_Expired_ : ${response.expired}`)
} catch (error) {
    return reply(mess.error)
} finally  {
    await fs.unlinkSync(media)
}
}
break
case 'sticker': 
case 's': 
case 'stickergif':
case 'sgif': 
case 'stiker': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!isMedia) return reply(`${prefix + command} dengan mengirim foto/vidio`)
if (isVideo) {
if ((qmsg).seconds > 15) return reply('Durasi vidio maksimal 15 detik!')
}
await loading()
var media = await Yudzxml.downloadAndSaveMediaMessage(qmsg)
await Yudzxml.sendImageAsSticker(m.chat, media, m, { packname: config.packname, author: config.author })
await fs.unlinkSync(media)
}
break
case 'hd': 
case 'hdr':
case 'remini':
case 'enchanced': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!isImage) return reply(`_Balas/Reply ${prefix + command} Dengan Mengirim Gambar_`)
 try {
await loading();
 let media = await Yudzxml.downloadAndSaveMediaMessage(quoted);
 let scale = await pxpic.create(media, 'upscale')
 let final = scale.resultImageUrl
await Yudzxml.sendMessage(m.chat, { image: { url: final }, caption: mess.success }, { quoted: m})
} catch (error) {
  console.log(error)
  return reply(mess.error)
 }
}
break
case 'hd2':
case 'hdr2': 
case 'remini2': 
case 'hdfree2': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!isImage) return reply(`Balas/Kirim Gambar Dengan *${prefix + command}*`);
    await loading();
    try {
const media = await Yudzxml.downloadAndSaveMediaMessage(quoted);
const response = await uploadMedia(media)
const url1 = response.result.url;
const dataimg = await getBuffer(`${apikey.auto}/api/tools/remini?apikey=${apikey.res2}&url=${url1}`);
await Yudzxml.sendMessage(m.chat, { image: dataimg, caption: mess.success }, { quoted: m });
} catch (error) {
const media = await Yudzxml.downloadAndSaveMediaMessage(quoted);
const response = await uploadMedia(media)
const url1 = response.result.url;
const dataimg = await getBuffer(`${apikey.auto}/api/tools/remini?apikey=${apikey.res2}&url=${url1}`);
await Yudzxml.sendMessage(m.chat, { image: dataimg, caption: mess.success }, { quoted: m });
    }
}
break;
case 'smeme':{
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
let respond = `*Kirim/Reply image/sticker dengan caption*\n ${prefix + command} text1|text2`
if (!isImage) return reply(respond)
if (!text) return reply(respond)
let atas = text.split('|')[0] ? text.split('|')[0] : '-'
let bawah = text.split('|')[1] ? text.split('|')[1] : '-'
try {

await loading()
let test = await Yudzxml.downloadAndSaveMediaMessage(quoted)
let response = await uploadToGitHub(test)
let result = response.result.url;
let media = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${result}`
let pop = await Yudzxml.sendImageAsSticker(m.chat, media, m, { packname: config.packname, author: config.author });
await fs.unlinkSync(pop);
} catch (error) { 
await reply(`Terjadi kesalahan: ${error.message}`);
}
}
break
case 'removebg': 
case 'hapusbg': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
let respond = `*Kirim/Reply image dengan caption*\n ${prefix + command}`
if (!isImage) return reply(respond)
if (!quoted) return reply(respond) 
await loading()
try {
    let yudz = await Yudzxml.downloadAndSaveMediaMessage(quoted)
let response = await uploadMedia(yudz)
let url_teleph_hd = response.result.url;
  let shannz = await (await fetch(`${apikey.api}/tools/removebg?apiKey=${apikey.key}&imageUrl=${url_teleph_hd}`)).json()
  let bg = shannz.result.image
 await Yudzxml.sendMessage(m.chat,{image:{url: bg }, caption: mess.success},{quoted: m})
} catch (e) {
  console.log(e)
  let type2 = await Yudzxml.downloadAndSaveMediaMessage(quoted);
  let coba = await uploadMedia(type2)
  let hasil = coba.result.url
  let yudd = await fetchJson(`${apikey.beta}/api/tools/removebg?url=${hasil}&apiKey=${apikey.botz}`)
  let final = yudd.url.result;
  await Yudzxml.sendMessage(m.chat, { image: { url: final }, caption: mess.success }, { quoted: m })
}
}
break
case 'wm': 
case 'watermark': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!quoted) return reply(`_Balas Video/Image/Sticker Dengan Caption *${prefix + command}*_`)  
if (!text) return reply('_Contoh: *wm Yudzxml*_\n\n_Contoh 1: wm nama_\n_Contoh 2: wm telegram: | @Yudzxyz_')
if (!MinLimit(m.sender)) return;
await loading()
let atas = text.split('|')[0] ? text.split('|')[0] : '';
let bawah = text.split('|')[1] ? text.split('|')[1] : '';
let media = await Yudzxml.downloadAndSaveMediaMessage(quoted)
let encmedia = await Yudzxml.sendImageAsSticker(m.chat, media, m, { packname: atas, author: bawah });
await fs.unlinkSync(encmedia)
}
break
case 'qc': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
    if (!text) {
        return reply('_Masukkan Teksnya_ \n\n_Contoh : *.qc Yudzxyz*_');
    }

    if (!MinLimit(m.sender)) return;

    await loading();
    let ppnyauser;
    try {
        ppnyauser = await Yudzxml.profilePictureUrl(m.sender, 'image');
    } catch (e) {
        ppnyauser = 'https://telegra.ph/file/6880771a42bad09dd6087.jpg';
    }

    try {
        const obj = {
            "type": "quote",
            "format": "png",
            "backgroundColor": "#FFFFFF",
            "width": 512,
            "height": 768,
            "scale": 2,
            "messages": [{
                "entities": [],
                "avatar": true,
                "from": {
                    "id": 1,
                    "name": pushname,
                    "photo": {
                        "url": ppnyauser
                    }
                },
                "text": text,
                "replyMessage": {}
            }]
        };

        const json = await axios.post('https://btzqc.betabotz.eu.org/generate', obj, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const buffer = Buffer.from(json.data.result.image, 'base64');
        await Yudzxml.sendImageAsSticker(from, buffer, m, {
            packname: `${config.packname}`,
            author: `${config.author}`
        });
    } catch (error) {
        console.error('Error x:', error);
        reply('Maaf, terjadi kesalahan dalam menghasilkan sticker.');
    }
}
break;
case 'qc2': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
    if (!text) {
        return reply('_Masukkan Teksnya_ \n\n_Contoh : *.qc2 Yudzxyz*_');
    }

    if (!MinLimit(m.sender)) return;

    await loading();
    let ppnyauser;
    try {
        ppnyauser = await Yudzxml.profilePictureUrl(m.sender, 'image');
    } catch (e) {
        ppnyauser = 'https://telegra.ph/file/6880771a42bad09dd6087.jpg';
    }

    try {
        const obj = {
            "type": "quote",
            "format": "png",
            "backgroundColor": "#000000",
            "width": 512,
            "height": 768,
            "scale": 2,
            "messages": [{
                "entities": [],
                "avatar": true,
                "from": {
                    "id": 1,
                    "name": pushname,
                    "photo": {
                        "url": ppnyauser
                    }
                },
                "text": text,
                "replyMessage": {}
            }]
        };

        const json = await axios.post('https://btzqc.betabotz.eu.org/generate', obj, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const buffer = Buffer.from(json.data.result.image, 'base64');
        await Yudzxml.sendImageAsSticker(from, buffer, m, {
            packname: `${config.packname}`,
            author: `${config.author}`
        });
    } catch (error) {
        console.error('Error x:', error);
        reply('Maaf, terjadi kesalahan dalam menghasilkan sticker.');
    }
}
break;
case 'tomp3':
case 'toaudio': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!isMedia) throw reply(`Reply video/audio dengan caption ${prefix + command}`)
if (!quoted) throw reply(`Reply video/audio dengan caption ${prefix + command}`)
await loading()
try {
var dl = await m.quoted.download()
Yudzxml.sendMessage(m.chat, {audio: dl, mimetype:'audio/mpeg', ptt:false, contextInfo:{  externalAdReply: { showAdAttribution: false,
mediaType:  1,
mediaUrl: 't.me/Yudzxzy',
title: `${config.botname}`,
body: `${ucapanWaktu} ${pushname}`,
sourceUrl: `${config.saluran}`,
thumbnail: ppnyauser
}
}}, { quoted: m })
} catch (error) {
  return reply(mess.error)
}
}
break
case 'toimage': 
case 'toimg': {
    if (!isRegistered) return reply(mess.register);
    if (isBan) return reply(mess.ban);
    if (!MinLimit(m.sender)) return;
    if (!isMedia) return reply(`Contoh Pengguna\n${prefix + command} ` + '*dengan reply sticker*');
    await loading();
    try {
        let media = await Yudzxml.downloadAndSaveMediaMessage(quoted);
        let buffer = fs.readFileSync(media)
        await Yudzxml.sendMessage(m.chat, { image: buffer, caption: mess.success }, { quoted: m });
        fs.unlinkSync(media);
        console.log('File berhasil dihapus:', media);
    } catch (error) {
        console.error(error);
        return reply(mess.error);
    }
}
break;
case 'tovn': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!isMedia) throw reply(`Reply video/audio dengan caption ${prefix + command}`)
if (!quoted) throw reply(`Reply video/audio dengan caption ${prefix + command}`)
await loading()
try {
var dl = await m.quoted.download()
Yudzxml.sendMessage(m.chat, {audio: dl, mimetype:'audio/mpeg', ptt:true, contextInfo:{  externalAdReply: { showAdAttribution: false,
mediaType:  1,
mediaUrl: 't.me/Yudzxzy',
title: `${config.botname} `,
body: `${ucapanWaktu} ${pushname}`,
sourceUrl: `${config.saluran}`,
thumbnail: ppnyauser
}
}}, { quoted: m })
} catch (error) {
  return reply(mess.error)
}
}
break
case 'kodebahasa': {
let cap = `
UNTUK PENGGUNAAN TRANSLATE GUNAKAN KODE MISAL UNTUK BAHASA ACEH GUNAKAN ACE (KODE BAHASA)

*DAFTAR KODE BAHASA*

Abkhaz : ab
Aceh : ace
Acholi : ach
Afrika : af
Albania : sq
Alur : alz
Amhara : am
Arabic : ar
Armenia : hy
Assam : as
Awadhi : awa
Aymara : ay
Azerbaijani : az
Bali : ban
Bambara : bm
Bashkir : ba
Basque : eu
Batak Karo : btx
Batak Simalungun : bts
Batak Toba : bbc
Belarusia : be
Bemba : bem
Bengali : bn
Betawi : bew
Bhojpuri : bho
Bikol : bik
Bosnia : bs
Breton : br
Bulgaria : bg
Buryat : bua
Kanton : yue
Catalan : ca
Cebu : ceb
Chichewa (Nyanja) : ny
China (Aksara Sederhana) : zh-CN atau zh (BCP-47)
China (Aksara Tradisional) : zh-TW (BCP-47)
Chuvash : cv
Korsika : co
Crimean Tatar : crh
Kroasia : hr
Ceko : cs
Denmark : da
Dinka : din
Divehi : dv
Dogri : doi
Dombe : dov
Belanda : nl
Dzongkha : dz
Inggris : en
Esperanto : eo
Estonia : et
Ewe : ee
Fiji : fj
Filipino (Tagalog) : fil atau tl
Finlandia : fi
Prancis : fr
Prancis (Prancis) : fr-FR
Prancis (Kanada) : fr-CA
Frisian : fy
Fulfulde : ff
Ga : gaa
Galisia : gl
Ganda (Luganda) : lg
Georgia : ka
Jerman : de
Yunani : el
Guarani : gn
Gujarati : gu
Kreol Haiti : ht
Hakha Chin : cnh
Hausa : ha
Hawaii : haw
Ibrani : iw atau he
Hiligaynon : hil
Hindi : hi
Hmong : hmn
Hungaria : hu
Hunsrik : hrx
Islan : is
Igbo : ig
Iloko : ilo
Indonesia : id
Irlandia : ga
Italia : it
Jepang : ja
Jawa : jw atau jv
Kannada : kn
Kapampangan : pam
Kazakh : kk
Khmer : km
Kiga : cgg
Kinyarwanda : rw
Kituba : ktu
Konkani : gom
Korean : ko
Krio : kri
Kurdi (Kurmanji) : ku
Kurdi (Sorani) : ckb
Kyrgyz : ky
Laos : lo
Latgalia : ltg
Latin : la
Latvia : lv
Liguria : lij
Limburgia : li
Lingala : ln
Lituania : lt
Lombard : lmo
Luo : luo
Luksemburg : lb
Makedonia : mk
Maithili : mai
Makassar : mak
Malagasi : mg
Melayu : ms
Melayu (Jawi) : ms-Arab
Malayalam : ml
Malta : mt
Maori : mi
Marathi : mr
Meadow Mari : chm
Meitei (Manipur) : mni-Mtei
Minang : min
Mizo : lus
Mongolia : mn
Myanmar (Burma) : my
Ndebele (Selatan) : nr
Nepal Bhasa (Newari) : new
Nepal : ne
Sotho Utara (Sepedi) : nso
Norwegia : no
Nuer : nus
Occitan : oc
Odia (Oriya) : or
Oromo : om
Pangasinan : pag
Papiamento : pap
Pashto : ps
Persia : fa
Polski : pl
Portugis : pt
Portugis (Portugal) : pt-PT
Portugis (Brasil) : pt-BR
Punjabi : pa
Punjabi (Shahmukhi) : pa-Arab
Quechua : qu
Rumania : rom
Rumania : ro
Rundi : rn
Rusia : ru
Samoa : sm
Sango : sg
Sanskrit : sa
Gaelik Skotlandia : gd
Serbia : sr
Sesotho : st
Kreol Seychelles : crs
Kreol Mauritius : mfe
Sunda : su
Swahili : sw
Swedia : sv
Tagalog : tl
Tajik : tg
Tamil : ta
Tatar : tt
Telugu : te
Thai : th
Tibet : bo
Tigrinya : ti
Turki : tr
Turkmen : tk
Ukraina : uk
Urdu : ur
Uzbek : uz
Vietnam : vi
Welsh : cy
Wolof : wo
Xhosa : xh
Yoruba : yo
Zulu : zu
`
await reply(cap)
}
break
case 'translate':
case 'tr': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
    if (!text) {
        return reply(`Contoh :
1. Kirim perintah ${prefix + command} *kode bahasa* *teks*
   Contoh : ${prefix + command} id love you
2. Reply chat dengan caption ${prefix + command} *kode bahasa*
   Contoh : ${prefix + command} id my bot
Daftar bahasa yang di dukung : ketik .kodebahasa`);
    }

    if (!MinLimit(m.sender)) return;
    await loading();

    const translate = require("@vitalets/google-translate-api");
    let teks = m.quoted ? quoted.text : quoted.text.split(args[0])[1];

    try {
        const res = await translate(teks, { to: args[0] });
        await Yudzxml.sendMessage(m.chat, {
            text: `${res.text}`,
            mentions: [m.sender]
        }, { quoted: m });
    } catch (err) {
        console.error(err);
        reply(`Terjadi kesalahan saat menerjemahkan. Silahkan Gunakan ${prefix + command}2.`);
    }
}
break;
case 'tr2':
case 'translate2': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(`*Cara Penggunaan:*\nContoh: ${prefix + command} wish you were here`)
await loading()
try {
let en = await fetchJson(`${apikey.auto}/api/translate/en-id?apikey=${apikey.res2}&text=${text}`)
let arti1 = en.data
let id = await fetchJson(`${apikey.auto}/api/translate/id-en?apikey=${apikey.res2}&text=${text}`)
let arti2 = id.data
await reply(`⭔ *TRANSLATE:*\n\n⭔ *ID:* ${arti1}\n⭔ *EN:* ${arti2}`)
} catch (error) {
  return reply(mess.error)
}
}
break
case 'todoc':
case 'todocumen':
case 'todokumen': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
    if (!MinLimit(m.sender)) return;
    if (!isMedia) {
        return reply(`Contoh Pengguna\n${prefix + command} *dengan reply lagu/vidio/foto yang ingin dijadikan dokumen*`);
    }
    await loading();
    try {
        const media = await Yudzxml.downloadAndSaveMediaMessage(quoted);
        const cdn = await uploadMedia(media);
        const urlnya = cdn.result.url;
        const extension = urlnya.split('.').pop().toLowerCase();
        let type;
        const namafile = `X7BOTZ-DOCUMEN.${extension}`;
        const stats = fs.statSync(media);
        const filesize = stats.size;

        const maxSize = 100 * 1024 * 1024; // 100 MB
        if (filesize > maxSize) {
           return reply(`Ukuran file terlalu besar! Maksimum adalah 100 MB.`);
        }

        if (extension === 'pdf') {
            type = 'application/pdf';
        } else if (['jpg', 'jpeg', 'png'].includes(extension)) {
            type = 'image/jpeg';
        } else if (extension === 'mp4') {
            type = 'video/mp4';
        } else if (extension === 'mp3') {
            type = 'audio/mpeg';
        } else if (extension === 'webp') {
            type = 'image/webp';
        } else {
            type = 'application/octet-stream';
        }

        await Yudzxml.sendMessage(m.chat, { document: { url: urlnya }, fileName: namafile, caption: mess.success, mimetype: type }, { quoted: m });
    } catch (e) {
        console.log(e);
        return reply(mess.error);
    }
}
break;
case 'togift':
case 'togif': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
    if (!MinLimit(m.sender)) return;
    if (!isMedia) {
        return reply(`Contoh Pengguna\n${prefix + command} *dengan reply sticker/gif*`);
    }
    await loading();
    try {
        let media = await Yudzxml.downloadAndSaveMediaMessage(quoted);
        let kontol = await uploadMedia(media);
        let url = kontol.result.url
        let fetching = await fetchJson(`${apikey.beta}/api/tools/webp2mp4?url=${url}&apikey=${apikey.botz}`)
        let final = fetching.result
        await Yudzxml.sendMessage(m.chat, { video: { url: final }, caption: mess.success, gifPlayback: true }, { quoted: m });
        fs.unlinkSync(media);
    } catch (error) {
        console.error(error);
        return reply(mess.error);
    }
}
break;
case 'tovideo':
case 'tovid':
case 'tomp4':
case 'webptomp4':
case 'covertwebptomp4': {
    if (!isRegistered) return reply(mess.register);
    if (isBan) return reply(mess.ban);
    if (!MinLimit(m.sender)) return;
    if (!isMedia) {
        return reply(`Contoh Pengguna\n${prefix + command} *dengan reply sticker/gif*`);
    }

    await loading();
    try {
        let media = await Yudzxml.downloadAndSaveMediaMessage(quoted);
        let kontol = await uploadMedia(media);
        let url = kontol.result.url
        let fetching = await fetchJson(`${apikey.beta}/api/tools/webp2mp4?url=${url}&apikey=${apikey.botz}`)
        let final = fetching.result
        await Yudzxml.sendMessage(m.chat, { video: { url: final }, caption: mess.success, mimetype: 'video/mp4' }, { quoted: m });
        fs.unlinkSync(media);
    } catch (error) {
        console.error(error);
        return reply(mess.error);
    }
}
break;
case 'getpp':
case 'getpic': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
  if (!MinLimit(m.sender)) return;
  await loading();
    const getProfilePictureUrl = async (sender) => {
        try {
            const url = await Yudzxml.profilePictureUrl(sender, 'image');
            if (!url) throw new Error('URL not found');
            return url;
        } catch (e) {
            console.log('Error fetching profile picture:', e.message);
            return 'https://petermarshconsulting.com/wp-content/uploads/2022/07/Screenshot-2022-07-19-at-10.13.31.png';
        }
    };

    try {
        const sender = isReply ? m.quoted.sender : m.sender;
        const pporg = await getProfilePictureUrl(sender);
        await Yudzxml.sendMessage(m.chat, { image: { url: pporg }, caption: mess.succes }, { quoted: m });
    } catch (e) {
        console.log('Error sending message:', e.message);
    }
}
break;
case 'getname': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
await loading();
if (isReply) {
namenye = await Yudzxml.getName(m.quoted.sender)
reply(namenye)
} else if (!isReply) {
Yudzxml.sendMessage(from, {text:'Reply orangnya'}, {quoted:m})
}
}
break
case 'ipdetail':
case 'ipcek':
case 'cekip': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('162.124.xxx'))
await loading();
try {
let yudd = await (await fetch(`${apikey.api}/tools/cekip?apiKey=${apikey.key}&id=${text}
`)).json();
let hasil = yudd.result;
let cap = `*Result From IpCek*

*⭔ IpAddress:* ${hasil.ip}
*⭔ Hostname:* ${hasil.hostname}
*⭔ Anycast:* ${hasil.anycast} 
*⭔ City:* ${hasil.city}
*⭔ Region:* ${hasil.region}  
*⭔ Loc:* ${hasil.loc}   
*⭔ Org:* ${hasil.org}   
*⭔ Postal:* ${hasil.postal}   
*⭔ Timezone:* ${hasil.timezone}   
*⭔ Source:* ${hasil.readme}   
`
await reply(cap)
} catch (e) {
  return reply(mess.error)
}
}
break
case 'hitungwr':
case 'hitungwinrate':
case 'winrate': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) {
 return reply(`Gunakan Format : ${prefix+command} [totalmatch],[totalwinrate],[winrate yang di inginkan]

Contoh: ${prefix+command} 70,60.5,90`);
}

    // Memisahkan argumen berdasarkan koma
    const args = text.split(',').map(arg => arg.trim());
    const tMatch = parseFloat(args[0]);
    const tWr = parseFloat(args[1]);
    const wrReq = parseFloat(args[2]);

    // Validasi input
    if (isNaN(tMatch) || isNaN(tWr) || isNaN(wrReq)) {
        return reply(`Gunakan Format : ${prefix+command} [totalmatch],[totalwinrate],[winrate yang di inginkan]

Contoh: ${prefix+command} 70,60.5,90`);
    }

const hasilWinrate = hitungWinRate(tMatch, tWr, wrReq);
return reply(hasilWinrate);
}
break;
case 'recolor': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!isMedia) return reply(`Balas/Kirim Gambar Dengan *${prefix + command}*`);
await loading();
try {
let media = await Yudzxml.downloadAndSaveMediaMessage(quoted);
let link = uploadMedia(media);
let hasilmedia = link.result.url
let yudd = await fetchJson(`${apikey.beta}/api/tools/recolor?url=${hasilmedia}&apikey=${apikey.botz}`);
let final = yudd.result;
await Yudzxml.sendMessage(m.chat, { image: { url: final }, caption: mess.success }, { quoted: m });
} catch (e) {
  console.log(e)
  return reply(mess.error)
}
}
break
case 'hd3':
case 'hdr3': 
case 'remini3': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!isMedia) return reply(`_Balas/Reply ${prefix + command} Dengan Mengirim Gambar_`)
 try {
await loading();
 let media = await Yudzxml.downloadAndSaveMediaMessage(quoted);
 let anu = await uploadMedia(media);
 let link = anu.result.url
 let scale = await (await fetch(`${apikey.beta}/api/tools/remini?url=${link}&apikey=${apikey.botz}`)).json();
 let final = scale.url
 Yudzxml.sendMessage(m.chat, { image: { url: final }, caption: mess.success }, { quoted: m})
} catch (error) {
  console.log(e)
 return reply(`_*FITUR ERROR*_\nCoba Gunakan ${prefix + command}4`)
}
}
break
case 'hd4':
case 'hdr4': 
case 'remini4': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!isMedia) return reply(`_Balas/Reply ${prefix + command} Dengan Mengirim Gambar_`)
 try {
await loading();
 let media = await Yudzxml.downloadAndSaveMediaMessage(quoted);
 let anu = await uploadMedia(media);
 let link = anu.result.url
 let scale = await (await fetch(`${apikey.beta}/api/tools/remini-v2?url=${link}&apikey=${apikey.botz}`)).json();
 let final = scale.url
 Yudzxml.sendMessage(m.chat, { image: { url: final }, caption: mess.success }, { quoted: m})
} catch (error) {
  console.log(e)
 return reply(`_*FITUR ERROR*_\nCoba Gunakan ${prefix + command}5`)
}
}
break
case 'hd5':
case 'hdr5': 
case 'remini5': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!isMedia) return reply(`_Balas/Reply ${prefix + command} Dengan Mengirim Gambar_`)
if (!text) return reply(`PILIH RESOLUSI ENCHANCED\n\n1-10\n\n*CONTOH KIRIM ATAU REPLAY GAMBAR DENGAN CAPTION ( RESOLUSI )*`)
 try {
await loading();
 let media = await Yudzxml.downloadAndSaveMediaMessage(quoted);
 let anu = await uploadMedia(media);
 let link = anu.result.url
 let scale = await (await fetch(`${apikey.beta}/api/tools/remini-v3?url=${link}&resolusi=${text}&apikey=${apikey.botz}`)).json();
 let final = scale.url
 Yudzxml.sendMessage(m.chat, { image: { url: final }, caption: mess.success }, { quoted: m})
} catch (error) {
  console.log(e)
 return reply(`_*FITUR ERROR*_\nCoba Gunakan ${prefix + command}6`)
}
}
break
case 'hd6':
case 'hdr6': 
case 'remini6': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!isMedia) return reply(`_Balas/Reply ${prefix + command} Dengan Mengirim Gambar_`)
if (!text) return reply(`PILIH RESOLUSI ENCHANCED\n\n10-20\n\n*CONTOH KIRIM ATAU REPLAY GAMBAR DENGAN CAPTION ( RESOLUSI )*`)
 try {
await loading();
 let media = await Yudzxml.downloadAndSaveMediaMessage(quoted);
 let anu = await uploadMedia(media);
 let link = anu.result.url
 let scale = await (await fetch(`${apikey.beta}/api/tools/remini-v4?url=${link}&resolusi=${text}&apikey=${apikey.botz}`)).json();
 let final = scale.url
 Yudzxml.sendMessage(m.chat, { image: { url: final }, caption: mess.success }, { quoted: m})
} catch (error) {
  console.log(e)
 return reply(`_*FITUR ERROR*_\nCoba Gunakan ${prefix + command}`)
}
}
break
//<=================================>//
//<========= ISLAMIC MENU ==========>//
//<=================================>//
case 'kisahnabi': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!text) return reply('PENGGUNAAN SALAH !! \nCONTOH .kisahnabi muhammad')
if (!MinLimit(m.sender)) return;
await loading();
try {
let yudd = await fetchJson(`${apikey.beta}/api/muslim/kisahnabi?nabi=${text}&apikey=${apikey.botz}`);
let hasil = yudd.result;
let cap = `*KISAH NABI*\n\n*⭔ NAMA:*  ${hasil.name}\n*⭔ KELAHIRAN:* ${hasil.kelahiran}\n*⭔ WAFAT:* ${hasil.wafat_usia}\n\n*⭔ KISAH:*\n${hasil.kisah}`;
await reply(cap);
} catch (e) {
  console.log(e)
  return reply(mess.error)
}
}
break
case 'niatsholat': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
await loading();
if (!MinLimit(m.sender)) return;
try {
let cap = `
*Niat Sholat Subuh*\nاُصَلِّى فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى
*LATIN :*
"Ushalli fardhosh shubhi rok'ataini mustaqbilal qiblati adaa-an lillaahi ta'aala"
*ARTINYA :*
"Aku berniat shalat fardhu Shubuh dua raka'at menghadap kiblat karena Allah Ta'ala"

*Niat Sholat Dzuhur*\nاُصَلِّى فَرْضَ الظُّهْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى
*LATIN :*
"Ushalli fardhodl dhuhri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
*ARTINYA :*
"Aku berniat shalat fardhu Dzuhur empat raka'at menghadap kiblat karena Allah Ta'ala"

*Niat Sholat Ashar*\nاُصَلِّى فَرْضَ الْعَصْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى
*LATIN :*
"Ushalli fardhol 'ashri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala"
*ARTINYA :*
"Aku berniat shalat fardhu 'Ashar empat raka'at menghadap kiblat karena Allah Ta'ala"

*Niat Sholat Maghrib*\nاُصَلِّى فَرْضَ الْمَغْرِبِ ثَلاَثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى
*LATIN :*
"Ushalli fardhol maghribi tsalaata raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala"
*ARTINYA :*
"Aku berniat shalat fardhu Maghrib tiga raka'at menghadap kiblat karena Allah Ta'ala"

*Niat Sholat Isya*\nاُصَلِّى فَرْضَ الْعِشَاءِ اَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى
*LATIN :*
"Ushalli fardhol 'isyaa-i arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala"
*ARTINYA :*
"Aku berniat shalat fardhu Isya empat raka'at menghadap kiblat karena Allah Ta'ala"
`
await reply(cap)
} catch (e) {
  return reply(mess.error)
  console.log(e)
}
}
break
case 'jadwalsholat': 
case 'waktusholat':{
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
  if (!MinLimit(m.sender)) return;
  if (!text) return reply(example('batam'))
  await loading();
  let kota = await (await fetch(`${apikey.api}/islamic/jadwalsholat?apiKey=${apikey.key}&query=${text}`)).json();
  let hasil = kota.result;
  let cap = `*JADWAL SHOLAT*
  
*⭔ WILAYAH:* ${hasil.wilayah}
*⭔ SUBUH:* ${hasil.subuh}
*⭔ DHUHUR:* ${hasil.dhuhur} 
*⭔ ASHAR:* ${hasil.ashar}
*⭔ MAGHRIB:* ${hasil.maghrib}  
*⭔ ISYA:* ${hasil.isya}   
  `
  await Yudzxml.sendMessage(m.chat, { image: { url: `https://l.top4top.io/p_3218c7gmn1.jpg` }, caption: cap }, {quoted: m })
}
break
case 'surah':{
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('1'))
await loading();
let juz = await fetchJson(`${apikey.beta}/api/muslim/surah?no=${text}&apikey=${apikey.botz}`);
let cap = 'ISI SURAH NO *'+text+'*\n\n'
for (let hasil of juz.result) { 
cap += `${hasil.arab}\n${hasil.rumi}\n${hasil.latin}\n\n`
}
await reply(cap)
}
break
case 'hadis':
case 'hadits': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
await loading();
let yudd = await fetchJson(`${apikey.auto}/api/hadits/`)
let yanto = yudd.data;
let cap = `${yanto.arab}\n${yanto.indo}`
await reply(cap)
}
break
case 'caridoa':
case 'doa': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!text) return reply(example('tidur'))
await loading();
let yudd = await fetchJson(`${apikey.auto}/api/doa?q=${text}`)
let cap = yudd.data[0];
let doanya = `*_${cap.doa}_\n${cap.ayat}\n${cap.latin}\nArtinya : ${cap.artinya}'`
await reply(doanya)
}
break
case 'randomdoa':
case 'doarandom': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
await loading();
let yudd = await fetchJson(`${apikey.auto}/api/doa/random`)
let cap = yudd.data[0];
let doanya = `*_${cap.doa}_\n${cap.ayat}\n${cap.latin}\nArtinya : ${cap.artinya}'`
await reply(doanya)
}
break
//<=================================>//
//<========= RANDOM MENU ==========>//
//<=================================>//
case 'faktaunik': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
await loading(); 
let yudd = await fetchJson(`${apikey.auto}/api/random/faktaunik`)
let qutenya = yudd.data;
await reply(qutenya)
}
break
case 'quotesbucin': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
await loading(); 
let yudd = await fetchJson(`${apikey.auto}/api/random/bucinquote`)
let qutenya = yudd.data;
await reply(qutenya)
}
break
case 'quotesanime': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
await loading(); 
let yudd = await quotesAnime();
let yanti = yudd[Math.floor(Math.random() * yudd.length)]
let cap = `
_° ${yanti.karakter} :°_
_✨° ${yanti.quotes} °_

_🍂${yanti.anime} ~_`
await reply(cap)
}
break
case 'quotesjawa': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
await loading(); 
let yudd = await fetchJson(`${apikey.auto}/api/random/jawaquote`)
let qutenya = yudd.data;
await reply(qutenya)
}
break
case 'quotes': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
await loading(); 
let yudd = await Quotes();
let cap = `
_✨° ${yudd.quotes} °_

_🍂${yudd.author} ~_`
await reply(cap)
}
break
case 'meme': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
await loading();
try {
let yudd = await JalanTikusMeme()
await Yudzxml.sendMessage(m.chat, { image: { url: yudd }, caption: mess.success }, { quoted: m })
} catch (error) {
  return reply(mess.error)
}
}
break
case 'darkjokes':
case 'jokesgelap':
case 'jokesdark':
case 'darkjoke': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
await loading();
try {
let yudd = await Darkjokes()
await Yudzxml.sendMessage(m.chat, { image: { url: yudd }, caption: mess.success }, { quoted: m })
} catch (error) {
  return reply(mess.error)
}
}
break
case 'kataanime':{
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
await loading();
    	try {
//wm senn
		let res = await await fetch('https://katanime.vercel.app/api/getrandom');
		if (!res.ok) throw await res.text();
		let json = await res.json();
//wm senn
		if (!json.result) throw json;
		let data = '';
		for (let i = 0; i < json.result.length; i++) {
			let { id, english, indo, character, anime } = json.result[i];
			data += `_*•.* '${indo}'_\n${character} (${anime})\n\n`;
		}
//wm senn
		reply(data);
	} catch (e) {
		console.log(e);
		reply(mess.error)
	}
//wm senn
};
break
case 'ppcp': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return
try {
await loading();
let ah = await fetchJson(`${apikey.beta}/api/wallpaper/couplepp?apikey=${apikey.botz}`)
let hasil = ah.result
await Yudzxml.sendMessage(m.chat, { image: { url: hasil.male }, caption: '*CWONYA ~*' }, {quoted: m });
await Yudzxml.sendMessage(m.chat, { image: { url: hasil.female }, caption: '*CWENYA ~*' }, {quoted: m });
} catch (error) {
return reply(mess.error)
}
}
break
//<=================================>//
//<========= ANIME MENU ==========>//
//<=================================>//
case 'megumin':
case 'umaru':
case 'keneki':
case 'yotsuba':
case 'shinomiya':
case 'yumeko':
case 'tejina':
case 'chiho':
case 'toukachan':
case 'akira':
case 'kurumi':
case 'itori':
case 'sagiri':  
case 'eba':  
case 'deidara':  
case 'itachi':  
case 'madara':  
case 'asuna':    
case 'ayuzawa':    
case 'chitoge':
case 'emilia':
case 'hestia':
case 'inori':
case 'ana':
case 'miku':
case 'kaori':
case 'shizuka':
case 'doraemon':
case 'pokemon':  
case 'kaga':  
case 'koturi':  
case 'mikasa':  
case 'akiyama':  
case 'gremory':  
case 'isuzu':
case 'shina':
case 'kagura':
case 'shinka':
case 'tsunade':
case 'sasuke':
case 'sakura':
case 'rize':
case 'onepiece':
case 'nezuko':
case 'boruto':
case 'naruto':
case 'erza':
case 'kakasih':
case 'minato':
case 'elaina':
case 'yuri':
case 'shota':
case 'waifu':
case 'waifu2':
case 'nsfwloli':
case 'hinata': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
await loading();
try {
let memek = `${apikey.beta}/api/anime/${command}?apikey=${apikey.botz}`
await Yudzxml.sendMessage(m.chat, { image: { url: memek }, caption: mess.success }, { quoted: m });
} catch (e) {
  console.log(e) 
  return reply(mess.error)
}
}
break
//<=================================>//
 //<========= CECAN MENU ==========>//
//<=================================>//
case 'malaysia':
case 'japan':
case 'korea':
case 'indonesia':
case 'thailand':
case 'vietnam':
case 'justinaxie':
case 'jeni':
case 'jiso':
case 'ryujin':
case 'rose':
case 'hijaber':
case 'china': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
  try {
await loading();
let ah = `${apikey.beta}/api/cecan/${command}?apikey=${apikey.botz}`
await Yudzxml.sendMessage(m.chat, { image: { url: ah }, caption: mess.success}, {quoted: m })
} catch (error) {
  return reply(mess.error)
}
}
break
//<=================================>//
//<========= STICKER MENU ==========>//
//<=================================>//
case 'rabbit':
case 'bucin':
case 'animegif':
case 'anime':
case 'gojosatoru':
case 'manusialidi':
case 'dinokuning':
case 'pentol':
case 'doge':
case 'gura':
case 'mukalu':
case 'spongebob':
case 'kawanspongebob':
case 'patrick':
case 'patrickgif':
case 'paimon':
case 'random':
case 'chat':
case 'among': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
await loading();
try {
let yudd = `${apikey.beta}/api/sticker/${command}?apikey=${apikey.botz}`
await Yudzxml.sendImageAsSticker(from, yudd, m, { packname: config.packname, author: config.author });
} catch (e) {
  console.log(e)
  return reply(mess.error)
}
}
break
//<=================================>//
//<========= FLAMING MENU ==========>//
//<=================================>//
case 'fluffy':
case 'crafts':
case 'comics':
case 'retro':
case 'beehive':
case 'jukebox':
case 'jukebox':
case 'neon':
case 'closed':
case 'gamezone':
case 'matrix':
case 'godzilla':
case 'motormouth':
case 'motormouth':
case 'water':
case 'runner':
case 'blackbird':
case 'smurfs':
case 'beauty':
case 'minions':
case 'crazy':
case 'football':
case 'skate': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return 
  if (!text) return reply(example('Yudzxml'))
  await loading()
  try {
  let yudzzz = await (await fetch(`${apikey.api}/flamingtext/${command}?apiKey=${apikey.key}&query=${text}
`)).json()
let hasil = yudzzz.result
Yudzxml.sendMessage(m.chat, { image: { url: hasil }, caption: mess.success }, { quoted: m })
} catch (error) {
  return reply(mess.error)
}
}
break
case 'spidermen': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;  
  if (!text) return reply(example('Yudzxml'))
  await loading()
  try {
  let yudzzz = await (await fetch(`${apikey.api}/flamingtext/spider-men?apiKey=${apikey.key}&query=${text}
`)).json()
let hasil = yudzzz.result
Yudzxml.sendMessage(m.chat, { image: { url: hasil }, caption: mess.success }, { quoted: m })
} catch (error) {
  return reply(mess.error)
}
}
break
case 'ironicmaiden': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;  
if (!text) return reply(example('Yudzxml'))
await loading()
try {
  let yudzzz = await (await fetch(`${apikey.api}/flamingtext/ironic-maiden?apiKey=${apikey.key}&query=${text}
`)).json()
let hasil = yudzzz.result
Yudzxml.sendMessage(m.chat, { image: { url: hasil }, caption: mess.success }, { quoted: m })
} catch (error) {
  return reply(mess.error)
}
}
break
case 'sanandreas': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;  
  if (!text) return reply(example('Yudzxml'))
  await loading()
  try {
  let yudzzz = await (await fetch(`${apikey.api}/flamingtext/san-andreas?apiKey=${apikey.key}&query=${text}
`)).json()
let hasil = yudzzz.result
Yudzxml.sendMessage(m.chat, { image: { url: hasil }, caption: mess.success }, { quoted: m })
} catch (error) {
  return reply(mess.error)
}
}
break
case 'starwars': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;  
if (!text) return reply(example('Yudzxml'))
  await loading()
  try {
  let yudzzz = await (await fetch(`${apikey.api}/flamingtext/star-wars?apiKey=${apikey.key}&query=${text}
`)).json()
let hasil = yudzzz.result
Yudzxml.sendMessage(m.chat, { image: { url: hasil }, caption: mess.success }, { quoted: m })
} catch (error) {
  return reply(mess.error)
}
}
break
case 'goodtimes': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;  
if (!text) return reply(example('Yudzxml'))
  await loading()
  try {
  let yudzzz = await (await fetch(`${apikey.api}/flamingtext/good-times?apiKey=${apikey.key}&query=${text}
`)).json()
let hasil = yudzzz.result
Yudzxml.sendMessage(m.chat, { image: { url: hasil }, caption: mess.success }, { quoted: m })
} catch (error) {
  return reply(mess.error)
}
}
break
case 'heavymetal': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;  
if (!text) return reply(example('Yudzxml'))
  await loading()
  try {
  let yudzzz = await (await fetch(`${apikey.api}/flamingtext/heavy-metal?apiKey=${apikey.key}&query=${text}
`)).json()
let hasil = yudzzz.result
Yudzxml.sendMessage(m.chat, { image: { url: hasil }, caption: mess.success }, { quoted: m })
} catch (error) {
  return reply(mess.error)
}
}
break
case 'biglove': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;  
  if (!text) return reply(example('Yudzxml'))
  await loading()
  try {
  let yudzzz = await (await fetch(`${apikey.api}/flamingtext/big-love?apiKey=${apikey.key}&query=${text}
`)).json()
let hasil = yudzzz.result
Yudzxml.sendMessage(m.chat, { image: { url: hasil }, caption: mess.success }, { quoted: m })
} catch (error) {
  return reply(mess.error)
}
}
break
case 'artdeco': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;  
if (!text) return reply(example('Yudzxml'))
await loading()
  try {
  let yudzzz = await (await fetch(`${apikey.api}/flamingtext/art-deco?apiKey=${apikey.key}&query=${text}
`)).json()
let hasil = yudzzz.result
Yudzxml.sendMessage(m.chat, { image: { url: hasil }, caption: mess.success }, { quoted: m })
} catch (error) {
  return reply(mess.error)
}
}
break
//<=================================>//
//<========= EPHOTO MENU ==========>//
//<=================================>//
case 'writetext': 
case 'blackpinklogo': 
case 'glitchtext': 
case 'advancedglow': 
case 'typographytext': 
case 'pixelglitch': 
case 'neonglitch': 
case 'flag': 
case 'flag2': 
case 'deletingtext': 
case 'blackpinkstyle': 
case 'glowingtext': 
case 'underwater': 
case 'logomaker':
case 'cartoonstyle': 
case 'papercut': 
case 'watercolor': 
case 'effectclouds': 
case 'gradienttext': 
case 'summerbeach': 
case 'luxurygold':
case 'multicolored':
case 'sandsummer':
case 'galaxy':
case '1917style':  
case 'makingneon':  
case 'royaltext':  
case 'texteffect':  
case 'galaxystyle':  
case 'lighteffect': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;  
if (!text) return reply(`*Contoh Penggunaan :*\n ${prefix + command} Yudzxml`)
await loading()
try {
  let proses = await (await fetch(`${apikey.api}/ephoto360/${command}?apiKey=${apikey.key}&query=${text}`)).json()
  Yudzxml.sendMessage(m.chat, { image: { url: proses.result }, caption: mess.success }, { quoted: m })
} catch (error) {
  return reply(mess.error)
}
}
break
//<=================================>//
//<========= BERITA MENU ==========>//
//<==================================>/
case 'cuaca': 
case 'weather': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!text) return reply(example('Jakarta'))
try {
let data = await fetchJson(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`)
reply(`*🏙 Cuaca Kota ${data.name}*\n\n*🌤️ Cuaca :* ${data.weather[0].main}\n*📝 Deskripsi :* ${data.weather[0].description}\n*🌡️ Suhu Rata-rata :* ${data.main.temp} °C\n*🤔 Terasa Seperti :* ${data.main.feels_like} °C\n*🌬️ Tekanan :* ${data.main.pressure} hPa\n*💧 Kelembapan :* ${data.main.humidity}%\n*🌪️ Kecepatan Angin :* ${data.wind.speed} Km/h\n*📍Lokasi :*\n- *Bujur :* ${data.coord.lat}\n- *Lintang :* ${data.coord.lon}\n*🌏 Negara :* ${data.sys.country}`)
} catch (e) {
return reply('Kota Tidak Di Temukan!')
 }
}
break
case 'bolanet': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
await loading();
try {
let cari = await (await fetch(`${apikey.api}/berita/bolanet?apiKey=${apikey.key}`)).json();
let teks = ''
let no = 1
for (let yudd of cari.result) {
teks += `⭔ No : ${no++}\n⭔ Category : ${yudd.category}\n⭔ Date : ${yudd.date}\n⭔ Title : ${yudd.title}\n⭔ Url : ${yudd.link}\n\n─────────────────\n\n`
}
Yudzxml.sendMessage(m.chat, { image: { url: cari.result[0].imageUrl },  caption: teks }, { quoted: m })
} catch (e) {
  return reply(mess.error)
}
}
break 
case 'infogempa': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
await loading()
let res = await (await fetch(`${apikey.api}/berita/gempa?apiKey=${apikey.key}`)).json();
let anu = res.result;
let txt = `*── 「 GEMPA NEWS 」 ──*\n\n${anu.wilayah}
*⏰ Waktu :* ${anu.waktu}
*📌 Magnitude :* ${anu.magnitude}
*🌊 Kedalaman :* ${anu.kedalaman}
*🌐 Lintang Bujur :* ${anu.lintang_bujur}
*🏔️ Dirasakan :* ${anu.dirasakan}
`
await Yudzxml.sendMessage(m.chat, { image: { url: anu.imagemap }, caption: txt }, {quoted: m })
}
break
case 'kontan': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
KontanNews().then(async (res) => {
let teks = ''
let no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ''
Yudzxml.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted:m })
})
}
break
case 'detik': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
DetikNews().then(async(res) => {
let no = 0
let teks_berita = ''
for (let i of res) {
no += 1
teks_berita += `\n• ${no.toString()} •\n`
teks_berita += `Berita: ${i.berita}\n`
teks_berita += `Upload: ${i.berita_diupload}\n`
teks_berita += `Link: ${i.berita_url}\n`
}
teks_berita += ''
Yudzxml.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks_berita }, { quoted:m })
})
}
break
case 'cnbc': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
CNBCNews().then(async(res) => {
let no = 0
teks_berita = ''
for (let i of res) {
no += 1
teks_berita += `\n• ${no.toString()} •\n`
teks_berita += `Berita: ${i.berita}\n`
teks_berita += `Upload: ${i.berita_diupload}\n`
teks_berita += `Link: ${i.berita_url}\n`
}
teks_berita += ''
Yudzxml.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks_berita }, { quoted:m })
})
}
break
case 'cnn': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
CNNNews().then(res => {
let no = 0
teks_berita = ''
for (let i of res) {
no += 1
teks_berita += `\n• ${no.toString()} •\n`
teks_berita += `Berita: ${i.berita}\n`
teks_berita += `Link: ${i.berita_url}\n`
}
teks_berita += ''
reply(teks_berita) 
})
}
break
case 'inews': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);
if (!MinLimit(m.sender)) return;
if (!q) return reply(`_penculikan anak/berita lainnya_`)
   await loading()
// wm avz
    const query = args.join(' ');
  await aviz(query).then(results => {
        if (results.length === 0) {
            reply('Tidak ada hasil ditemukan.');
        } else {
            let avosky = 'Hasil pencarian berita iNews:\n\n';
            results.forEach((result, index) => {
                avosky += `${index + 1}. *${result.title}*\n`;
                avosky += `📅 ${result.date}\n`;
                avosky += `🔗 [Baca lebih lanjut](${result.url})\n`;
                avosky += `🖼️ Gambar: ${result.imgUrl}\n\n`;
            });
            reply(avosky);
        }
    });
}
break
//<=================================>//
//<========= OTHER MENU ==========>//
//<=================================>//
case 'updatebot': {
if (!isOwner) return reply(mess.owner)
if (m.isGroup) return reply(mess.private)
if (!text) return reply(example(`input key`))
await loading()
try {
const apiupdate = `https://api-yudzxml.vercel.app/api/update?key=${text}`
const up = await fetchJson(apiupdate)
console.log(`${chalk.greenBright.bold('['+jammenit+']')} ${chalk.greenBright.bold(`MULAI UPDATE SCRIPT X7BOTZ`)}`)
const urlapi = up.data.update;
const downloadPath = path.join(__dirname, '/');
async function UpdateBotFromApi(urlapi, targetFolder) {
    const zipFilePath = `${targetFolder}.zip`;

try {
const response = await axios.get(urlapi, {
    responseType: 'stream',
    headers: { "Cache-Control": "no-cache" }
});
if (response.status !== 200) {
   console.error(`${chalk.redBright.bold("[ERROR]")} GAGAL MENDAPATKAN FILE DARI SERVER, STATUS KODE: ${response.status}`);
return;
}

const file = fs.createWriteStream(zipFilePath);
response.data.pipe(file);
file.on('finish', () => {
  file.close(() => {
    exec(`unzip -o ${zipFilePath} -d ${targetFolder}`, (err, stdout, stderr) => {
if (err) {
  console.error(`${chalk.redBright.bold("[ERROR]")} GAGAL MENYEKSTRAK FILE ZIP`);
  console.error(stderr);
return;
}
const message = `_*KONFIGURASI BOT BERHASIL DI UPDATE*_

*OWNER SCRIPT :*
> ${up.author}

*NOTE :* 
> ${up.data.message}

*KEY SCRIPT :*
> ${up.data.key}

*NAME BOT :*
> ${config.botname}

*TELEGRAM :*
> https://t.me/Yudzxzy`;
reply(message).catch(err => {
  console.error(`${chalk.redBright.bold("[ERROR]")} GAGAL MENGIRIM PESAN`);
  console.error(err);
});
fs.unlink(zipFilePath, (err) => {
  if (err) {
    console.error(`${chalk.redBright.bold("[ERROR]")} GAGAL MENGHAPUS FILE ZIP`);
} else {
  console.log(`${chalk.greenBright.bold("[SUCCESS]")} SCRIPT TELAH DI PERBARUI`);
 }
      });
    });
  });
});
file.on('error', (err) => {
  console.error(`${chalk.redBright.bold("[ERROR]")} GAGAL MENYIMPAN FILE ZIP`);
            console.error(err);
});
} catch (err) {
        console.error(`${chalk.redBright.bold("[ERROR]")} GAGAL MENDOWNLOAD FILE DARI SERVER`);
        console.error(err);
    }
}
await UpdateBotFromApi(urlapi, downloadPath)
} catch (error) {
console.log(error)
return reply(mess.error)
    }
}
break
case 'script': 
case 'sc': {
let text = `

╭「 *SCRIPT X7BOTZ - MD* 」
│
│✦ ᴠᴇʀꜱɪᴏɴ : ${config.botname}
│✦ ɴᴏ ᴇɴᴄ, ɴᴏ ꜱᴄᴀɴ 
│✦ ɴᴏ ʙᴜɢ & ɴᴏ ᴇʀʀᴏʀ 
│✦ ʜᴀʀɢᴀ 30.000
│✦ ꜰʀᴇᴇ ᴀᴘɪᴋᴇʏ
│✦ ꜰʀᴇᴇ ᴘᴀɴᴇʟ
│✦ ᴛʏᴘᴇ ᴄᴀꜱᴇ x ᴘʟᴜɢɪɴ
│✦ ʙɪꜱᴀ ʀᴜɴ ᴅɪ ᴘᴀɴᴇʟ/ᴛᴇʀᴍᴜx 
│✦ ᴛᴏᴛᴀʟ ꜰɪᴛᴜʀ : ${totalFitur()}
╰────────────────────────✦

╭「 *YUDZXML OWNER* 」

ꜱᴄʀɪᴘᴛ ɪɴɪ ᴍᴀꜱɪ ᴅᴀʟᴀᴍ ᴛᴀʜᴀᴘ ᴘᴇɴɢᴇᴍʙᴀɴɢᴀɴ, ᴊɪᴋᴀ ᴋᴀʟɪᴀɴ ʙᴇʀᴍɪɴᴀᴛ ᴍᴇᴍʙᴇʟɪ ꜱɪʟᴀʜᴋᴀɴ ʜᴜʙᴜɴɢɪ ᴏᴡɴᴇʀ/ᴅᴇᴠᴏʟᴏᴘᴇʀ ᴋᴀᴍɪ
`
await reply(text)
}
break
case 'owner': 
case 'crator':
case 'creator':{
if (config.owner.length === 0) {
return reply('_Belum ada owner yang tersimpan dalam database_');
}
const repf = await Yudzxml.sendMessage(from, { 
contacts: { 
displayName: `${db_owner}`, 
contacts: list }, contextInfo: {
forwardingScore: 7, 
isForwarded: true,
mentionedJid: [sender]
}}, { quoted: m });
let media = `https://autoresbot.com/tmp_files/6b0f7c0f-9b02-4b93-8259-eb4ff6af5198.png`
await Yudzxml.sendImageAsSticker(from, media, m, { packname: config.packname, author: config.author });
}
break
case 'donasi': {
let teks28 = `*『 DONASI 』*
Terimakasih Telah Berdonasi, Kak Yudzxml akan Terus Mengembangkan Sc Bot Ini 

*LINK DONASI*
https://saweria.co/Yudzxml
*DANA :*
081275673391

Jangan Lupa Send Bukti TF `
reply(teks28)
}
break
case 'style': {
if (!isRegistered) return reply(mess.register)
if (isBan) return reply(mess.ban);  
if (!MinLimit(m.sender)) return;
if (!text) {
return reply(`_Contoh: style Yudzxml_`);
}
let hasil = await applyStyle(text, 1);
reply(hasil.done)
}
break;
case 'regis':
case 'verif':
case 'daftar':
case 'register': {
    if (isRegistered) return reply('KAMU SUDAH TERDAFTAR');
    const phoneNumber = `@${m.sender.split('@')[0]}`;
    const name = m.pushName || 'Pengguna Tanpa Nama';
    const serialUser  = createSerial(20);
    const mzd = `「 𝗦𝗨𝗞𝗦𝗘𝗦𝗦 𝗧𝗘𝗥𝗗𝗔𝗙𝗧𝗔𝗥 」

 • ᴘʜᴏɴᴇ ɴᴜᴍʙᴇʀ : *${phoneNumber}*
 • ɴᴀᴍᴇ ᴜꜱᴇʀ : *${name}*
 • ꜱᴛᴀᴛᴜꜱ ᴠᴇʀɪꜰʏ : *Berhasil*
 • ɪᴅ ᴜꜱᴇʀ : *${serialUser}*

"ꜱɪʟᴀʜᴋᴀɴ ᴋᴇᴛɪᴋ .ᴍᴇ ᴜɴᴛᴜᴋ ᴍᴇʟɪʜᴀᴛ ᴘʀᴏꜰɪʟ ᴀɴᴅᴀ"

"ꜱᴇᴛɪᴀᴘ ʟᴀɴɢᴋᴀʜ ᴋᴇᴄɪʟ ʏᴀɴɢ ᴋᴀᴍᴜ ᴀᴍʙɪʟ ᴀᴅᴀʟᴀʜ ʟᴀɴɢᴋᴀʜ ᴍᴇɴᴜᴊᴜ ɪᴍᴘɪᴀɴᴍᴜ. ᴛᴇʀᴜꜱʟᴀʜ ʙᴇʀᴊᴜᴀɴɢ ᴅᴀɴ ᴊᴀɴɢᴀɴ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴇʀᴀʜ!`;
    const currentTime = new Date().toISOString();
    addRegisteredUser(m.sender, name, currentTime, serialUser );
    reply(mzd);
}
break;
case 'unregis':
case 'unreg':
case 'unverif':
case 'unregister': {
    if (!isRegistered) return reply(mess.register);
    if (isBan) return reply(mess.ban);
    
    const currentUser  = m.sender;
    const filePath = path.join(__dirname, './Storage/db/registered.json');

    try {
        const data = fs.readFileSync(filePath, 'utf8');
        let users = JSON.parse(data);
        const userIndex = users.findIndex(user => user.id === currentUser );
        if (userIndex === -1) {
            return reply('Pengguna tidak ditemukan.');
        }
        
        users.splice(userIndex, 1);
        fs.writeFileSync(filePath, JSON.stringify(users, null, 2), 'utf8');
      
        const successMessage = `「 𝗦𝗨𝗞𝗦𝗘𝗦𝗦 𝗗𝗜𝗕𝗔𝗧𝗔𝗟𝗞𝗔𝗡 」

 • ᴘʜᴏɴᴇ ɴᴜᴍʙᴇʀ : *@${currentUser .split('@')[0]}*
 • ꜱᴛᴀᴛᴜꜱ ᴠᴇʀɪꜰʏ : *Dibatalkan*

 "ꜱᴇᴛɪᴀᴘ ᴀᴋʜɪʀ ᴀᴅᴀʟᴀʜ ᴀᴡᴀʟ ʏᴀɴɢ ʙᴀʀᴜ. ᴛᴇʀᴜꜱʟᴀʜ ʙᴇʀᴊᴜᴀɴɢ ᴅᴀɴ ᴊᴀɴɢᴀɴ ᴘᴇʀɴᴀʜ ᴍᴇɴʏᴇʀᴀʜ!"`;
        reply(successMessage);
    } catch (err) {
        console.error('Error:', err);
        return reply('Terjadi kesalahan saat menghapus pengguna.');
    }
}
break;
//<=================================>//
//<======== SUBDOMAIN MENU =========>//
//<=================================>//
case 'listsubdomain':
case 'listdomain':
case 'listsubdo': {
if (!isOwner) return reply(mess.owner)
await loading();  
const subdomains = [
        config.subdomain.domain,
        config.subdomain.domain2,
        config.subdomain.domain3,
        config.subdomain.domain4,
        config.subdomain.domain5
];

const results = await Promise.all(subdomains.map(domain => applyStyle(domain, 1)));

let textnya = `
𝗟𝗜𝗦𝗧 𝗦𝗨𝗕𝗗𝗢𝗠𝗔𝗜𝗡

.1 ${results[0].done || '-'}
.2 ${results[1].done || '-'}
.3 ${results[2].done || '-'}
.4 ${results[3].done || '-'}
.5 ${results[4].done || '-'}

*ᴘᴏɪɴᴛꜱ :*
_ᴄᴏɴᴛᴏʜ : *${prefix}ᴅᴏᴍᴀɪɴ1 ʜᴏꜱᴛɴᴀᴍᴇ|ɪᴘᴠᴘꜱ*_

*ᴜɴᴘᴏɪɴᴛꜱ :*
_ᴄᴏɴᴛᴏʜ : *${prefix}ᴅᴇʟᴅᴏᴍᴀɪɴ1 ʜᴏꜱᴛɴᴀᴍᴇ*_
`;
await reply(textnya)
}
break;
case 'domain1': {
if (!isOwner) return reply(mess.owner);
await loading();
function subDomain1(host, ip) {
return new Promise((resolve) => {
const zone = config.subdomain.zone;
const apitoken = config.subdomain.token
const tld = config.subdomain.domain
axios.post(
  `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
{
  type: "A",
  name: `${host}.${tld}`,
  content: ip,
  ttl: 3600,
  priority: 10,
  proxied: false
},
{
  headers: {
    Authorization: `Bearer ${apitoken}`,
    "Content-Type": "application/json"
    }
  }).then((response) => {
  const res = response.data;
  if (res.success) {
    resolve({
      success: true,
      zone: res.result?.zone_name,
      name: res.result?.name,
      ip: res.result?.content
  });
} else {
  resolve({ success: false, error: "Gagal membuat DNS record" });
  }
}).catch((error) => {
  const errMsg = error.response?.data?.errors?.[0]?.message || error.response?.data?.errors || error.response?.data || error.response || error;
 resolve({ success: false, error: String(errMsg) });
    });
  });
}

const raw1 = args?.join(" ")?.trim();
if (!raw1) return reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
const host1 = raw1.split("|")[0].trim().replace(/[^a-z0-9.-]/gi, "");
if (!host1) return reply("Host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
const ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
    if (!ip1 || ip1.split(".").length < 4) {
return reply(ip1 ? "IP tidak valid" : "Mana IP-nya");
}
subDomain1(host1, ip1).then((result) => {
if (result.success) {
reply(`
𝗦𝗨𝗖𝗖𝗘𝗦𝗦 𝗠𝗘𝗠𝗕𝗨𝗔𝗧 𝗗𝗢𝗠𝗔𝗜𝗡

*ᴅᴏᴍᴀɪɴ:* ${result.name}
*ɪᴘᴀᴅᴅʀᴇꜱꜱ:* ${result.ip}
*ᴢᴏɴᴇ:* ${result.zone}`);
} else {
reply(`Gagal membuat subdomain\nMsg: ${result.error}`);
        }
    });
}
break;
case 'domain2': {
if (!isOwner) return reply(mess.owner);
await loading();
function subDomain1(host, ip) {
return new Promise((resolve) => {
const zone = config.subdomain.zone2
const apitoken = config.subdomain.token2
const tld = config.subdomain.domain2
axios.post(
  `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
{
  type: "A",
  name: `${host}.${tld}`,
  content: ip,
  ttl: 3600,
  priority: 10,
  proxied: false
},
{
  headers: {
    Authorization: `Bearer ${apitoken}`,
    "Content-Type": "application/json"
    }
  }).then((response) => {
  const res = response.data;
  if (res.success) {
    resolve({
      success: true,
      zone: res.result?.zone_name,
      name: res.result?.name,
      ip: res.result?.content
  });
} else {
  resolve({ success: false, error: "Gagal membuat DNS record" });
  }
}).catch((error) => {
  const errMsg = error.response?.data?.errors?.[0]?.message || error.response?.data?.errors || error.response?.data || error.response || error;
 resolve({ success: false, error: String(errMsg) });
    });
  });
}

const raw1 = args?.join(" ")?.trim();
if (!raw1) return reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
const host1 = raw1.split("|")[0].trim().replace(/[^a-z0-9.-]/gi, "");
if (!host1) return reply("Host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
const ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
    if (!ip1 || ip1.split(".").length < 4) {
return reply(ip1 ? "IP tidak valid" : "Mana IP-nya");
}
subDomain1(host1, ip1).then((result) => {
if (result.success) {
reply(`
𝗦𝗨𝗖𝗖𝗘𝗦𝗦 𝗠𝗘𝗠𝗕𝗨𝗔𝗧 𝗗𝗢𝗠𝗔𝗜𝗡

*ᴅᴏᴍᴀɪɴ:* ${result.name}
*ɪᴘᴀᴅᴅʀᴇꜱꜱ:* ${result.ip}
*ᴢᴏɴᴇ:* ${result.zone}`);
} else {
reply(`Gagal membuat subdomain\nMsg: ${result.error}`);
        }
    });
}
break;
case 'domain3': {
if (!isOwner) return reply(mess.owner);
await loading();
function subDomain1(host, ip) {
return new Promise((resolve) => {
const zone = config.subdomain.zone3
const apitoken = config.subdomain.token3
const tld = config.subdomain.domain3
axios.post(
  `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
{
  type: "A",
  name: `${host}.${tld}`,
  content: ip,
  ttl: 3600,
  priority: 10,
  proxied: false
},
{
  headers: {
    Authorization: `Bearer ${apitoken}`,
    "Content-Type": "application/json"
    }
  }).then((response) => {
  const res = response.data;
  if (res.success) {
    resolve({
      success: true,
      zone: res.result?.zone_name,
      name: res.result?.name,
      ip: res.result?.content
  });
} else {
  resolve({ success: false, error: "Gagal membuat DNS record" });
  }
}).catch((error) => {
  const errMsg = error.response?.data?.errors?.[0]?.message || error.response?.data?.errors || error.response?.data || error.response || error;
 resolve({ success: false, error: String(errMsg) });
    });
  });
}

const raw1 = args?.join(" ")?.trim();
if (!raw1) return reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
const host1 = raw1.split("|")[0].trim().replace(/[^a-z0-9.-]/gi, "");
if (!host1) return reply("Host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
const ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
    if (!ip1 || ip1.split(".").length < 4) {
return reply(ip1 ? "IP tidak valid" : "Mana IP-nya");
}
subDomain1(host1, ip1).then((result) => {
if (result.success) {
reply(`
𝗦𝗨𝗖𝗖𝗘𝗦𝗦 𝗠𝗘𝗠𝗕𝗨𝗔𝗧 𝗗𝗢𝗠𝗔𝗜𝗡

*ᴅᴏᴍᴀɪɴ:* ${result.name}
*ɪᴘᴀᴅᴅʀᴇꜱꜱ:* ${result.ip}
*ᴢᴏɴᴇ:* ${result.zone}`);
} else {
reply(`Gagal membuat subdomain\nMsg: ${result.error}`);
        }
    });
}
break;
case 'domain4': {
if (!isOwner) return reply(mess.owner);
await loading();
function subDomain1(host, ip) {
return new Promise((resolve) => {
const zone = config.subdomain.zone4
const apitoken = config.subdomain.token4
const tld = config.subdomain.domain4
axios.post(
  `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
{
  type: "A",
  name: `${host}.${tld}`,
  content: ip,
  ttl: 3600,
  priority: 10,
  proxied: false
},
{
  headers: {
    Authorization: `Bearer ${apitoken}`,
    "Content-Type": "application/json"
    }
  }).then((response) => {
  const res = response.data;
  if (res.success) {
    resolve({
      success: true,
      zone: res.result?.zone_name,
      name: res.result?.name,
      ip: res.result?.content
  });
} else {
  resolve({ success: false, error: "Gagal membuat DNS record" });
  }
}).catch((error) => {
  const errMsg = error.response?.data?.errors?.[0]?.message || error.response?.data?.errors || error.response?.data || error.response || error;
 resolve({ success: false, error: String(errMsg) });
    });
  });
}

const raw1 = args?.join(" ")?.trim();
if (!raw1) return reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
const host1 = raw1.split("|")[0].trim().replace(/[^a-z0-9.-]/gi, "");
if (!host1) return reply("Host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
const ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
    if (!ip1 || ip1.split(".").length < 4) {
return reply(ip1 ? "IP tidak valid" : "Mana IP-nya");
}
subDomain1(host1, ip1).then((result) => {
if (result.success) {
reply(`
𝗦𝗨𝗖𝗖𝗘𝗦𝗦 𝗠𝗘𝗠𝗕𝗨𝗔𝗧 𝗗𝗢𝗠𝗔𝗜𝗡  

*ᴅᴏᴍᴀɪɴ:* ${result.name} 
*ɪᴘᴀᴅᴅʀᴇꜱꜱ:* ${result.ip} 
*ᴢᴏɴᴇ:* ${result.zone}`);
} else {
reply(`Gagal membuat subdomain\nMsg: ${result.error}`);
        }
    });
}
break;
case 'domain5': {
if (!isOwner) return reply(mess.owner);
await loading();
function subDomain1(host, ip) {
return new Promise((resolve) => {
const zone = config.subdomain.zone5
const apitoken = config.subdomain.token5
const tld = config.subdomain.domain5
axios.post(
  `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
{
  type: "A",
  name: `${host}.${tld}`,
  content: ip,
  ttl: 3600,
  priority: 10,
  proxied: false
},
{
  headers: {
    Authorization: `Bearer ${apitoken}`,
    "Content-Type": "application/json"
    }
  }).then((response) => {
  const res = response.data;
  if (res.success) {
    resolve({
      success: true,
      zone: res.result?.zone_name,
      name: res.result?.name,
      ip: res.result?.content
  });
} else {
  resolve({ success: false, error: "Gagal membuat DNS record" });
  }
}).catch((error) => {
  const errMsg = error.response?.data?.errors?.[0]?.message || error.response?.data?.errors || error.response?.data || error.response || error;
 resolve({ success: false, error: String(errMsg) });
    });
  });
}

const raw1 = args?.join(" ")?.trim();
if (!raw1) return reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
const host1 = raw1.split("|")[0].trim().replace(/[^a-z0-9.-]/gi, "");
if (!host1) return reply("Host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
const ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
    if (!ip1 || ip1.split(".").length < 4) {
return reply(ip1 ? "IP tidak valid" : "Mana IP-nya");
}
subDomain1(host1, ip1).then((result) => {
if (result.success) {
reply(`
𝗦𝗨𝗖𝗖𝗘𝗦𝗦 𝗠𝗘𝗠𝗕𝗨𝗔𝗧 𝗗𝗢𝗠𝗔𝗜𝗡  

*ᴅᴏᴍᴀɪɴ:* ${result.name} 
*ɪᴘᴀᴅᴅʀᴇꜱꜱ:* ${result.ip} 
*ᴢᴏɴᴇ:* ${result.zone}`);
} else {
reply(`Gagal membuat subdomain\nMsg: ${result.error}`);
        }
    });
}
break;
case 'deldomain1': {
    if (!isOwner) return reply(mess.owner);
    await loading();
    function deleteSubDomain(host) {
        return new Promise((resolve) => {
            const zone = config.subdomain.zone;
            const apitoken = config.subdomain.token;
            const tld = config.subdomain.domain;
            axios.get(`https://api.cloudflare.com/client/v4/zones/${zone}/dns_records?name=${host}.${tld}`, {
                headers: {
                    Authorization: `Bearer ${apitoken}`,
                    "Content-Type": "application/json"
                }
            }).then((response) => {
                const res = response.data;
                if (res.success && res.result.length > 0) {
                    const recordId = res.result[0].id;
                    axios.delete(`https://api.cloudflare.com/client/v4/zones/${zone}/dns_records/${recordId}`, {
                        headers: {
                            Authorization: `Bearer ${apitoken}`,
                            "Content-Type": "application/json"
                        }
                    }).then((deleteResponse) => {
                        const deleteRes = deleteResponse.data;
                        if (deleteRes.success) {
                            resolve({
                                success: true,
                                name: `${host}.${tld}`
                            });
                        } else {
                            resolve({ success: false, error: "Gagal menghapus DNS record" });
                        }
                    }).catch((error) => {
                        const errMsg = error.response?.data?.errors?.[0]?.message || error.response?.data?.errors || error.response?.data || error.response || error;
                        resolve({ success: false, error: String(errMsg) });
                    });
                } else {
                    resolve({ success: false, error: "DNS record tidak ditemukan" });
                }
            }).catch((error) => {
                const errMsg = error.response?.data?.errors?.[0]?.message || error.response?.data?.errors || error.response?.data || error.response || error;
                resolve({ success: false, error: String(errMsg) });
            });
        });
    }
    const raw1 = args?.join(" ")?.trim();
    if (!raw1) return reply("PENGGUNAAN .deldomain1 hostname");
    const host1 = raw1.trim().replace(/[^a-z0-9.-]/gi, "");
    if (!host1) return reply("Host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");

    deleteSubDomain(host1).then((result) => {
        if (result.success) {
            reply(`
𝗦𝗨𝗖𝗖𝗘𝗦𝗦 𝗠𝗘𝗡𝗚𝗛𝗔𝗣𝗨𝗦 𝗗𝗢𝗠𝗔𝗜𝗡

*ᴅᴏᴍᴀɪɴ:* ${result.name}`);
        } else {
            reply(`Gagal menghapus subdomain\nMsg: ${result.error}`);
        }
    });
}
break;
case 'deldomain2': {
    if (!isOwner) return reply(mess.owner);
    await loading();
    function deleteSubDomain(host) {
        return new Promise((resolve) => {
            const zone = config.subdomain.zone2;
            const apitoken = config.subdomain.token2;
            const tld = config.subdomain.domain2;
            axios.get(`https://api.cloudflare.com/client/v4/zones/${zone}/dns_records?name=${host}.${tld}`, {
                headers: {
                    Authorization: `Bearer ${apitoken}`,
                    "Content-Type": "application/json"
                }
            }).then((response) => {
                const res = response.data;
                if (res.success && res.result.length > 0) {
                    const recordId = res.result[0].id;
                    axios.delete(`https://api.cloudflare.com/client/v4/zones/${zone}/dns_records/${recordId}`, {
                        headers: {
                            Authorization: `Bearer ${apitoken}`,
                            "Content-Type": "application/json"
                        }
                    }).then((deleteResponse) => {
                        const deleteRes = deleteResponse.data;
                        if (deleteRes.success) {
                            resolve({
                                success: true,
                                name: `${host}.${tld}`
                            });
                        } else {
                            resolve({ success: false, error: "Gagal menghapus DNS record" });
                        }
                    }).catch((error) => {
                        const errMsg = error.response?.data?.errors?.[0]?.message || error.response?.data?.errors || error.response?.data || error.response || error;
                        resolve({ success: false, error: String(errMsg) });
                    });
                } else {
                    resolve({ success: false, error: "DNS record tidak ditemukan" });
                }
            }).catch((error) => {
                const errMsg = error.response?.data?.errors?.[0]?.message || error.response?.data?.errors || error.response?.data || error.response || error;
                resolve({ success: false, error: String(errMsg) });
            });
        });
    }
    const raw1 = args?.join(" ")?.trim();
    if (!raw1) return reply("PENGGUNAAN .deldomain1 hostname");
    const host1 = raw1.trim().replace(/[^a-z0-9.-]/gi, "");
    if (!host1) return reply("Host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");

    deleteSubDomain(host1).then((result) => {
        if (result.success) {
            reply(`
𝗦𝗨𝗖𝗖𝗘𝗦𝗦 𝗠𝗘𝗡𝗚𝗛𝗔𝗣𝗨𝗦 𝗗𝗢𝗠𝗔𝗜𝗡

*ᴅᴏᴍᴀɪɴ:* ${result.name}`);
        } else {
            reply(`Gagal menghapus subdomain\nMsg: ${result.error}`);
        }
    });
}
break;
case 'deldomain3': {
    if (!isOwner) return reply(mess.owner);
    await loading();
    function deleteSubDomain(host) {
        return new Promise((resolve) => {
            const zone = config.subdomain.zone3;
            const apitoken = config.subdomain.token3;
            const tld = config.subdomain.domain3;
            axios.get(`https://api.cloudflare.com/client/v4/zones/${zone}/dns_records?name=${host}.${tld}`, {
                headers: {
                    Authorization: `Bearer ${apitoken}`,
                    "Content-Type": "application/json"
                }
            }).then((response) => {
                const res = response.data;
                if (res.success && res.result.length > 0) {
                    const recordId = res.result[0].id;
                    axios.delete(`https://api.cloudflare.com/client/v4/zones/${zone}/dns_records/${recordId}`, {
                        headers: {
                            Authorization: `Bearer ${apitoken}`,
                            "Content-Type": "application/json"
                        }
                    }).then((deleteResponse) => {
                        const deleteRes = deleteResponse.data;
                        if (deleteRes.success) {
                            resolve({
                                success: true,
                                name: `${host}.${tld}`
                            });
                        } else {
                            resolve({ success: false, error: "Gagal menghapus DNS record" });
                        }
                    }).catch((error) => {
                        const errMsg = error.response?.data?.errors?.[0]?.message || error.response?.data?.errors || error.response?.data || error.response || error;
                        resolve({ success: false, error: String(errMsg) });
                    });
                } else {
                    resolve({ success: false, error: "DNS record tidak ditemukan" });
                }
            }).catch((error) => {
                const errMsg = error.response?.data?.errors?.[0]?.message || error.response?.data?.errors || error.response?.data || error.response || error;
                resolve({ success: false, error: String(errMsg) });
            });
        });
    }
    const raw1 = args?.join(" ")?.trim();
    if (!raw1) return reply("PENGGUNAAN .deldomain1 hostname");
    const host1 = raw1.trim().replace(/[^a-z0-9.-]/gi, "");
    if (!host1) return reply("Host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");

    deleteSubDomain(host1).then((result) => {
        if (result.success) {
            reply(`
𝗦𝗨𝗖𝗖𝗘𝗦𝗦 𝗠𝗘𝗡𝗚𝗛𝗔𝗣𝗨𝗦 𝗗𝗢𝗠𝗔𝗜𝗡

*ᴅᴏᴍᴀɪɴ:* ${result.name}`);
        } else {
            reply(`Gagal menghapus subdomain\nMsg: ${result.error}`);
        }
    });
}
break;
case 'deldomain4': {
    if (!isOwner) return reply(mess.owner);
    await loading();
    function deleteSubDomain(host) {
        return new Promise((resolve) => {
            const zone = config.subdomain.zone4;
            const apitoken = config.subdomain.token4;
            const tld = config.subdomain.domain4;
            axios.get(`https://api.cloudflare.com/client/v4/zones/${zone}/dns_records?name=${host}.${tld}`, {
                headers: {
                    Authorization: `Bearer ${apitoken}`,
                    "Content-Type": "application/json"
                }
            }).then((response) => {
                const res = response.data;
                if (res.success && res.result.length > 0) {
                    const recordId = res.result[0].id;
                    axios.delete(`https://api.cloudflare.com/client/v4/zones/${zone}/dns_records/${recordId}`, {
                        headers: {
                            Authorization: `Bearer ${apitoken}`,
                            "Content-Type": "application/json"
                        }
                    }).then((deleteResponse) => {
                        const deleteRes = deleteResponse.data;
                        if (deleteRes.success) {
                            resolve({
                                success: true,
                                name: `${host}.${tld}`
                            });
                        } else {
                            resolve({ success: false, error: "Gagal menghapus DNS record" });
                        }
                    }).catch((error) => {
                        const errMsg = error.response?.data?.errors?.[0]?.message || error.response?.data?.errors || error.response?.data || error.response || error;
                        resolve({ success: false, error: String(errMsg) });
                    });
                } else {
                    resolve({ success: false, error: "DNS record tidak ditemukan" });
                }
            }).catch((error) => {
                const errMsg = error.response?.data?.errors?.[0]?.message || error.response?.data?.errors || error.response?.data || error.response || error;
                resolve({ success: false, error: String(errMsg) });
            });
        });
    }
    const raw1 = args?.join(" ")?.trim();
    if (!raw1) return reply("PENGGUNAAN .deldomain1 hostname");
    const host1 = raw1.trim().replace(/[^a-z0-9.-]/gi, "");
    if (!host1) return reply("Host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");

    deleteSubDomain(host1).then((result) => {
        if (result.success) {
            reply(`
𝗦𝗨𝗖𝗖𝗘𝗦𝗦 𝗠𝗘𝗡𝗚𝗛𝗔𝗣𝗨𝗦 𝗗𝗢𝗠𝗔𝗜𝗡

*ᴅᴏᴍᴀɪɴ:* ${result.name}`);
        } else {
            reply(`Gagal menghapus subdomain\nMsg: ${result.error}`);
        }
    });
}
break;
case 'deldomain5': {
    if (!isOwner) return reply(mess.owner);
    await loading();
    function deleteSubDomain(host) {
        return new Promise((resolve) => {
            const zone = config.subdomain.zone5;
            const apitoken = config.subdomain.token5;
            const tld = config.subdomain.domain5;
            axios.get(`https://api.cloudflare.com/client/v4/zones/${zone}/dns_records?name=${host}.${tld}`, {
                headers: {
                    Authorization: `Bearer ${apitoken}`,
                    "Content-Type": "application/json"
                }
            }).then((response) => {
                const res = response.data;
                if (res.success && res.result.length > 0) {
                    const recordId = res.result[0].id;
                    axios.delete(`https://api.cloudflare.com/client/v4/zones/${zone}/dns_records/${recordId}`, {
                        headers: {
                            Authorization: `Bearer ${apitoken}`,
                            "Content-Type": "application/json"
                        }
                    }).then((deleteResponse) => {
                        const deleteRes = deleteResponse.data;
                        if (deleteRes.success) {
                            resolve({
                                success: true,
                                name: `${host}.${tld}`
                            });
                        } else {
                            resolve({ success: false, error: "Gagal menghapus DNS record" });
                        }
                    }).catch((error) => {
                        const errMsg = error.response?.data?.errors?.[0]?.message || error.response?.data?.errors || error.response?.data || error.response || error;
                        resolve({ success: false, error: String(errMsg) });
                    });
                } else {
                    resolve({ success: false, error: "DNS record tidak ditemukan" });
                }
            }).catch((error) => {
                const errMsg = error.response?.data?.errors?.[0]?.message || error.response?.data?.errors || error.response?.data || error.response || error;
                resolve({ success: false, error: String(errMsg) });
            });
        });
    }
    const raw1 = args?.join(" ")?.trim();
    if (!raw1) return reply("PENGGUNAAN .deldomain1 hostname");
    const host1 = raw1.trim().replace(/[^a-z0-9.-]/gi, "");
    if (!host1) return reply("Host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");

    deleteSubDomain(host1).then((result) => {
        if (result.success) {
            reply(`
𝗦𝗨𝗖𝗖𝗘𝗦𝗦 𝗠𝗘𝗡𝗚𝗛𝗔𝗣𝗨𝗦 𝗗𝗢𝗠𝗔𝗜𝗡

*ᴅᴏᴍᴀɪɴ:* ${result.name}`);
        } else {
            reply(`Gagal menghapus subdomain\nMsg: ${result.error}`);
        }
    });
}
break;
case 'listdnsrecord': {
    if (!isOwner) return reply(mess.owner);
    await loading();
    
    const zones = [
        { id: config.subdomain.zone, token: config.subdomain.token },
        { id: config.subdomain.zone2, token: config.subdomain.token2 },
        { id: config.subdomain.zone3, token: config.subdomain.token3 },
        { id: config.subdomain.zone4, token: config.subdomain.token4 },
        { id: config.subdomain.zone5, token: config.subdomain.token5 },
    ];

    let no = 1; 
    function listDNSRecords(zone) {
        return new Promise((resolve) => {
            const version = 'V' + no++;
            axios.get(`https://api.cloudflare.com/client/v4/zones/${zone.id}/dns_records`, {
                headers: {
                    Authorization: `Bearer ${zone.token}`,
                    "Content-Type": "application/json"
                }
            })
            .then((response) => {
                const res = response.data;
                if (res.success) {
                    const records = res.result;
                    if (records.length > 0) {
                        let message = `\n=== DNS RECORD DOMAIN ${version} ===\n\n`;
                        records.forEach(record => {
                            message += `*Tipe:* ${record.type}
*Nama:* ${record.name}
*Konten:* ${record.content}
*TTL:* ${record.ttl}\n`;
                        });
                        resolve(message);
                    } else {
                        resolve(`Tidak ada DNS records ditemukan untuk Zona ${zone.id}.\n`);
                    }
                } else {
                    resolve(`Gagal mengambil DNS records untuk Zona ${zone.id}: ${res.errors.map(err => err.message).join(", ")}\n`);
                }
            })
            .catch((error) => {
                const errMsg = error.response?.data?.errors?.[0]?.message || error.message;
                resolve(`Terjadi kesalahan saat mengambil DNS records untuk Zona ${zone.id}: ${errMsg}\n`);
            });
        });
    }

    const promises = zones.map(zone => listDNSRecords(zone));

    Promise.all(promises).then(results => {
        const finalMessage = results.join("\n");
        reply(finalMessage);
    });
}
break;
//<=================================>//
//<========= DO MENU ==========>//
//<=================================>//
case 'listdo':
case 'listdroplet': {
  if (!isOwner) return reply(mess.owner);
  await loading()
  try {
    const getDroplets = async () => {
      const response = await fetch('https://api.digitalocean.com/v2/droplets', {
        headers: {
          Authorization: "Bearer " + config.do.api_token
        }
      });
      if (!response.ok) {
        throw new Error('Gagal mengambil data droplets');
      }
      const data = await response.json();
      return data.droplets || [];
    };

    getDroplets().then(droplets => {
      let totalvps = droplets.length;
      let mesej = `List Droplet Digital Ocean Anda: ${totalvps}\n\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;

      if (totalvps === 0) {
        mesej += 'Tidak ada Droplet yang tersedia.';
      } else {
        droplets.forEach(droplet => {
          const ipv4Addresses = droplet.networks.v4.filter(network => network.type === "public");
          const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';
          mesej += `- Droplet Id: ${droplet.id}\n- Hostname: ${droplet.name}\n- Username Login: root\n- IP: ${ipAddress}\n- Ram: ${droplet.memory} MB\n- Cpu: ${droplet.vcpus} CPU\n- OS: ${droplet.image.distribution}\n- Storage: ${droplet.disk} GB\n- Status: ${droplet.status}\n▬▭▬▭▬▭▬▭▬▭▬▭▬\n`;
        });
      }
      reply(mesej);
    }).catch(error => {
      reply('Error fetching droplets: ' + error);
    });
  } catch (err) {
    reply('Terjadi kesalahan saat mengambil data droplet: ' + err);
  }
}
break
case 'createdroplet':
case 'createvps':
case 'createdo': {
  if (!isOwner) return reply(mess.owner);
  
  let input = args[0];
  if (!input) return reply(`_Masukan ukuran VPS, OS, dan hostname dalam format: *${prefix+command} ram,os,hostname.*_

*List Os :*
ubuntu-20-04
ubuntu-22-04
ubuntu-24-10
debian-11
debian-12 
almalinux-8 
almalinux-9 
rocky-linux-8

*List Ram:*
1g1c 
2g1c
2g2c
4g2c
8g4c
16g8c

*Contoh :*
_${prefix+command} *16g8c,ubuntu-20-04,Yudzxml*_
`);

  let [size, os, hostname] = input.split(',');
  if (!size || !os || !hostname) return reply(`_Format Tidak Valid Gunakan Perintah: *${prefix+command} ram,os,hostname.*_

*List Os :*
ubuntu-20-04
ubuntu-22-04
ubuntu-24-10
debian-11
debian-12 
almalinux-8 
almalinux-9 
rocky-linux-8

*List Ram:*
1g1c 
2g1c
2g2c
4g2c
8g4c
16g8c

*Contoh :*
_${prefix+command} *16g8c,ubuntu-20-04,Yudzxml*_`);

  const sizeMap = {
    "1g1c": 's-1vcpu-1gb',
    "2g1c": 's-1vcpu-2gb',
    "2g2c": 's-2vcpu-2gb',
    "4g2c": 's-2vcpu-4gb',
    "8g4c": 's-4vcpu-8gb',
    "16g8c": 's-8vcpu-16gb'
  };

  let dropletSize = sizeMap[size.trim()];
  if (!dropletSize) return reply('Ukuran VPS tidak valid. Pilih dari: 1g1c, 2g1c, 2g2c, 4g2c, 8g4c, 16g8c.');

  // Mapping OS ke image slug
  const osMap = {
    "ubuntu-20-04": 'ubuntu-20-04-x64', // Ubuntu 20.04 LTS
    "ubuntu-22-04": 'ubuntu-22-04-x64', // Ubuntu 22.04 LTS
    "ubuntu-24-10": 'ubuntu-24-10-x64', // Ubuntu 24.10
    "debian-11": 'debian-11-x64',       // Debian 11.0
    "debian-12": 'debian-12-x64',       // Debian 12.0
    "almalinux-8": 'almalinux-8-x64',   // AlmaLinux 8.6
    "almalinux-9": 'almalinux-9-x64',   // AlmaLinux 9
    "rocky-linux-8": 'rocky-linux-8-x64' // Rocky Linux 8
  };

  let dropletImage = osMap[os.trim().toLowerCase()];
  if (!dropletImage) return reply('OS tidak valid. Pilih dari: ubuntu-20-04, ubuntu-22-04, ubuntu-24-10, debian-11, debian-12, almalinux-8, almalinux-9, rocky-linux-8.');

  try {
    let dropletData = {
      name: hostname.trim(),
      region: 'sgp1',
      size: dropletSize,
      image: dropletImage,
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T']
    };

    let password = generateRandomPassword();
    dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + config.do.api_token
      },
      body: JSON.stringify(dropletData)
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;

      await loading();
      await new Promise(resolve => setTimeout(resolve, 60000));

      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + config.do.api_token
        }
      });

      let dropletData = await dropletResponse.json();
      let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 ? dropletData.droplet.networks.v4[0].ip_address : "Tidak ada alamat IP yang tersedia";

      let messageText = `VPS berhasil dibuat!\n\n`;
      messageText += `ID: ${dropletId}\n`;
      messageText += `IP VPS: ${ipVPS}\n`;
      messageText += `Password: ${password}\n`;
      await reply(messageText);
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
  }
}
break
case 'dropletaction':
case 'dropaction':
case 'actiondo': {
  if (!isOwner) return reply(mess.owner);

  let input = args[0]; 
  if (!input) return reply(`_Masukan Perintah! Dengan Format: *${prefix+command} id,action*_

_Contoh : *${prefix+command} 654xxx,reboot*_

_Ketik .listdo Untuk Melihat Id Droplet_

*List Action:*
reboot : Untuk Me-restart Droplet/Vps
turnon : Untuk Mengaktifkan Droplet
turnoff : Untuk Mematikan Droplet 

_*Warning !!* Mematikan Droplet Tidak Akan Menghapus Droplet, Kamu Akan Tetap Dikenai Biaya Yang Telah Ditentukan!!_`);

  let [dropletId, actionType] = input.split(','); // Memisahkan ID dan aksi

  if (!dropletId) return reply('ID droplet belum diberikan.');
  if (!actionType) return reply('Tipe aksi belum diberikan. Gunakan "restart", "turnoff", atau "turnon".');

  const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`;
  let actionBody;

  // Menentukan jenis aksi menggunakan if-else
  if (actionType.toLowerCase() === "restart") {
    actionBody = { type: 'reboot' };
  } else if (actionType.toLowerCase() === "turnoff") {
    actionBody = { type: 'power_off' };
  } else if (actionType.toLowerCase() === "turnon") {
    actionBody = { type: 'power_on' };
  } else {
    return reply('Tipe aksi tidak dikenal. Gunakan "restart", "turnoff", atau "turnon".');
  }

  const performAction = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${config.do.api_token}`
        },
        body: JSON.stringify(actionBody)
      });

      if (response.ok) {
        const data = await response.json();
        reply(`Aksi ${actionType} VPS berhasil dimulai. Status aksi: ${data.action.status}`);
      } else {
        const errorData = await response.json();
        reply(`Gagal melakukan aksi ${actionType} VPS: ${errorData.message}`);
      }
    } catch (error) {
      reply(`Terjadi kesalahan saat melakukan aksi ${actionType} VPS: ${error.message}`);
    }
  };

  performAction();
}
break;
case 'deldroplet':
case 'deletedo':
case 'deldo': {
  if (!isOwner) return reply(mess.owner);
  let dropletId = args[0];
  if (!dropletId) return reply('Masukkan ID VPS yang ingin dihapus.');
  await loading()
  try {
    let response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + config.do.api_token
      }
    });

    if (response.ok) {
      await reply(`VPS dengan ID ${dropletId} berhasil dihapus.`);
    } else {
      let responseData = await response.json();
      throw new Error(`Gagal menghapus VPS: ${responseData.message}`);
    }
  } catch (err) {
    console.error(err);
    reply(`Terjadi kesalahan saat menghapus VPS: ${err}`);
  }
}
break;
case 'rebuildvps': {
  if (!isOwner) return reply(mess.owner);
  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan.');
  await loading();
  const rebuildVPS = async () => {
    try {
      const response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${config.do.api_token}`
        },
        body: JSON.stringify({
          type: 'rebuild',
          image: 'ubuntu-20-04-x64'
        })
      });

      if (response.ok) {
        const data = await response.json();
        reply(`Rebuild VPS berhasil dimulai. Status aksi: ${data.action.status}`);
        await sleep(60000);
        const vpsInfo = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${config.do.api_token}`
          }
        });

        if (vpsInfo.ok) {
          const vpsData = await vpsInfo.json();
          const droplet = vpsData.droplet;
          const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
          const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';

          const textvps = `*VPS SUKSES REBUILD*\nIP VPS: ${ipAddress}\nSYSTEM IMAGE: ${droplet.image.slug}`;
          reply(textvps);
        } else {
          reply('Gagal mendapatkan informasi VPS setelah rebuild.');
        }
      } else {
        const errorData = await response.json();
        reply(`Gagal melakukan rebuild VPS: ${errorData.message}`);
      }
    } catch (error) {
      reply(`Terjadi kesalahan saat melakukan rebuild VPS: ${error}`);
    }
  };
  
  rebuildVPS();
}
break;
case 'cekdo':
case 'cekdroplet': {
  if (!isOwner) return reply(mess.owner);
  let dropletId = args[0];
  if (!dropletId) return reply('ID droplet belum diberikan.');
  await loading()
  const getDropletInfo = async (dropletId) => {
    try {
      const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}`;
      const response = await fetch(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${config.do.api_token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        const droplet = data.droplet;
        const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
        const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP';
        const vpsRam = droplet.memory / 1024;
        return {
          dropletid: droplet.id,
          username: droplet.name,
          ip: ipAddress,
          ram: `${vpsRam} GB`,
          os: droplet.image.distribution,
          cpu: `${droplet.vcpus} vCPU${droplet.vcpus > 1 ? 's' : ''}`,
          storage: droplet.disk,
          status: droplet.status
        };
      } else {
        const errorData = await response.json();
        throw new Error(`Gagal memeriksa detail droplet: ${errorData.message}`);
      }
    } catch (error) {
      reply(`Terjadi kesalahan saat memeriksa detail droplet: ${error.message}`);
      throw new Error('Terjadi kesalahan saat memeriksa detail droplet.');
    }
  };

  getDropletInfo(dropletId)
    .then((info) => {
      let textku = `*DETAIL VPS ANDA*\nDroplet Id: ${info.dropletid}\nHostname: ${info.username}\nIPv4: ${info.ip}\nRAM: ${info.ram}\nOS: ${info.os}\nCPU: ${info.cpu}\nStorage: ${info.storage}\nStatus: ${info.status}`;
      reply(textku);
    })
    .catch((err) => {
      console.error(err);
      reply('Terjadi kesalahan saat memeriksa detail VPS.');
    });
}
break;
case 'sisado':
case 'sisadroplet': {
  if (!isOwner) return reply(mess.owner);
await loading()
  async function getDropletInfo() {
    try {
      const accountResponse = await axios.get('https://api.digitalocean.com/v2/account', {
        headers: {
          Authorization: `Bearer ${config.do.api_token}`,
        },
      });

      const dropletsResponse = await axios.get('https://api.digitalocean.com/v2/droplets', {
        headers: {
          Authorization: `Bearer ${config.do.api_token}`,
        },
      });

      if (accountResponse.status === 200 && dropletsResponse.status === 200) {
        const dropletLimit = accountResponse.data.account.droplet_limit;
        const dropletsCount = dropletsResponse.data.droplets.length;
        const remainingDroplets = dropletLimit - dropletsCount;

        return {
          dropletLimit,
          remainingDroplets,
          totalDroplets: dropletsCount,
        };
      } else {
        throw new Error('Gagal mendapatkan data akun DigitalOcean atau droplet.');
      }
    } catch (error) {
      throw new Error(`Terjadi kesalahan saat mendapatkan informasi droplet: ${error.message}`);
    }
  }
  async function sisadropletHandler() {
    try {
      const dropletInfo = await getDropletInfo();
      reply(`*Sisa Droplet Yang Dapat Anda Pakai: ${dropletInfo.remainingDroplets}*

*Total Droplet Yang Sudah Terpakai: ${dropletInfo.totalDroplets}*`);
    } catch (error) {
      reply(`Terjadi kesalahan: ${error.message}`);
    }
  }

  sisadropletHandler();
}
break;
//<=================================>//
//<========= CPANEL MENU ==========>//
//<=================================>//
case '1gb': 
case '2gb':
case '3gb':
case '4gb':
case '5gb':
case '6gb':
case '7gb':
case '8gb':
case '9gb':
case '10gb':
case 'unli': {
var ramnya
var disknya
var cpunya
if (command == '1gb') {
ramnya = '1125'
disknya = '1125'
cpunya = '40'
} else if (command == '2gb') {
ramnya = '2125'
disknya = '2125'
cpunya = '60'
} else if (command == '3gb') {
ramnya = '3125'
disknya = '3125'
cpunya = '80'
} else if (command == '4gb') {
ramnya = '4125'
disknya = '4125'
cpunya = '100'
} else if (command == '5gb') {
ramnya = '5125'
disknya = '5125'
cpunya = '120'
} else if (command == '6gb') {
ramnya = '6125'
disknya = '6125'
cpunya = '140'
} else if (command == '7gb') {
ramnya = '7125'
disknya = '7125'
cpunya = '160'
} else if (command == '8gb') {
ramnya = '8125'
disknya = '8125'
cpunya = '180'
} else if (command == '9gb') {
ramnya = '9124'
disknya = '9125'
cpunya = '200'
} else if (command == '10gb') {
ramnya = '10125'
disknya = '10125'
cpunya = '220'
} if (command == 'unli') {
ramnya = '0'
disknya = '0'
cpunya = '0'
}
if (!isOwner && !(isReseller)) return reply(mess.owner)
let t = text.split(',');
if (t.length < 3) return reply(`*Format salah!*
Penggunaan:
${prefix + command} Yudzxml,628xxx,30\n\n30 artinya 30 hari`);

let username = t[0];
let numberAddrepm = t[1].replace(/[^0-9]/g, '');
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];

let daysToAdd = parseInt(t[2], 10);
if (isNaN(daysToAdd) || daysToAdd <= 0) {
    return reply(`*Masa aktif harus berupa angka positif!*`);
}
if (daysToAdd > 30) {
    daysToAdd = 30;
    return reply(`*Batas Waktu Maximal 30 Hari.*`);
}

const currentDate = new Date();
const expirationDate = new Date(currentDate.getTime() + (daysToAdd * 24 * 60 * 60 * 1000));

if (!db_panel) {
    db_panel = {};
}
const remainingDays = Math.ceil((expirationDate.getTime() - currentDate.getTime()) / (24 * 60 * 60 * 1000));
let name = username
let akunlo = 'https://autoresbot.com/tmp_files/a82bbbf1-5306-4244-a1cf-ea8d24166b14.jpg' 
let egg = '15'
let loc = '1'
let email = username + '@gmail.com'
if (!u) return
let d = (await Yudzxml.onWhatsApp(u.split`@`[0]))[0] || {}
let password = d.exists ? crypto.randomBytes(5).toString('hex') : t[3]
let f = await fetch(config.panel.domain + '/api/application/users', {
'method': 'POST',
'headers': {
'Accept': 'application/json',
'Content-Type': 'application/json',
'Authorization': 'Bearer ' + config.panel.plta
},
'body': JSON.stringify({
'email': email,
'username': username,
'first_name': username,
'last_name': username,
'language': 'en',
'password': password.toString()
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(config.panel.domain + '/api/application/nests/5/eggs/' + egg, {
'method': 'GET',
'headers': {
'Accept': 'application/json',
'Content-Type': 'application/json',
'Authorization': 'Bearer ' + config.panel.plta
}
})
reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`)
let cpanellu = (`
*HAI @${u.split`@`[0]} INI DATA AKUN PANEL ANDA* *DARI @${m?.sender.split('@')[0]}*

*TERIMA KASIH SUDAH BERLANGGANAN DI STORE KAMI*

 *👤USERNAME* : ⬇️
 ${user.username}
 
 *🔐PASSWORD* : ⬇️
 ${password.toString()}
 
 *🌐LOGIN* : ⬇️
 ${config.panel.domain}

*⏰ MASA AKTIF* : ⬇️
${remainingDays} Hari

`+readmore+`
*PROFIT :*
- *BISA GANTI GANTI SC*
- *BOT DAPAT ON 24 JAM*
- *WEB CLOSE BOT ON*
- *GAK BOROS KUOTA*
- *GAK ABISIN RAM HP*
- *GARANSI 20 DAY*

*NOTES :*
- *JAGA BAIK² DATA PANEL ANDA*
- *OWN HANYA MENGIRIM 1X DATA*
- *MASUK GROUP UNTUK INFO*
- *SS PANEL DENGAN CP .DONE*
- *HUB ONW JIKA ADA KENDALA*
- *NO RUN SC DDOS*
- *NO DDOS DOMAIN*
- *NO SEBAR DOMAIN*

*LANGGAR? DI DELETE NO REFF*
*YUDZXML STORE 77* 
`)
Yudzxml.sendMessage(u,{image: {url: akunlo}, caption: cpanellu }, { quoted: m })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(config.panel.domain + '/api/application/servers', {
'method': 'POST',
'headers': {
'Accept': 'application/json',
'Content-Type': 'application/json',
'Authorization': 'Bearer ' + config.panel.plta,
},
'body': JSON.stringify({
'name': name,
'description': config.ownername,
'user': user.id,
'egg': parseInt(egg),
'docker_image': 'ghcr.io/parkervcp/yolks:nodejs_18',
'startup': startup_cmd,
'environment': {
'INST': 'npm',
'USER_UPLOAD': '0',
'AUTO_UPDATE': '0',
'CMD_RUN': 'npm start'
},
'limits': {
'memory': ramnya,
'swap': 0,
'disk': disknya,
'io': 500,
'cpu': cpunya
},
'feature_limits': {
'databases': 0,
'backups': 0,
'allocations': 0
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
*Sukses Creat Panel ✅*`+readmore+`
┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
┣━━━━━━━━━━━━━━━━━━┓
┃ *Email :* ${email}
┃ *Username :* ${user.username}
┃ *ID Server :* ${server.id}
┃ *ID User :* ${user.id}
┃ *Ram :* ${ramnya} MB
┃ *Disk :* ${disknya} MB
┃ *CPU :* ${cpunya}%
┃ *Created :* ${pushname}
┃ *Made Today:* ${hariini}
┃ *O'clock :* ${time}
┣━━━━━━━━━━━━━━━━━━┫
┗━━━━━━━━━━━━━━━━━━┛\n
Username dan Password Telah Dikirim
Ke @${u.split`@`[0]} Bang @${m?.sender.split('@')[0]}`);

db_panel[numberAddrepm] = {
    user: email,
    ram: ramnya,
    disk: disknya,
    cpu: cpunya,
    serverid: server.id,
    userid: user.id,
    expired: expirationDate.getTime(),
    start: currentDate.getTime()
};
try {
    fs.writeFileSync('./Storage/db/panel.json', JSON.stringify(db_panel, null, 2));
} catch (error) {
    console.error('Error saat menyimpan ke database:', error);
    return reply(`Terjadi kesalahan saat menyimpan data panel.`);
}
}
break
case 'listserver': {
    if (!isOwner) return reply(mess.owner);
    await loading();
    try {
let f = await fetch(config.panel.domain + '/api/application/servers?page=1', {
method: 'GET',
headers: {
'Accept': 'application/json',
'Content-Type': 'application/json',
'Authorization': 'Bearer ' + config.panel.plta
 }
});

        let res = await f.json();
        let hasil = res.data;
        let messageText = '*🌐 LIST SERVER PANEL BOT*\n\n';

        for (let server of hasil) {
            let s = server.attributes;
            let f3 = await fetch(config.panel.domain + '/api/client/servers/' + s.uuid.split('-')[0] + '/resources', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + config.panel.pltc
                }
            });
            let data = await f3.json();
            let status = data.attributes ? data.attributes.current_state : s.status;

            messageText += `*┌ ◦* ID Server *${s.id}*\n`;
            messageText += `*│ ◦* Nama Server *${s.name}*\n`;
            messageText += `*│ ◦* Ram *${s.limits.memory === 0 ? 'Unlimited' : (s.limits.memory > 1024 ? (s.limits.memory / 1024) + 'GB' : s.limits.memory + 'MB')}*\n`;
            messageText += `*│ ◦* CPU *${s.limits.cpu === 0 ? 'Unlimited' : s.limits.cpu + '%'}*\n`;
            messageText += `*└ ◦* Storage *${s.limits.disk === 0 ? 'Unlimited' : (s.limits.disk > 1024 ? (s.limits.disk / 1024) + 'GB' : s.limits.disk + 'MB')}*\n\n`;
        }

        messageText += ` Total Server : *${res.meta.pagination.count} Server*`;

        await Yudzxml.sendMessage(m.chat, { text: messageText }, { quoted: m });
    } catch (error) {
        console.error(error);
        reply('Terjadi kesalahan saat mengambil data server. Silakan coba lagi nanti.');
    }
}
break;
case 'delserver': {
if (!isOwner) return reply(mess.owner)
if (!args[0]) return reply("idservernya?\n\nuntuk melihat id server ketik *.listserver*")
await loading();
let f = await fetch(config.panel.domain + "/api/application/servers?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + config.panel.plta
}
})
let result = await f.json()
let hasil = result.data
let sections = []
for (let server of hasil) {
let s = server.attributes
if (args[0] == s.id.toString()) {
sections.push(s.name.toLowerCase())
let f = await fetch(config.panel.domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + config.panel.plta,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(config.panel.domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + config.panel.plta
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (sections.includes(u.username)) {
let delusr = await fetch(config.panel.domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + config.panel.plta
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections.length == 0) return reply("*ID Server/User* Tidak Ditemukan")
reply(`Berhasil Menghapus Akun Panel *${capital(sections[0])}*`)
}
break
case 'addadmin': {
    if (!isOwner) return reply(mess.owner);
    
    let t = text.split(',');
    if (t.length < 2) return reply(`*Format salah!*
    Penggunaan:
    ${prefix + command} Yudzxml,628xxx`);

    let username = t[0].trim();
    let numberAddrepm = t[1].replace(/[^0-9]/g, '');
    let u = m.quoted ? m.quoted.sender : (t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0]);
    
    await loading();
    try {
    let email = `${username}@gmail.com`;
    let name = capital(username);
    let password = username + crypto.randomBytes(2).toString('hex');
    
    await reply(`_Sedang Membuat Server untuk @${u.split`@`[0]} bang @${pushname}_`);
    
    let f = await fetch(`${config.panel.domain}/api/application/users`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${config.panel.plta}`
        },
        body: JSON.stringify({
            email: email,
            username: username.toLowerCase(),
            first_name: name,
            last_name: "Admin",
            root_admin: true,
            language: "en",
            password: password
        })
    });
    let data = await f.json();
    if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
    
    let user = data.attributes;
    await reply(`
    *Sukses Creat Akun Admin ✅*` + readmore + `
    ┏━  ⬣『 *DATA  AKUN*  』⬣  ━┓
    ┣━━━━━━━━━━━━━━━━━━┓
    ┃ *Email :* ${email}
    ┃ *Username :* ${user.username}
    ┃ *ID User :* ${user.id}
    ┃ *Created :* ${pushname}
    ┃ *Made Today:* ${hariini}
    ┃ *O'clock :* ${time}
    ┣━━━━━━━━━━━━━━━━━━┫
    ┗━━━━━━━━━━━━━━━━━━┛\n
    Username dan Password Telah Dikirim
    Ke @${u.split`@`[0]} Bang @${m?.sender.split('@')[0]}`);
    
    let akunlo = 'https://autoresbot.com/tmp_files/a82bbbf1-5306-4244-a1cf-ea8d24166b14.jpg';
    let cpanellu = (`
    *HAI @${u.split`@`[0]} INI DATA AKUN ADMIN PANEL ANDA* *DARI @${m?.sender.split('@')[0]}*

    *TERIMA KASIH SUDAH BERLANGGANAN DI STORE KAMI*

    *👤USERNAME* : ⬇️
    ${user.username}
    
    *🔐PASSWORD* : ⬇️
    ${password}
    
    *🌐LOGIN* : ⬇️
    ${config.panel.domain}

    ` + readmore + `
    *PROFIT :*
    - *BISA GANTI GANTI SERVER*
    - *BOT ON 24 JAM*
    - *WEB CLOSE BOT ON*
    - *GAK BOROS KUOTA*
    - *GAK ABISIN RAM HP*
    - *GARANSI 20 DAY*

    *NOTES :*
    - *JAGA BAIK² DATA ADMIN ANDA*
    - *OWN HANYA MENGIRIM 1X DATA*
    - *MASUK GROUP UNTUK INFO*
    - *SS PANEL DENGAN CP .DONE*
    - *HUB ONW JIKA ADA KENDALA*
    - *NO RUN SC DDOS*
    - *NO DDOS DOMAIN*
    - *NO SEBAR DOMAIN*

    *LANGGAR? DI DELETE NO REFF*
    *YUDZXML STORE 77* 
    `);
    
    await Yudzxml.sendMessage(u, { image: { url: akunlo }, caption: cpanellu }, { quoted: m });
} catch (e) {
  console.log(e)
  return reply(mess.error)
}
}
break;
case 'deladmin': {
if (!isOwner) return reply(mess.owner);
if (!args[0]) return reply("idnya?\n\nuntuk melihat id admin ketik *.listadmin*")
await loading();
let cek = await fetch(config.panel.domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + config.panel.plta
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(config.panel.domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + config.panel.plta
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return reply("ID Admin Tidak Ditemukan!")
reply(`Berhasil Menghapus Admin Panel *${capital(getid)}*`)
}
break
case 'listadmin': {
if (!isOwner) return reply(mess.owner);
await loading();
let cek = await fetch(config.panel.domain + "/api/application/users?page=1", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + config.panel.plta
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return reply("Tidak Ada Admin Panel")
var teks = "*🌐 LIST ADMIN PANEL*\n\n"
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `*┌ ◦* ID User *${i.attributes.id}*
*└ ◦* Nama *${i.attributes.first_name}*\n\n`
})
reply(teks)
}
break
case 'addreseller': {
if (!isOwner) return reply(mess.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (reseller.includes(orang)) return reply(`User ${orang.split('@')[0]} Sudah Terdaftar Di Database Reseller Panel!`)
await reseller.push(orang)
await fs.writeFileSync("./Storage/db/reseller.json", JSON.stringify(reseller, null, 2), 'utf8');
reply(`Berhasil Menjadikan ${orang.split('@')[0]} Sebagai Reseller Panel`)
} else {
return reply("@tag/62838XXX")
}}
break
case 'delreseller': {
if (!isOwner) return reply(mess.owner)
if (m.quoted || text) {
let orang = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '')+'@s.whatsapp.net' : m.quoted ? m.quoted.sender : ''
if (!reseller.includes(orang)) return reply(`User ${orang.split('@')[0]} Tidak Terdaftar Di Database Reseller Panel!`)
let indx = reseller.indexOf(orang)
await reseller.splice(indx, 1)
await fs.writeFileSync("./Storage/db/reseller.json", JSON.stringify(reseller, null, 2), 'utf8');
reply(`Berhasil Menghapus ${orang.split('@')[0]} Dari Database Reseller Panel`)
} else {
return reply("@tag/62838XXX")
}}
break
case 'listreseller': {
if (!isOwner) return reply(mess.owner)
if (reseller.length < 1) return reply("Tidak Ada Reseller Panel")
let teksnya = ` LIST RESELLER PANEL⚡\n\n`
reseller.forEach(e => teksnya += `* @${e.split("@")[0]}\n`)
Yudzxml.sendMessage(m.chat, {text: teksnya, mentions: [...reseller]}, {quoted: m})
}
break
case 'listram': {
await loading();
let pesan = 
`
ꜱɪʟᴀʜᴋᴀɴ ᴘɪʟɪʜ ʀᴀᴍ ᴅɪʙᴀᴡᴀʜ !

• ʀᴀᴍ 1ɢʙ - ᴄᴘᴜ 40% 
• ʀᴀᴍ 2ɢʙ - ᴄᴘᴜ 60% 
• ʀᴀᴍ 3ɢʙ - ᴄᴘᴜ 80% 
• ʀᴀᴍ 4ɢʙ - ᴄᴘᴜ 100% 
• ʀᴀᴍ 5ɢʙ - ᴄᴘᴜ 120% 
• ʀᴀᴍ 6ɢʙ - ᴄᴘᴜ 140% 
• ʀᴀᴍ 7ɢʙ - ᴄᴘᴜ 160% 
• ʀᴀᴍ 8ɢʙ - ᴄᴘᴜ 180% 
• ʀᴀᴍ 9ɢʙ - ᴄᴘᴜ 200% 
• ʀᴀᴍ 10ɢʙ - ᴄᴘᴜ 220% 
• ʀᴀᴍ ᴜɴʟɪ & ᴄᴘᴜ ᴜɴʟɪ

ᴄᴀʀᴀ ᴘᴇɴɢɢᴜɴᴀᴀɴ, ᴋᴇᴛɪᴋ *.1ɢʙ ᴜꜱᴇʀɴᴀᴍᴇ,628xxx*
ʙᴇʀʟᴀᴋᴜ ʜᴀɴʏᴀ ᴜɴᴛᴜᴋ ᴜꜱᴇʀ ʏᴀɴɢ ᴛᴇʀᴅᴀꜰᴛᴀʀ ᴘᴀᴅᴀ ᴅᴀᴛᴀʙᴀꜱᴇ ʀᴇꜱᴇʟʟᴇʀ ᴘᴀɴᴇʟ.
`
await reply(pesan)
}
break
case 'instalpanel':
case 'installpanel': {
    if (!isOwner) return reply(mess.owner);
    if (!text) return reply("*.installpanel ipvps,pwvps,panel.com*");
    let vii = text.split(",");
    if (vii.length < 3) return reply("*.installpanel ipvps,pwvps,panel.com*");
    const [host, password, domainpanel] = vii; 
    const connSettings = {
        host: host,
        port: '22',
        username: 'root',
        password: password
    };

    const pass = "admin" + getRandom("");
    const passwordPanel = pass;
    const deletemysql = '\n'
    const commandPanel = `bash <(curl -s https://pterodactyl-installer.se)`;
    const ress = new Client()
    async function instalPanel() {
        ress.exec(commandPanel, (err, stream) => {
            if (err) throw err;

            stream.on('close', async (code, signal) => {
                let teks = `
*Berikut Detail Akun Panel :*

* *Username :* admin
* *Password :* ${passwordPanel}
* *Domain :* ${domainpanel}

*Note :* Silahkan Buat Node Lalu Gunakan perintah .Installwings

*Cara Menjalankan Wings :*
ketik *.startwings* ipvps,pwvps,tokenwings
`;
await Yudzxml.sendMessage(m.chat, { text: teks }, { quoted: m });
}).on('data', async (data) => {
  const output = data.toString();
  console.log('Logger: ' + output);
  if (output.includes('Input 0-6')) stream.write('0\n');
  if (output.includes('(y/N)')) stream.write('y\n');
  if (output.includes('Database name (panel)')) stream.write('\n');
  if (output.includes('Database username (pterodactyl)')) stream.write('\n');
  if (output.includes('Password (press enter to use randomly generated password)')) stream.write('\n');
  if (output.includes('Select timezone [Europe/Stockholm]')) stream.write('Asia/Jakarta\n');
  if (output.includes('Provide the email address that will be used to configure Let\'s Encrypt and Pterodactyl')) stream.write('admin@gmail.com\n');
  if (output.includes('Email address for the initial admin account')) stream.write('admin@gmail.com\n');
  if (output.includes('Username for the initial admin account')) stream.write('admin\n');
  if (output.includes('First name for the initial admin account')) stream.write('admin\n');
  if (output.includes('Last name for the initial admin account')) stream.write('admin\n');
  if (output.includes('Password for the initial admin account')) stream.write(`${passwordPanel}\n`);
  if (output.includes('Set the FQDN of this panel (panel.example.com)')) stream.write(`${domainpanel}\n`);
  if (output.includes('Do you want to automatically configure UFW (firewall)')) stream.write('y\n');
  if (output.includes('Do you want to automatically configure HTTPS using Let\'s Encrypt? (y/N)')) stream.write('y\n');
  if (output.includes('Select the appropriate number [1-2] then [enter] (press \'c\' to cancel)')) stream.write('1\n');
  if (output.includes('I agree that this HTTPS request is performed (y/N)')) stream.write('y\n');
  if (output.includes('Proceed anyways (your install will be broken if you do not know what you are doing)? (y/N)')) stream.write('y\n');
  if (output.includes('(yes/no)')) stream.write('y\n');
  if (output.includes('Initial configuration completed. Continue with installation? (y/N)')) stream.write('y\n');
  if (output.includes('Still assume SSL? (y/N)')) stream.write('y\n');
  if (output.includes('Please read the Terms of Service')) stream.write('y\n');
  if (output.includes('(A)gree/(C)ancel:')) stream.write('A\n');
}).stderr.on('data', (data) => {
  console.log('STDERR: ' + data);
            });
        });
    }
   ress.on('ready', async () => {
        await reply("Memproses *install* server panel \nTunggu 1-10 menit hingga proses selesai");
        ress.exec(deletemysql, async (err, stream) => {
            if (err) throw err;
            stream.on('close', async (code, signal) => {
                await instalPanel();
            }).on('data', async (data) => {
                console.log(data.toString());
            }).stderr.on('data', async (data) => {
                console.log('Stderr : ' + data);
            });
        });
    }).connect(connSettings);
}
break;
case 'instalwings':
case 'installwings': {
if (!isOwner) return reply(mess.owner);
if (!text) return reply("*.installwings ipvps,pwvps,node.com*");
let vii = text.split(",");
if (vii.length < 3) return reply("*.installwings ipvps,pwvps,node.com*");
const [host, password, domainnode] = vii; 
const connSettings = {
        host: host,
        port: '22',
        username: 'root',
        password: password
};
const deletemysql = '\n'
const commandPanel = `bash <(curl -s https://pterodactyl-installer.se)`;
const ress = new Client()
async function instalwings() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
let teks = `
Install Wings Berhasil Silahkan Login Keakun Panel Anda Dan Ambil Token Node Lalu Gunakan Perintah .startwings .
`;
await Yudzxml.sendMessage(m.chat, { text: teks }, { quoted: m });
}).on('data', async (data) => {
  const output = data.toString();
  console.log('Logger: ' + output);
  if (output.includes('Input 0-6')) stream.write('1\n');
  if (output.includes('Do you want to automatically configure UFW (firewall)? (y/N)')) stream.write('y\n');
  if (output.includes('Do you want to automatically configure a user for database hosts? (y/N)')) stream.write('n\n');
  if (output.includes("Do you want to automatically configure HTTPS using Let's Encrypt? (y/N)")) stream.write('y\n');
  if (output.includes("Set the FQDN to use for Let's Encrypt (node.example.com)")) stream.write(`${domainnode}\n`);
  if (output.includes('I agree that this HTTPS request is performed (y/N)')) stream.write('y\n');
  if (output.includes("Enter email address for Let's Encrypt")) stream.write('admin@gmail.com\n');
  if (output.includes('Proceed with installation? (y/N)')) stream.write('y\n');
  if (output.includes('(A)gree/(C)ancel')) stream.write('A\n');
}).stderr.on('data', (data) => {
  console.log('STDERR: ' + data);
            });
        });
    }
   ress.on('ready', async () => {
        await reply("Memproses *install* Wings \nTunggu 1-10 menit hingga proses selesai");
        ress.exec(deletemysql, async (err, stream) => {
            if (err) throw err;
            stream.on('close', async (code, signal) => {
           await instalwings();
            }).on('data', async (data) => {
                console.log(data.toString());
            }).stderr.on('data', async (data) => {
                console.log('Stderr : ' + data);
            });
        });
    }).connect(connSettings);
}
break
case 'uninstallpanel': {
    if (!isOwner) return reply(mess.owner);
    if (!text || !text.split(",")) return reply("ipvps,pwvps");
    var vpsnya = text.split(",");
    if (vpsnya.length < 2) return reply("ipvps,pwvps");
    let ipvps = vpsnya[0];
    let passwd = vpsnya[1];
    const connSettings = {
        host: ipvps, port: '22', username: 'root', password: passwd
    };
    const boostmysql = `\n`;
    const command = `bash <(curl -s https://pterodactyl-installer.se)`;
    const ress = new Client();
    ress.on('ready', async () => {
        await reply("Memproses *uninstall* server panel\nTunggu 1-10 menit hingga proses selesai");

        ress.exec(command, async (err, stream) => {
            if (err) throw err;
            stream.on('close', async (code, signal) => {
                await ress.exec(boostmysql, async (err, stream) => {
                    if (err) throw err;
                    stream.on('close', async (code, signal) => {
                        await reply("Berhasil *uninstall* server panel ✅");
                    }).on('data', async (data) => {
                        await console.log(data.toString());
                        if (data.toString().includes(`Remove all MariaDB databases? [yes/no]`)) {
                            await stream.write("\x09\n");
                        }
                    }).stderr.on('data', (data) => {
                        reply('Berhasil Uninstall Server Panel ✅');
                    });
                });
            }).on('data', async (data) => {
                await console.log(data.toString());
                if (data.toString().includes(`Input 0-6`)) {
                    await stream.write("6\n");
                }
                if (data.toString().includes(`(y/N)`)) {
                    await stream.write("y\n");
                }
                if (data.toString().includes(`* Choose the panel user (to skip don't input anything):`)) {
                    await stream.write("\n");
                }
                if (data.toString().includes(`* Choose the panel database (to skip don't input anything):`)) {
                    await stream.write("\n");
                }
            }).stderr.on('data', (data) => {
                reply('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        reply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
}
break;
case 'startwings':
case 'configurewings': {
    if (!isOwner) return reply(mess.owner);
    
    let t = text.split(',');
    if (t.length < 3) return reply("Format yang benar: ipvps,pwvps,token_node");

    let ipvps = t[0];
    let passwd = t[1];
    let token = t[2];
    let command2 = `systemctl start wings`;
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };

    const ress = new Client();

    ress.on('ready', () => {
        ress.exec(token, (err, stream) => {
            if (err) {
                console.error('Execution Error: ', err);
                return reply('Terjadi kesalahan Token tidak valid atau error.');
            }

            stream.on('close', async (code, signal) => {
                ress.exec(command2, (err2, stream2) => {
                    if (err2) {
                        console.error('Execution Error for command: ', err2);
                        return reply('Terjadi kesalahan saat menjalankan Wings.');
                    }

                    stream2.on('close', async () => {
                        await reply("*Berhasil menjalankan wings ✅*\n*Status wings: *aktif*");
                        ress.end();
                    }).on('data', async (data) => {
                        console.log(data.toString());
                    }).stderr.on('data', async (data) => {
                        console.error('STDERR: ', data.toString());
                        await reply('STDERR: ' + data.toString());
                    });
                });
            }).on('data', async (data) => {
                console.log(data.toString());
            }).stderr.on('data', async (data) => {
                console.error('STDERR: ', data.toString());
                await reply('STDERR: ' + data.toString());
            });
        });
    }).on('error', (err) => {
        console.error('Connection Error: ', err);
        reply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
}
break;
//<===================================>
/** 
             < BATAS AKHIR >
          < YUDZXML STORE 77 >
**/      
//<===================================>
default:
                if (budy.startsWith('$')) {
                    if (!isOwner) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
                
                if (budy.startsWith('>')) {
                    if (!isOwner) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }
//<===================================>           
                if (budy.startsWith('=>')) {
                    if (!isOwner) return reply(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                } 
//batas euy 
}
} catch (err) {
    let formattedError = util.format(err);   
    let errorMessage = String(formattedError);   
    let stackTrace = err.stack ? err.stack : 'Stack trace not available';
    if (typeof err === 'string') {
        reply(`Terjadi error:\n\nKeterangan Error: ${errorMessage}`);
    } else {
        console.log(formattedError);
    }
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(`${chalk.greenBright.bold('[ '+jammenit+' ]')} ${chalk.greenBright.bold(`UPDATE FILE ${__filename}`)}`)
    delete require.cache[file]
    require(file)
})