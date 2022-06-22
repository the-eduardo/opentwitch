export const commandsRouter = [    
    {
        name: "!songrequest",
        description: "Adicionar uma música à fila",
        file: "onSongRequest",
        params: ["userId", "username", "trackId", "origin"],
        aliases: ["songrequest", "sr"],
        permissions: ["user", "mod", "admin"],
    },
    {
        name: "!songlist",
        description: "Listar as músicas na fila",
        file: "onSongList",
        params: ["userId"],
        aliases: ["songlist", "sl"],
        permissions: ["user", "mod", "admin"],
    },
    {
        name: "!voteskip",
        description: "Vote para pular a música atual",
        file: "onVoteSkip",
        params: ["userId", "username", "vote"],
        aliases: ["voteskip", "voteyes", "vs"],
        permissions: ["user", "mod", "admin"],
    },
    {
        name: "!votekeep",
        description: "Vote para manter a música atual",
        file: "onVoteSkip",
        params: ["userId", "username", "vote"],
        aliases: ["votekeep", "voteno", "vn", "vk"],
        permissions: ["user", "mod", "admin"],
    },
    
];