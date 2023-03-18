import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xeB6913B5829CD2Dc3be4d48Ce2eDDd2Da6871462'
);

export default instance;
