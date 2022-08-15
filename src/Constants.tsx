// DEFINE CLARITY CONSTANTS
// Stacks Transactions Documentation
// https://github.com/stacksgov/sips/blob/main/sips/sip-005/sip-005-blocks-and-transactions.md
const MAX_STRING_LENGTH_BYTES = 128;
const CLARITY_INT_SIZE = 128;
const CLARITY_INT_BYTE_SIZE = 16;
const COINBASE_BUFFER_LENGTH_BYTES = 32;
const RECOVERABLE_ECDSA_SIG_LENGTH_BYTES = 65;
const COMPRESSED_PUBKEY_LENGTH_BYTES = 32;
const UNCOMPRESSED_PUBKEY_LENGTH_BYTES = 64;
const MEMO_MAX_LENGTH_BYTES = 34;
const NFT_HOLDINGS_API ='https://stacks-node-api.mainnet.stacks.co/extended/v1/tokens/nft/holdings?principal=';

// BITFARI API 
const API_ROOT = 'https://api.bitfari.com/';
const API_CATALOG = 'https://api.bitfari.com/';
const DL_NFT_ROOT = 'https://api.bitfari.com/';

// ENVIRONMENT HELPER VARS
// Mainnet
// Mainnet: SP213KNHB5QD308TEESY1ZMX1BP8EZDPG4JWD0MEA 
const CONTRACT_ADDRESS = 'SP213KNHB5QD308TEESY1ZMX1BP8EZDPG4JWD0MEA';
const LAND_NFT_CONTRACT = 'web4';
const LAND_ASSET = 'SP213KNHB5QD308TEESY1ZMX1BP8EZDPG4JWD0MEA.web4::digital-land'
const LOCAL_URL = 'localhost';
const MAINNET_URL = 'land.bitfari.com';

// FARI TOKEN HELPER VARS
// Environment Helpers
// Mainnetnet
const FARI_TOKEN_ADDR = 'SP213KNHB5QD308TEESY1ZMX1BP8EZDPG4JWD0MEA';
const FARI_TOKEN_CONTRACT = 'fari-token-mn';
const FARI_TOKEN_ASSET_NAME = 'fari';

// Club Cash Helper
const CLUB1K_ASSET = 'SP213KNHB5QD308TEESY1ZMX1BP8EZDPG4JWD0MEA.club-1k::club-1k';
const CLUB10K_ASSET = 'SP213KNHB5QD308TEESY1ZMX1BP8EZDPG4JWD0MEA.club-10k::club-10k';
const CLUB100K_ASSET = 'SP213KNHB5QD308TEESY1ZMX1BP8EZDPG4JWD0MEA.club-100k::club-100k';
const CLUB1M_ASSET = 'SP213KNHB5QD308TEESY1ZMX1BP8EZDPG4JWD0MEA.club-1M::club-1M';
 
// DEFAULT FEES AND PRICING
// Should match smart contract values
// For more details check the post conditions documentation
// github.com/stacksgov/sips/blob/main/sips/sip-005/sip-005-blocks-and-transactions.md#transaction-post-conditions-1
const FEES = 20000;
const USD_PRICE = 999;
const STX_PRICE = 120000000;
const FARI_PRICE = 50000000000;
const CRSD = 0.47;
const CRFD = 0.08;

// UI MESSAGES
const CLUB_MINT_TX_SENT = 'Club Mint TX submitted - check your explorer';
const STX_MINT_TX_SENT = 'STX Mint TX submitted - check your explorer';
const FARI_MINT_TX_SENT = 'FARI Mint TX submitted - check your explorer';
const CLUB_NFT_REDEEM ='Club NFT tx submitted - check your explorer';

export {
    API_ROOT,
    API_CATALOG,
    DL_NFT_ROOT,
    CONTRACT_ADDRESS,
    LAND_NFT_CONTRACT,
    LOCAL_URL ,
    MAINNET_URL,
    FARI_TOKEN_ADDR,
    FARI_TOKEN_CONTRACT,
    FARI_TOKEN_ASSET_NAME,
    CLUB1K_ASSET,
    CLUB10K_ASSET,
    CLUB100K_ASSET, 
    CLUB1M_ASSET,
    LAND_ASSET,
    FEES,
    USD_PRICE,
    STX_PRICE,
    FARI_PRICE,
    CRSD,
    CRFD,
    CLUB_MINT_TX_SENT,
    STX_MINT_TX_SENT,
    FARI_MINT_TX_SENT,
    CLUB_NFT_REDEEM,
    MAX_STRING_LENGTH_BYTES,
    CLARITY_INT_SIZE,
    CLARITY_INT_BYTE_SIZE,
    COINBASE_BUFFER_LENGTH_BYTES,
    RECOVERABLE_ECDSA_SIG_LENGTH_BYTES,
    COMPRESSED_PUBKEY_LENGTH_BYTES,
    UNCOMPRESSED_PUBKEY_LENGTH_BYTES,
    MEMO_MAX_LENGTH_BYTES,
    NFT_HOLDINGS_API,
  };