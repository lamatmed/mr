import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

const sentryWebpackPluginOptions = {
    // Paramètres de l'organisation et du projet
    org: "monapp-st", // Mettez à jour avec votre organisation
    project: "javascript-nextjs", // Mettez à jour avec votre projet

    // Affiche uniquement les journaux pour le téléchargement des source maps en CI
    silent: !process.env.CI,

    // Télécharge un ensemble plus large de source maps pour obtenir des traces de pile plus lisibles (augmente le temps de build)
    widenClientFileUpload: true,

    // Active l'annotation automatique des composants React pour afficher leur nom complet dans les breadcrumbs et la session de replay
    reactComponentAnnotation: {
        enabled: true,
    },

    // Cache les source maps dans les bundles clients générés
    hideSourceMaps: true,

    // Désactive les déclarations du logger Sentry pour réduire la taille du bundle
    disableLogger: true,

    // Active l'instrumentation automatique des Moniteurs Cron de Vercel
    automaticVercelMonitors: true,

    // Supprime les source maps après leur téléchargement
    sourcemaps: {
        deleteSourcemapsAfterUpload: true,
    },
};

export default withSentryConfig(nextConfig, sentryWebpackPluginOptions);
