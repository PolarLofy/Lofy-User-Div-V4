console.clear()

const {Scraper} = require("discord-scraper")
const readline = require("readline").createInterface({input: process.stdin,output: process.stdout});
const title = require('proc-title')
const shell = require('shelljs');
const cc = require('rgb-console');
var setTerminalTitle = require('checker-sql');
setTerminalTitle('pause-serecre-key');
const colors = require('colors');
const request = require('request');
const fs = require('fs');
const pressAnyKey = require('press-any-key');
var sleep = require('sleep');

process.title = "Lofy User Div V4"
title('By PolarLofy | https://discord.gg/vByHaKmQ')



const cor = ([
    'red',
    'green',
    'yellow',
    'blue',
    'cyan',
    'magenta'
])

const corparauso = cor[Math.floor(Math.random() * cor.length)];

cc[corparauso](`
    
    ██╗      ██████╗ ███████╗██╗   ██╗    ██╗   ██╗███████╗███████╗██████╗
    ██║     ██╔═══██╗██╔════╝╚██╗ ██╔╝    ██║   ██║██╔════╝██╔════╝██╔══██╗
    ██║     ██║   ██║█████╗   ╚████╔╝     ██║   ██║███████╗█████╗  ██████╔╝
    ██║     ██║   ██║██╔══╝    ╚██╔╝      ██║   ██║╚════██║██╔══╝  ██╔══██╗
    ███████╗╚██████╔╝██║        ██║       ╚██████╔╝███████║███████╗██║  ██║
    ╚══════╝ ╚═════╝ ╚═╝        ╚═╝        ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝
                            discord.gg/lofygang
                            
    `)

console.log(`
${"     [1] Pegat ID dos Usuarios".yellow}
${"     [2] Proxy Checker".yellow}
${"     [3] Lofy User Div V4 [PROXY]".yellow}
${"     [4] Lofy User Div V4 [EXTERNAL]\n\n".yellow}`)

readline.question(`     [❓] escolha uma opção: `.green, answer => {

    switch (answer) {


        case "1":
            fs.writeFile('./Config/ids.txt', '', function(){})
            console.clear()



            cc.yellow(`
        
        
        
             ███████╗ ██████╗██████╗  █████╗ ██████╗ ███████╗██████╗     ██╗██████╗ 
             ██╔════╝██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔══██╗    ██║██╔══██╗
             ███████╗██║     ██████╔╝███████║██████╔╝█████╗  ██████╔╝    ██║██║  ██║
             ╚════██║██║     ██╔══██╗██╔══██║██╔═══╝ ██╔══╝  ██╔══██╗    ██║██║  ██║
             ███████║╚██████╗██║  ██║██║  ██║██║     ███████╗██║  ██║    ██║██████╔╝
             ╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚══════╝╚═╝  ╚═╝    ╚═╝╚═════╝ 
                                         By PolarLofy                                     
        
        
        
        `)

            readline.question(`     [❓] Token: `.green, tokens => {
                readline.question(`     [❓] ID do Servidor `.green, serverid => {
                    readline.question(`     [❓] ID de um canal do Servidor `.green, chhx => {


                        const scraper = new Scraper({
                            token: tokens,
                            channelID: chhx,
                            guildID: serverid,
                            outputFile: "./Config/ids.txt"
                        })

                        scraper.on("fetched", (members) => {
                            console.log(`\n\n     [✅] Foi encontado ${members.size} membros`.blue)
                            cc.magenta("     > Aperte qualquer tecla para Sair.")
                            pressAnyKey("\n", {})
                                .then(() => {
                                    process.exit()
                                })
                        })

                        scraper.on("ready", (event) => {
                            event.users
                            event.user
                            event.relationships
                        })

                        scraper.scrape()

                    })
                })
            })


            break








        case "2":


            console.clear()

            var proxy = fs.readFileSync('./Proxy/proxy.txt', 'utf-8').replace(/\r/g, '').split('\n')

            const newLineExpression = /\r\n|\n\r|\n|\r/g;

            const removeDuplicatedLines = (text) => {
                const blocker = {};
                return text.split(newLineExpression)
                    .reduce((result, line) => {
                        if (blocker.hasOwnProperty(line)) {
                            return result;
                        }
                        blocker[line] = true;
                        return result + line + '\n';
                    }, '');
            };


            const text = `${proxy}`;

            var new_line = removeDuplicatedLines(text.replaceAll(",", "\n"));
            clear("./Proxy/proxy.txt");
            write(new_line.replaceAll(/\n\r/gi, ""), "./Proxy/proxy.txt");

            process.on('uncaughtException', e => {});
            process.on('uncaughtRejection', e => {});
            process.warn = () => {};

            function write(content, file) {
                fs.appendFile(file, content, function (err) {});
            }

            function clear(file) {
                var stream = fs.createWriteStream(file);
                stream.once('open', function (fd) {
                    stream.write("");
                    stream.end();
                });
            }

            clear("./Proxy/die-proxy.txt");
            clear("./Proxy/live-proxy.txt");

            cc.yellow(`
        
        
        ██████╗ ██████╗  ██████╗ ██╗  ██╗██╗   ██╗     ██████╗██╗  ██╗███████╗ ██████╗██╗  ██╗███████╗██████╗ 
        ██╔══██╗██╔══██╗██╔═══██╗╚██╗██╔╝╚██╗ ██╔╝    ██╔════╝██║  ██║██╔════╝██╔════╝██║ ██╔╝██╔════╝██╔══██╗
        ██████╔╝██████╔╝██║   ██║ ╚███╔╝  ╚████╔╝     ██║     ███████║█████╗  ██║     █████╔╝ █████╗  ██████╔╝
        ██╔═══╝ ██╔══██╗██║   ██║ ██╔██╗   ╚██╔╝      ██║     ██╔══██║██╔══╝  ██║     ██╔═██╗ ██╔══╝  ██╔══██╗
        ██║     ██║  ██║╚██████╔╝██╔╝ ██╗   ██║       ╚██████╗██║  ██║███████╗╚██████╗██║  ██╗███████╗██║  ██║
        ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝        ╚═════╝╚═╝  ╚═╝╚══════╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
                                              By PolarLofy
        
        `)

            cc.magenta("> Aperte qualquer tecla para continuar.")
            pressAnyKey("\n", {})
                .then(() => {


                    async function checker(proxys) {
                        request({
                            method: "GET",
                            url: 'https://discordapp.com/app',
                            timeout: 00000,
                            proxy: 'http://' + proxys,
                            json: true,

                        }, (err, res, body) => {

                            if (res && res.statusCode === 200) {
                                cc.green("[✅] Live Proxy: " + proxys)
                                write(proxys + "\n", "./Proxy/live-proxy.txt");
                            } else if (proxys && proxys === undefined) {

                            } else {
                                cc.redBold("[❌] Die Proxy: " + proxys)
                                write(proxys + "\n", "./Proxy/die-proxy.txt");
                            }


                        })
                    }


                    async function start() {
                        console.clear()
                        for (i = 0; i < proxy.length; i++) {
                            checker(proxy[i])
                        }
                    }

                    start()

                })


            break





        case "3":
            console.clear()
            const discordids = fs.readFileSync('./Config/ids.txt', 'utf-8').replace(/\r/gi, '').split('\n');
            cc.magenta("Limpando Cache do Discord")

            sleep.sleep(2)
            shell.exec(`@echo off && color A && del /f /s /q %AppData%\\Discord\\Cache\\*.* && del /f /s /q %AppData%\\discord\\Cache\\*.* && del /f /s /q %AppData%\\discordcanary\\Cache\*.* && del /f /s /q %AppData%\\discordptb\\Cache\\*.* && del /f /s /q %AppData%\\discorddevelopment\\Cache\\*.*`)
            sleep.sleep(5)

            console.clear()
            cc.magenta("main-proxy.dll rodando")
            shell.exec(`@echo off && for /L %G in (1,1,${discordids.length}) do node Libs/main-proxy.dll`);
            process.exit()
            break





        case "4":
            console.clear()
            const discordidss = fs.readFileSync('./Config/ids.txt', 'utf-8').replace(/\r/gi, '').split('\n');


            sleep.sleep(2)
            shell.exec(`@echo off && color A && del /f /s /q %AppData%\\Discord\\Cache\\*.* && del /f /s /q %AppData%\\discord\\Cache\\*.* && del /f /s /q %AppData%\\discordcanary\\Cache\*.* && del /f /s /q %AppData%\\discordptb\\Cache\\*.* && del /f /s /q %AppData%\\discorddevelopment\\Cache\\*.*`)
            sleep.sleep(5)

            console.clear()

            cc.magenta("main.dll rodando")
            shell.exec(`@echo off && for /L %G in (1,1,${discordidss.length}) do node Libs/main.dll`);
            process.exit()
            break






    }

})
