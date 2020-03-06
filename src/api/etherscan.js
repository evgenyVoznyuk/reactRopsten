import makeRequest from './helpers/makeRequest';

function tokentx(address, apiKey='EWVA4ZPPQBVGKKZV3EPYBJ1XYYR22X4TAV') {
	return makeRequest(`api?module=account&action=tokentx&address=${address}&sort=asc&apikey=${apiKey}`);
}

export { tokentx };