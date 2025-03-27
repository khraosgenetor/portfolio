module.exports = {
    async redirects() {
        return [
            {
                source: "/home",
                destination: "https://khraos.in",
                permanent: true,
            },
            {
                source: "/website",
                destination: "https://khraos.in",
                permanent: true,
            },
            {
                source: "/khraosin",
                destination: "https://khraos.in",
                permanent: true,
            },
        ];
    },
};
