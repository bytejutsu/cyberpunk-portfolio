const getAssetPath = (path) => {
    const basePath = process.env.NODE_ENV === 'production' ? 'cyberpunk-portfolio/' : '';
    return `${basePath}/${path}`;
};

export default getAssetPath;