// let name_dict = {'i-sound2': '/iː/', 'i-sound': '/ɪ/', 'e-sound': '/e/', 'an-sound': '/æ/', 'er-sound': '/ɜː/', 'e^-sound': '/ə/', '^-sound': '/ʌ/', 'u-sound2': '/uː/', 'u-sound': '/ʊ/', 'o-sound2': '/ɔː/', 'o-sound': '/ɒ/', 'a-sound2': '/ɑː/', 'ei': '/eɪ/', 'ai': '/aɪ/', 'oi': '/ɔɪ/', 'ao': '/aʊ/', 'eu': '/əʊ/', 'ir': '/ɪə/', 'er': '/eə/', 'uer': '/ʊə/', 'p': '/p/', 't': '/t/', 'k': '/k/', 'b': '/b/', 'd': '/d/', 'g': '/ɡ/', 'f': '/f/', 's': '/s/', 'ss': '/ʃ/', 'si': '/θ/', 'h': '/h/', 'v': '/v/', 'z': '/z/', 'n3': '/ʒ/', 'qq': '/ð/', 'r': '/r/', 'tss': '/tʃ/', 'tr': '/tr/', 'ts': '/ts/', 'd3': '/dʒ/', 'dr': '/dr/', 'dz': '/dz/', 'm': '/m/', 'n': '/n/', 'ng': '/ŋ/', 'l': '/l/', 'j': '/j/', 'w': '/w/'} 
let recite_number = 1 // 记录轮次
let learning_record = {'/iː/': 0, '/ɪ/': 0, '/e/': 0, '/æ/': 0, '/ɜː/': 0, '/ə/': 0, '/ʌ/': 0, '/uː/': 0, '/ʊ/': 0, '/ɔː/': 0, '/ɒ/': 0, '/ɑː/': 0, '/eɪ/': 0, '/aɪ/': 0, '/ɔɪ/': 0, '/aʊ/': 0, '/əʊ/': 0, '/ɪə/': 0, '/eə/': 0, '/ʊə/': 0, '/p/': 0, '/t/': 0, '/k/': 0, '/b/': 0, '/d/': 0, '/ɡ/': 0, '/f/': 0, '/s/': 0, '/ʃ/': 0, '/θ/': 0, '/h/': 0, '/v/': 0, '/z/': 0, '/ʒ/': 0, '/ð/': 0, '/r/': 0, '/tʃ/': 0, '/tr/': 0, '/ts/': 0, '/dʒ/': 0, '/dr/': 0, '/dz/': 0, '/m/': 0, '/n/': 0, '/ŋ/': 0, '/l/': 0, '/j/': 0, '/w/': 0}
// let phonetics = {
//     "/iː/": {
//         "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/i-sound2.html",
//         "simple_name": "i-sound2"
//     },
//     "/ɪ/": {
//         "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/i-sound.html",
//         "simple_name": "i-sound"
//     },
//     "/e/": {
//         "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/e-sound.html",
//         "simple_name": "e-sound"
//     },
//     "/æ/": {
//         "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/an-sound.html",
//         "simple_name": "an-sound"
//     }}

let phonetics = {
    "/iː/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/i-sound2.html",
        "simple_name": "i-sound2"
    },
    "/ɪ/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/i-sound.html",
        "simple_name": "i-sound"
    },
    "/e/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/e-sound.html",
        "simple_name": "e-sound"
    },
    "/æ/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/an-sound.html",
        "simple_name": "an-sound"
    },
    "/ɜː/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/er-sound.html",
        "simple_name": "er-sound"
    },
    "/ə/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/e%5E-sound.html",
        "simple_name": "e^-sound"
    },
    "/ʌ/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/%5E-sound.html",
        "simple_name": "^-sound"
    },
    "/uː/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/u-sound2.html",
        "simple_name": "u-sound2"
    },
    "/ʊ/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/u-sound.html",
        "simple_name": "u-sound"
    },
    "/ɔː/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/o-sound2.html",
        "simple_name": "o-sound2"
    },
    "/ɒ/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/o-sound.html",
        "simple_name": "o-sound"
    },
    "/ɑː/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/a-sound2.html",
        "simple_name": "a-sound2"
    },
    "/eɪ/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/ei.html",
        "simple_name": "ei"
    },
    "/aɪ/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/ai.html",
        "simple_name": "ai"
    },
    "/ɔɪ/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/oi.html",
        "simple_name": "oi"
    },
    "/aʊ/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/ao.html",
        "simple_name": "ao"
    },
    "/əʊ/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/eu.html",
        "simple_name": "eu"
    },
    "/ɪə/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/ir.html",
        "simple_name": "ir"
    },
    "/eə/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/er.html",
        "simple_name": "er"
    },
    "/ʊə/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/uer.html",
        "simple_name": "uer"
    },
    "/p/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/p.html",
        "simple_name": "p"
    },
    "/t/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/t.html",
        "simple_name": "t"
    },
    "/k/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/k.html",
        "simple_name": "k"
    },
    "/b/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/b.html",
        "simple_name": "b"
    },
    "/d/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/d.html",
        "simple_name": "d"
    },
    "/ɡ/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/g.html",
        "simple_name": "g"
    },
    "/f/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/f.html",
        "simple_name": "f"
    },
    "/s/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/s.html",
        "simple_name": "s"
    },
    "/ʃ/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/ss.html",
        "simple_name": "ss"
    },
    "/θ/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/si.html",
        "simple_name": "si"
    },
    "/h/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/h.html",
        "simple_name": "h"
    },
    "/v/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/v.html",
        "simple_name": "v"
    },
    "/z/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/z.html",
        "simple_name": "z"
    },
    "/ʒ/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/n3.html",
        "simple_name": "n3"
    },
    "/ð/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/qq.html",
        "simple_name": "qq"
    },
    "/r/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/r.html",
        "simple_name": "r"
    },
    "/tʃ/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/tss.html",
        "simple_name": "tss"
    },
    "/tr/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/tr.html",
        "simple_name": "tr"
    },
    "/ts/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/ts.html",
        "simple_name": "ts"
    },
    "/dʒ/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/d3.html",
        "simple_name": "d3"
    },
    "/dr/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/dr.html",
        "simple_name": "dr"
    },
    "/dz/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/dz.html",
        "simple_name": "dz"
    },
    "/m/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/m.html",
        "simple_name": "m"
    },
    "/n/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/n.html",
        "simple_name": "n"
    },
    "/ŋ/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/ng.html",
        "simple_name": "ng"
    },
    "/l/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/l.html",
        "simple_name": "l"
    },
    "/j/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/j.html",
        "simple_name": "j"
    },
    "/w/": {
        "website": "http://en-yinbiao.xiao84.com//yinbiaofayin/w.html",
        "simple_name": "w"
    }
}