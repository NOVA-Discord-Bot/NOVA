
module.exports = {
    name: 'tictactoe',
    aliases: ['ttt'],
    description: 'Play Tic Tac Toe against someone or yourself',
    usage: 'tictactoe <user>',
    category: 'ð»Fun',
    cooldown: 0,
    run: async (client, message, args) => {
        let opponent = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!opponent) return message.channel.send("Please provide the user to challenge!")
        let fighters = [message.member.id, opponent.id].sort(() => (Math.random() > .5) ? 1 : -1)
        let Args = {
            user: 0,
            a1: {
                style: "gray",
                label: "â",
                disabled: false
            },
            a2: {
                style: "gray",
                label: "â",
                disabled: false
            },
            a3: {
                style: "gray",
                label: "â",
                disabled: false
            },
            b1: {
                style: "gray",
                label: "â",
                disabled: false
            },
            b2: {
                style: "gray",
                label: "â",
                disabled: false
            },
            b3: {
                style: "gray",
                label: "â",
                disabled: false
            },
            c1: {
                style: "gray",
                label: "â",
                disabled: false
            },
            c2: {
                style: "gray",
                label: "â",
                disabled: false
            },
            c3: {
                style: "gray",
                label: "â",
                disabled: false
            }
        }
        let { MessageButton, MessageActionRow } = require('discord-buttons')
        let msg = await message.channel.send(`**TicTacToe** | <@!${Args.userid}>'s turn (â­)`)
        tictactoe(msg)
        async function tictactoe(m) {
            Args.userid=fighters[Args.user]
            let won = {
                "â­": false,
                "â": false
            }
            if (Args.a1.label == "â­" && Args.b1.label == "â­" && Args.c1.label == "â­") won["â­"] = true
            if (Args.a2.label == "â­" && Args.b2.label == "â­" && Args.c2.label == "â­") won["â­"] = true
            if (Args.a3.label == "â­" && Args.b3.label == "â­" && Args.c3.label == "â­") won["â­"] = true
            if (Args.a1.label == "â­" && Args.b2.label == "â­" && Args.c3.label == "â­") won["â­"] = true
            if (Args.a3.label == "â­" && Args.b2.label == "â­" && Args.c1.label == "â­") won["â­"] = true
            if (Args.a1.label == "â­" && Args.a2.label == "â­" && Args.a3.label == "â­") won["â­"] = true
            if (Args.b1.label == "â­" && Args.b2.label == "â­" && Args.b3.label == "â­") won["â­"] = true
            if (Args.c1.label == "â­" && Args.c2.label == "â­" && Args.c3.label == "â­") won["â­"] = true
            if (won["â­"] != false) return m.edit('â­ won!')
            if (Args.a1.label == "â" && Args.b1.label == "â" && Args.c1.label == "â") won["â"] = true
            if (Args.a2.label == "â" && Args.b2.label == "â" && Args.c2.label == "â") won["â"] = true
            if (Args.a3.label == "â" && Args.b3.label == "â" && Args.c3.label == "â") won["â"] = true
            if (Args.a1.label == "â" && Args.b2.label == "â" && Args.c3.label == "â") won["â"] = true
            if (Args.a3.label == "â" && Args.b2.label == "â" && Args.c1.label == "â") won["â"] = true
            if (Args.a1.label == "â" && Args.a2.label == "â" && Args.a3.label == "â") won["â"] = true
            if (Args.b1.label == "â" && Args.b2.label == "â" && Args.b3.label == "â") won["â"] = true
            if (Args.c1.label == "â" && Args.c2.label == "â" && Args.c3.label == "â") won["â"] = true
            if (won["â"] != false) return m.edit('â won!')
            let a1 = new MessageButton()
                .setStyle(Args.a1.style)
                .setLabel(Args.a1.label)
                .setID('a1')
                .setDisabled(Args.a1.disabled);
            let a2 = new MessageButton()
                .setStyle(Args.a2.style)
                .setLabel(Args.a2.label)
                .setID('a2')
                .setDisabled(Args.a2.disabled);
            let a3 = new MessageButton()
                .setStyle(Args.a3.style)
                .setLabel(Args.a3.label)
                .setID('a3')
                .setDisabled(Args.a3.disabled);
            let b1 = new MessageButton()
                .setStyle(Args.b1.style)
                .setLabel(Args.b1.label)
                .setID('b1')
                .setDisabled(Args.b1.disabled);
            let b2 = new MessageButton()
                .setStyle(Args.b2.style)
                .setLabel(Args.b2.label)
                .setID('b2')
                .setDisabled(Args.b2.disabled);
            let b3 = new MessageButton()
                .setStyle(Args.b3.style)
                .setLabel(Args.b3.label)
                .setID('b3')
                .setDisabled(Args.b3.disabled);
            let c1 = new MessageButton()
                .setStyle(Args.c1.style)
                .setLabel(Args.c1.label)
                .setID('c1')
                .setDisabled(Args.c1.disabled);
            let c2 = new MessageButton()
                .setStyle(Args.c2.style)
                .setLabel(Args.c2.label)
                .setID('c2')
                .setDisabled(Args.c2.disabled);
            let c3 = new MessageButton()
                .setStyle(Args.c3.style)
                .setLabel(Args.c3.label)
                .setID('c3')
                .setDisabled(Args.c3.disabled);
            let a = new MessageActionRow()
                .addComponents([a1, a2, a3])
            let b = new MessageActionRow()
                .addComponents([b1, b2, b3])
            let c = new MessageActionRow()
                .addComponents([c1, c2, c3])
            let buttons = { components: [a, b, c] }
            m.edit(`**TicTacToe** | <@!${Args.userid}>'s turn (${Args.user == 0 ? "â­" : "â"})`, buttons)
            const filter = (button) => button.clicker.user.id === Args.userid;
            const collector = m.createButtonCollector(filter, { max: 1, time: 30000 });

            collector.on('collect', b => {
                if (Args.user == 0) {
                    Args.user = 1
                    Args[b.id] = {
                        style: "green",
                        label: "â­",
                        disabled: true
                    }
                } else {
                    Args.user = 0
                    Args[b.id] = {
                        style: "red",
                        label: "â",
                        disabled: true
                    }
                }
                
                const map = (obj, fun) =>
                    Object.entries(obj).reduce(
                        (prev, [key, value]) => ({
                            ...prev,
                            [key]: fun(key, value)
                        }),
                        {}
                    );
                const objectFilter = (obj, predicate) =>
                    Object.keys(obj)
                        .filter(key => predicate(obj[key]))
                        .reduce((res, key) => (res[key] = obj[key], res), {});
                let Brgs = objectFilter(map(Args, (_, fruit) => fruit.label == "â"), num => num == true);
                if (Object.keys(Brgs).length == 0) return m.edit('It\'s a tie!')
                tictactoe(m)
            });
            collector.on('end', collected => {
                if (collected.size == 0) m.edit(`<@!${Args.userid}> didn\'t react in time! (30s)`)
            });
        }
    }
}