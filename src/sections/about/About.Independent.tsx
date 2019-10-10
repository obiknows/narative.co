import React from 'react'
import styled from 'styled-components'

import Section from '@components/Section'
import Sticky from '@components/Sticky'
import mediaqueries from '@styles/media'

import AboutHeading from './About.Heading'

const GatsbyLogo = () => (
  <svg
    width="150"
    height="80"
    viewBox="0 0 150 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M81.8817 38.5137H84.1022V46.444H81.8817V45.4131C81.0887 46.6026 80.0577 46.6819 79.4233 46.6819C76.9649 46.6819 75.3789 44.7786 75.3789 42.4789C75.3789 40.0998 76.9649 38.2758 79.2647 38.2758C79.8991 38.2758 81.0887 38.3551 81.8024 39.5446V38.5137H81.8817ZM77.758 42.4789C77.758 43.7477 78.6303 44.6993 79.9784 44.6993C81.2473 44.6993 82.1989 43.7477 82.1989 42.4789C82.1989 41.21 81.3266 40.2584 79.9784 40.2584C78.7096 40.2584 77.758 41.21 77.758 42.4789ZM88.4639 40.417V46.444H86.2434V40.417H85.3711V38.5137H86.2434V35.8174H88.4639V38.5137H89.9706V40.417H88.4639ZM95.2046 40.417C94.6495 39.9412 94.1737 39.8619 93.9358 39.8619C93.3807 39.8619 93.0634 40.0998 93.0634 40.4963C93.0634 40.7342 93.1428 40.9721 93.7772 41.21L94.3323 41.3686C94.9667 41.6065 95.9184 41.8444 96.3149 42.4789C96.5528 42.7961 96.7114 43.2719 96.7114 43.827C96.7114 44.5407 96.4735 45.2545 95.8391 45.8096C95.2046 46.3647 94.4116 46.6819 93.46 46.6819C91.7946 46.6819 90.9223 45.8889 90.3671 45.3338L91.5567 43.9856C92.0325 44.4614 92.6669 44.9373 93.3014 44.9373C93.9358 44.9373 94.4116 44.62 94.4116 44.0649C94.4116 43.5891 94.0151 43.3512 93.6979 43.2719L93.2221 43.1133C92.6669 42.8754 92.0325 42.6375 91.5567 42.1616C91.1602 41.7651 90.9223 41.2893 90.9223 40.6549C90.9223 39.8619 91.3188 39.2274 91.7153 38.8309C92.3497 38.3551 93.1428 38.2758 93.7772 38.2758C94.3323 38.2758 95.2839 38.3551 96.3149 39.1481L95.2046 40.417ZM100.042 39.5446C100.835 38.4344 101.945 38.2758 102.58 38.2758C104.88 38.2758 106.466 40.0998 106.466 42.4789C106.466 44.8579 104.88 46.6819 102.501 46.6819C102.025 46.6819 100.835 46.6026 99.9628 45.4131V46.444H97.8216V33.1211H100.042V39.5446ZM99.8042 42.4789C99.8042 43.7477 100.677 44.6993 102.025 44.6993C103.294 44.6993 104.245 43.7477 104.245 42.4789C104.245 41.21 103.373 40.2584 102.025 40.2584C100.677 40.2584 99.8042 41.21 99.8042 42.4789ZM110.114 45.2545L106.307 38.5137H108.924L111.382 43.034L113.603 38.5137H116.141L109.796 50.6471H107.259L110.114 45.2545ZM74.8237 39.8619H72.6033H69.2725V42.0823H72.2067C71.7309 43.5891 70.6207 44.62 68.5588 44.62C66.259 44.62 64.5936 42.7168 64.5936 40.417C64.5936 38.1172 66.1797 36.1346 68.4795 36.1346C69.7483 36.1346 71.0172 36.769 71.8102 37.8L73.6342 36.6104C72.4447 34.9451 70.5414 33.9934 68.4795 33.9934C64.9902 33.9934 62.1353 36.8483 62.1353 40.417C62.1353 43.9856 64.8316 46.8405 68.4795 46.8405C72.1274 46.8405 74.8237 43.9856 74.8237 40.417C74.903 40.1791 74.8237 40.0205 74.8237 39.8619Z"
      fill="#FAFAFA"
    />
    <path
      d="M43.1024 29C36.9961 29 32 33.9961 32 40.1024C32 46.2088 36.9961 51.2049 43.1024 51.2049C49.2088 51.2049 54.2049 46.2088 54.2049 40.1024C54.2049 33.9961 49.2088 29 43.1024 29ZM36.9168 46.2881C35.2514 44.6227 34.3791 42.4022 34.3791 40.261L43.0231 48.8258C40.8026 48.7465 38.5822 47.9534 36.9168 46.2881ZM45.0057 48.5879L34.617 38.1992C35.4893 34.3133 38.9787 31.3791 43.1024 31.3791C46.0366 31.3791 48.5743 32.8065 50.1604 34.9477L48.9709 35.9787C47.6227 34.1547 45.4815 32.9652 43.1024 32.9652C40.0096 32.9652 37.3926 34.9477 36.3617 37.7233L45.4815 46.8432C47.7813 46.0502 49.526 44.0676 50.0811 41.6885H46.2746V40.1024H51.8258C51.8258 44.2262 48.8916 47.7155 45.0057 48.5879Z"
      fill="#FAFAFA"
    />
  </svg>
)

const BDCLogo = () => (
  <svg
    width="150"
    height="80"
    viewBox="0 0 150 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M59.5201 50.316C58.187 50.316 57.0932 49.8716 56.3412 49.3247C56.2044 49.2222 55.9993 49.3247 55.9993 49.4956V50.0084H52V30.2852H55.9993V36.6431C55.9993 36.814 56.2044 36.9165 56.3412 36.814C57.0932 36.3013 58.187 35.8911 59.5201 35.8911C63.3144 35.8911 66.3908 38.7624 66.3908 43.1035C66.425 47.5472 63.3144 50.316 59.5201 50.316ZM59.1441 46.6927C60.9558 46.6927 62.3573 45.2228 62.3573 43.1035C62.3573 40.9842 60.99 39.5144 59.1441 39.5144C57.3324 39.5144 55.931 40.9842 55.931 43.1035C55.931 45.257 57.2983 46.6927 59.1441 46.6927Z"
      fill="#FAFAFA"
    />
    <path
      d="M73.8765 50.316C70.0823 50.316 67.0059 47.5472 67.0059 43.1377C67.0059 38.7966 70.0823 35.9252 73.8765 35.9252C75.2096 35.9252 76.3376 36.3696 77.0555 36.8482C77.1922 36.9507 77.3973 36.8482 77.3973 36.6773V30.2852H81.3966V50.0084H77.4315V49.4956C77.4315 49.3247 77.2264 49.2222 77.0897 49.3247C76.3035 49.8716 75.2096 50.316 73.8765 50.316ZM74.2867 46.6927C76.0984 46.6927 77.4998 45.2228 77.4998 43.1035C77.4998 40.9842 76.1325 39.5144 74.2867 39.5144C72.4409 39.5144 71.0736 40.9842 71.0736 43.1035C71.0736 45.257 72.4409 46.6927 74.2867 46.6927Z"
      fill="#FAFAFA"
    />
    <path
      d="M92.6087 44.779C91.7542 45.907 90.7971 46.5907 89.3956 46.5907C87.5156 46.5907 86.0457 45.155 86.0457 43.1383C86.0457 41.1215 87.5156 39.6858 89.3956 39.6858C90.6603 39.6858 91.5149 40.3353 92.3011 41.2924L94.9673 38.6262C93.5317 37.0196 91.8225 35.9258 89.2589 35.9258C85.1228 35.9258 81.978 39.0022 81.978 43.1383C81.978 47.2743 85.1228 50.3166 89.2589 50.3166C91.8909 50.3166 93.8735 49.2569 95.275 47.4452L92.6087 44.779Z"
      fill="#FAFAFA"
    />
    <path
      d="M102.179 38.6549V19H99.5132V24.2641C99.5132 24.5375 99.274 24.7768 99.0005 24.7768C98.898 24.7768 98.8296 24.7426 98.7612 24.7085L94.591 22.7601L92.5059 27.2038L96.5394 29.0838C96.7103 29.1522 96.847 29.3573 96.847 29.5623C96.847 29.6991 96.7787 29.8358 96.6761 29.9384L93.463 33.1515L96.9496 36.6381L100.197 33.3908C100.299 33.2882 100.436 33.2199 100.573 33.2199C100.846 33.2199 101.086 33.4591 101.086 33.7326V38.6549H101.974H102.179Z"
      fill="#D82C26"
    />
    <path
      d="M102.009 38.6549H102.863V33.7326C102.863 33.4591 103.103 33.2199 103.376 33.2199C103.513 33.2199 103.65 33.2882 103.752 33.3908L106.999 36.6381L110.486 33.1515L107.273 29.9384C107.17 29.8358 107.102 29.6991 107.102 29.5623C107.102 29.3573 107.239 29.1522 107.41 29.0838L111.443 27.2038L109.358 22.7601L105.188 24.7085C105.119 24.7426 105.051 24.7768 104.948 24.7768C104.675 24.7768 104.436 24.5375 104.436 24.2641V19H101.975L102.009 38.6549Z"
      fill="#A8162C"
    />
  </svg>
)

const NetlifyLogo = () => (
  <svg
    width="150"
    height="80"
    viewBox="0 0 150 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M49.5131 36.0072C49.5105 36.0058 49.508 36.0049 49.5055 36.0039C49.5009 36.0021 49.4966 36.0005 49.4926 35.9967C49.4795 35.9844 49.4744 35.9623 49.4772 35.9446L49.9089 33.3031L51.9352 35.3295L49.8282 36.226C49.8223 36.2285 49.816 36.2298 49.8097 36.2298C49.8056 36.2298 49.8032 36.2298 49.8012 36.2291C49.7983 36.2281 49.796 36.2257 49.7904 36.2203C49.716 36.1375 49.6236 36.0636 49.5131 36.0072ZM52.4518 35.8461L54.6182 38.0125C55.0683 38.4626 55.2934 38.6877 55.3757 38.948C55.3879 38.9864 55.3979 39.0253 55.4058 39.0646L50.2287 36.8725C50.2261 36.8714 50.2233 36.8702 50.2206 36.8691C50.1996 36.8606 50.1756 36.851 50.1756 36.8296C50.1756 36.8085 50.2003 36.7984 50.2209 36.7899C50.2231 36.789 50.2253 36.7881 50.2274 36.7873L52.4518 35.8461ZM55.3172 39.7601C55.2055 39.9702 54.9877 40.1881 54.6182 40.5575L52.1765 42.9992L49.0176 42.3413C49.0124 42.3402 49.0067 42.3393 49.0009 42.3384C48.9733 42.3338 48.9431 42.3289 48.9431 42.3033C48.9142 42.0367 48.789 41.7987 48.5771 41.6369C48.5642 41.6241 48.5678 41.6039 48.5712 41.5853C48.5716 41.5826 48.5721 41.5801 48.5725 41.5776L49.167 37.9303C49.1676 37.9264 49.1682 37.9223 49.1688 37.9182C49.1726 37.8904 49.1772 37.8577 49.203 37.8577C49.4687 37.8202 49.697 37.6902 49.851 37.4861C49.8557 37.48 49.8593 37.4742 49.8662 37.4709C49.8838 37.4626 49.9056 37.4713 49.9236 37.4789L55.3172 39.7601ZM51.6146 43.5612L47.5984 47.5773L48.2864 43.3519C48.2867 43.3499 48.287 43.3479 48.2872 43.346C48.2879 43.3407 48.2886 43.3354 48.2906 43.3303C48.2959 43.3168 48.3107 43.3109 48.3247 43.3054C48.3269 43.3045 48.3291 43.3037 48.3312 43.3028C48.4838 43.2393 48.6133 43.1385 48.7197 43.014C48.7333 42.9981 48.7495 42.9834 48.77 42.9799C48.7746 42.9791 48.7816 42.9796 48.7862 42.9805L51.6146 43.5612ZM46.7485 48.4272L46.2957 48.8801L41.2912 41.6469C41.2894 41.6442 41.2874 41.6416 41.2854 41.639C41.2775 41.6286 41.2695 41.618 41.2706 41.6054C41.2714 41.5964 41.2772 41.5891 41.2829 41.5818C41.2848 41.5795 41.2867 41.5771 41.2884 41.5747C41.3037 41.5527 41.3167 41.5304 41.3309 41.5059C41.3346 41.4995 41.3384 41.4931 41.3423 41.4864L41.3434 41.4846C41.3512 41.4713 41.3585 41.4587 41.3721 41.4515C41.3839 41.4452 41.3999 41.4478 41.4129 41.4506L46.9577 42.5941C46.9715 42.5969 46.9902 42.6027 47.0003 42.6126C47.0074 42.6198 47.0089 42.6275 47.0106 42.6364C47.0112 42.6399 47.0119 42.6436 47.013 42.6474C47.0944 42.9339 47.3031 43.1817 47.5852 43.2933C47.6009 43.301 47.594 43.3187 47.5867 43.3372C47.5833 43.3456 47.5799 43.3543 47.5786 43.3622C47.5088 43.7872 46.9094 47.4409 46.7485 48.4272ZM45.8029 49.3724C45.4693 49.7027 45.2726 49.8773 45.0501 49.9477C44.8308 50.017 44.5953 50.017 44.376 49.9477C44.1157 49.8654 43.8906 49.6403 43.4406 49.1902L38.4147 44.1643L39.7272 42.128C39.7336 42.1179 39.7395 42.1088 39.7493 42.1019C39.7635 42.0918 39.7839 42.0967 39.8005 42.1019C39.9356 42.1435 40.0631 42.1605 40.1991 42.1605C40.3747 42.1605 40.5413 42.1254 40.7161 42.0554C40.7309 42.0494 40.7462 42.0459 40.758 42.0564C40.7637 42.0614 40.7695 42.0684 40.7737 42.0746L45.8029 49.3724ZM37.93 43.6796L36.7767 42.5263L39.054 41.555C39.0599 41.5525 39.0662 41.5512 39.0725 41.5512C39.0914 41.5512 39.1024 41.5701 39.1127 41.5877C39.1153 41.592 39.1178 41.5963 39.1203 41.6001C39.142 41.6332 39.1638 41.662 39.1855 41.6906C39.1872 41.6929 39.1911 41.6972 39.1927 41.6995C39.1991 41.709 39.1944 41.7182 39.1882 41.7278L37.93 43.6796ZM36.2667 42.0163L34.8079 40.5575C34.5598 40.3094 34.38 40.1297 34.2549 39.9747L38.6898 40.8944C38.695 40.8954 38.7006 40.8964 38.7064 40.8973C38.7341 40.9018 38.7643 40.9068 38.7643 40.9324C38.7643 40.9602 38.7315 40.9732 38.7034 40.9843C38.699 40.986 38.6946 40.9878 38.6905 40.9895L36.2667 42.0163ZM34 39.2246C34.0051 39.1312 34.0219 39.0382 34.0504 38.948C34.1327 38.6877 34.3578 38.4626 34.8079 38.0125L36.6751 36.1453C36.9828 36.5968 39.0152 39.5328 39.2524 39.8726C39.2547 39.8759 39.2572 39.8793 39.2598 39.8827C39.275 39.9032 39.2916 39.9257 39.2747 39.9424C39.1929 40.0322 39.1111 40.1306 39.0536 40.2374C39.0468 40.25 39.0381 40.2643 39.026 40.2718C39.0186 40.2764 39.011 40.2748 39.0025 40.273L39.0013 40.2728L34 39.2246ZM37.1741 35.6463L39.6842 33.1362C39.9201 33.2394 40.7788 33.6022 41.5463 33.9266C42.128 34.1725 42.6576 34.3963 42.8238 34.4681C42.8405 34.4753 42.8557 34.4819 42.8631 34.4985C42.8675 34.5085 42.8654 34.5217 42.8631 34.5324C42.8462 34.6127 42.8377 34.6931 42.8377 34.7734C42.8377 35.0685 42.9533 35.3445 43.1555 35.554C43.1722 35.5704 43.1554 35.5945 43.1407 35.6156C43.1379 35.6196 43.1352 35.6234 43.1329 35.6271L40.5848 39.5746C40.5778 39.5854 40.5715 39.5952 40.5608 39.6022C40.5473 39.611 40.5283 39.607 40.5127 39.6031C40.4134 39.5779 40.307 39.5616 40.2088 39.5616C40.1176 39.5616 40.0178 39.5787 39.9175 39.5967L39.9166 39.5968C39.9057 39.5988 39.8957 39.6006 39.8867 39.5941C39.8768 39.587 39.8683 39.5756 39.8614 39.5656L37.1741 35.6463ZM40.191 32.6294L43.4406 29.3798C43.8906 28.9297 44.1157 28.7047 44.376 28.6223C44.5953 28.553 44.8308 28.553 45.0501 28.6223C45.3104 28.7047 45.5355 28.9297 45.9856 29.3798L46.6897 30.084L44.3788 33.6634C44.3721 33.6737 44.366 33.6831 44.3559 33.69C44.3419 33.6996 44.3221 33.6951 44.3058 33.6905C44.1889 33.6572 44.0718 33.6406 43.9548 33.6406C43.6948 33.6406 43.4348 33.7358 43.2326 33.8976C43.2176 33.9124 43.1952 33.9033 43.1759 33.8949C42.8741 33.7639 40.5268 32.7714 40.191 32.6294ZM47.1803 30.5745L49.3146 32.7089L48.8007 35.8929C48.8003 35.8955 48.8 35.8985 48.7997 35.9015C48.7989 35.9089 48.798 35.9169 48.7955 35.9227C48.7904 35.9338 48.7794 35.9364 48.7677 35.939C48.7637 35.9399 48.7596 35.9409 48.7557 35.9422C48.6476 35.9775 48.5473 36.0272 48.4612 36.0915C48.4572 36.0945 48.4538 36.098 48.4506 36.1014C48.4441 36.1083 48.438 36.1147 48.428 36.1153C48.4214 36.1157 48.4103 36.1142 48.4042 36.1116L45.1525 34.73C45.1504 34.7291 45.1482 34.7282 45.1459 34.7273C45.1254 34.7188 45.1007 34.7087 45.1007 34.6876C45.0832 34.5138 45.0254 34.3401 44.935 34.188C44.9327 34.1842 44.9303 34.1803 44.9279 34.1764C44.9119 34.1508 44.8949 34.1235 44.9081 34.0974L47.1803 30.5745ZM44.9831 35.3845L48.031 36.6758C48.0485 36.6831 48.0663 36.6907 48.0734 36.7082C48.0771 36.7176 48.0753 36.7299 48.0734 36.7397C48.0649 36.7841 48.0571 36.8354 48.0571 36.8867V36.9724C48.0571 36.9933 48.0352 37.0024 48.0152 37.0106C48.013 37.0116 48.0107 37.0125 48.0086 37.0134C47.5259 37.2193 41.2292 39.9043 41.2199 39.9043C41.2103 39.9043 41.2007 39.9043 41.1911 39.8948C41.1745 39.8784 41.1912 39.8543 41.2059 39.8331C41.2087 39.8292 41.2113 39.8253 41.2137 39.8217L43.7189 35.9435C43.7203 35.9413 43.7218 35.939 43.7232 35.9367C43.7381 35.9133 43.7547 35.8872 43.7815 35.8872C43.79 35.8883 43.7985 35.8896 43.8067 35.8907C43.8636 35.899 43.914 35.9062 43.9645 35.9062C44.3446 35.9062 44.6965 35.7208 44.9094 35.4049C44.915 35.3965 44.9201 35.389 44.9281 35.3827C44.9433 35.3709 44.9654 35.377 44.9831 35.3845ZM41.4924 40.5176L48.3556 37.5911C48.3556 37.5911 48.3653 37.5912 48.3749 37.6007C48.4125 37.6378 48.4442 37.6634 48.4747 37.6864C48.4792 37.6898 48.4845 37.6929 48.4899 37.696C48.5039 37.7042 48.5182 37.7125 48.5192 37.7274C48.5195 37.7325 48.5189 37.7365 48.5181 37.7415L47.9298 41.3528C47.929 41.3574 47.9284 41.3623 47.9277 41.3672C47.924 41.3956 47.9198 41.4274 47.8934 41.4274C47.5744 41.4459 47.292 41.6271 47.1263 41.9005C47.1254 41.902 47.1245 41.9035 47.1236 41.905C47.116 41.9179 47.1086 41.9302 47.0951 41.937C47.0838 41.9426 47.0686 41.9402 47.0563 41.9376L41.5834 40.8085C41.5782 40.8075 41.4982 40.5185 41.4924 40.5176Z"
      fill="#FAFAFA"
    />
    <path
      d="M63.706 35.3637L63.7748 36.5917C64.5607 35.6421 65.5923 35.1672 66.8694 35.1672C69.0831 35.1672 70.2096 36.4345 70.2489 38.9692V45.9934H67.8616V39.1067C67.8616 38.4321 67.7159 37.9327 67.4245 37.6085C67.133 37.2843 66.6565 37.1223 65.9951 37.1223C65.0323 37.1223 64.3151 37.5578 63.8436 38.4289V45.9934H61.4563V35.3637H63.706ZM77.3616 46.1899C75.8487 46.1899 74.6223 45.7135 73.6824 44.7605C72.7426 43.8076 72.2727 42.5386 72.2727 40.9537V40.6589C72.2727 39.5979 72.4773 38.6499 72.8867 37.8149C73.296 36.9798 73.8707 36.3298 74.6108 35.8648C75.3509 35.3997 76.1761 35.1672 77.0865 35.1672C78.5339 35.1672 79.6522 35.629 80.4414 36.5525C81.2307 37.4759 81.6253 38.7825 81.6253 40.4723V41.435H74.6796C74.7516 42.3127 75.0447 43.0069 75.5588 43.5178C76.073 44.0286 76.7197 44.284 77.4991 44.284C78.5929 44.284 79.4836 43.842 80.1713 42.9578L81.4582 44.1858C81.0325 44.8211 80.4644 45.3139 79.7538 45.6643C79.0431 46.0147 78.2458 46.1899 77.3616 46.1899ZM77.0767 37.083C76.4217 37.083 75.8929 37.3122 75.4901 37.7706C75.0873 38.2291 74.8302 38.8677 74.7189 39.6864H79.2675V39.5095C79.2151 38.7105 79.0022 38.1063 78.6289 37.697C78.2556 37.2876 77.7382 37.083 77.0767 37.083ZM86.4686 32.78V35.3637H88.345V37.1321H86.4686V43.0659C86.4686 43.4719 86.5488 43.765 86.7092 43.9451C86.8697 44.1252 87.1562 44.2153 87.5689 44.2153C87.8439 44.2153 88.1223 44.1825 88.4039 44.117V45.964C87.8603 46.1146 87.3364 46.1899 86.832 46.1899C84.9982 46.1899 84.0813 45.1781 84.0813 43.1543V37.1321H82.3326V35.3637H84.0813V32.78H86.4686ZM92.7069 45.9934H90.3196V30.9036H92.7069V45.9934ZM97.8449 45.9934H95.4576V35.3637H97.8449V45.9934ZM95.3103 32.6031C95.3103 32.2364 95.4265 31.9318 95.659 31.6895C95.8915 31.4472 96.2239 31.326 96.6562 31.326C97.0884 31.326 97.4225 31.4472 97.6582 31.6895C97.894 31.9318 98.0119 32.2364 98.0119 32.6031C98.0119 32.9634 97.894 33.263 97.6582 33.5021C97.4225 33.7411 97.0884 33.8606 96.6562 33.8606C96.2239 33.8606 95.8915 33.7411 95.659 33.5021C95.4265 33.263 95.3103 32.9634 95.3103 32.6031ZM101.283 45.9934V37.1321H99.6624V35.3637H101.283V34.3911C101.283 33.2122 101.611 32.3019 102.266 31.66C102.921 31.0182 103.838 30.6973 105.017 30.6973C105.436 30.6973 105.881 30.7562 106.353 30.8741L106.294 32.7407C106.032 32.6883 105.727 32.6621 105.38 32.6621C104.24 32.6621 103.671 33.2483 103.671 34.4206V35.3637H105.832V37.1321H103.671V45.9934H101.283ZM111.294 42.5746L113.455 35.3637H116L111.776 47.6046C111.127 49.3926 110.027 50.2866 108.475 50.2866C108.127 50.2866 107.744 50.2276 107.325 50.1098V48.2628L107.777 48.2923C108.38 48.2923 108.833 48.1826 109.138 47.9632C109.442 47.7438 109.683 47.3754 109.86 46.858L110.204 45.9443L106.47 35.3637H109.044L111.294 42.5746Z"
      fill="#FAFAFA"
    />
  </svg>
)

const FlowVenturesLogo = () => (
  <svg
    width="150"
    height="80"
    viewBox="0 0 150 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M48 27.3828H57.2074V29.9123H50.7457V34.8812H55.7119V37.3276H50.7457V44.7428H48V27.3828Z"
      fill="#FAFAFA"
    />
    <path
      d="M59.6868 27.3828H62.4464V42.248H68.8526V44.7428H59.6868V27.3828Z"
      fill="#FAFAFA"
    />
    <path
      d="M84.1381 27.3828H87.1097L89.1389 40.0359L91.9456 27.3828H94.5208L97.0891 40.0359L99.261 27.3828H102L98.4613 44.7221H95.6546L93.175 32.7786L90.511 44.7221L87.7237 44.7013L84.1381 27.3828Z"
      fill="#FAFAFA"
    />
    <path
      d="M48.2325 47.1758H49.4273L50.5888 51.952L51.7087 47.1758H52.8771L51.0393 53.5917H50.0358L48.2325 47.1758Z"
      fill="#FAFAFA"
    />
    <path
      d="M55.5552 47.1758H58.9842V48.1474H56.6335V49.7122H58.3203V50.6492H56.6335V52.6548H58.9828V53.5917H55.5552V47.1758Z"
      fill="#FAFAFA"
    />
    <path
      d="M90.1353 47.1758H93.5643V48.1474H91.215V49.7122H92.9018V50.6492H91.215V52.6548H93.5643V53.5917H90.1353V47.1758Z"
      fill="#FAFAFA"
    />
    <path
      d="M61.9614 47.1758H62.836L65.1313 51.3103V47.1758H66.1556V53.5986H65.3433L62.9871 49.539L62.9732 53.5986L61.9628 53.5917V47.1758H61.9614Z"
      fill="#FAFAFA"
    />
    <path
      d="M68.8405 47.1758H73.0207V48.1335H71.4905V53.5709H70.3845V48.1197H68.8405V47.1758Z"
      fill="#FAFAFA"
    />
    <path
      d="M75.718 47.1758V52.3374C75.718 52.3374 75.7388 53.7359 77.8289 53.7359C78.2794 53.7359 78.7576 53.6735 79.154 53.4462C79.5365 53.2327 79.8512 52.9181 79.8512 52.3706V47.1813H78.7853V52.2057C78.7853 52.2057 78.8061 52.853 77.7887 52.853C76.7714 52.853 76.8185 52.1502 76.8185 52.1502V47.1813H75.7194V47.1758H75.718Z"
      fill="#FAFAFA"
    />
    <path
      d="M77.6029 27.0715C79.9799 27.4097 81.8441 29.3598 81.9883 31.7992C82.0908 33.4597 82.0839 35.1285 82.0492 36.7959C82.0354 37.5887 81.9938 38.3884 82.0007 39.1798C82.0146 40.4273 81.8982 41.6123 81.1954 42.674C80.6008 43.5763 79.7138 44.2929 78.6812 44.638C76.7962 45.2714 74.3651 45.0649 72.8003 43.7551C72.6367 43.6179 72.4856 43.4724 72.3429 43.3144C71.9742 42.9013 71.6803 42.419 71.4821 41.8951C71.2839 41.3642 71.0649 40.7169 71.0649 40.1514C71.0649 38.4355 71.0649 36.7196 71.0649 35.0037C71.0649 33.2185 70.9624 31.2753 71.7344 29.6218C72.6908 27.5677 75.0817 26.858 77.1912 27.0229C77.3298 27.0382 77.4656 27.0521 77.6029 27.0715ZM79.2689 35.9767C79.2689 34.9635 79.2689 33.9434 79.2619 32.9302C79.2619 32.1028 79.2079 31.2212 78.7158 30.5185C78.2307 29.8297 77.37 29.4291 76.537 29.4222C75.7996 29.4222 75.0553 29.7257 74.5564 30.2773C73.9548 30.9385 73.8523 31.8768 73.819 32.7376C73.7705 33.8949 73.8051 35.0675 73.8051 36.2317C73.8051 37.1964 73.7164 38.1819 73.7705 39.1535C73.8245 40.0697 73.9964 41.2755 74.7338 41.9034C75.5737 42.6269 76.8239 42.717 77.8011 42.2346C78.7907 41.7454 79.2079 40.7183 79.2633 39.6566C79.3312 38.4369 79.2689 37.2033 79.2689 35.9767Z"
      fill="#FAFAFA"
    />
    <path
      d="M97.5879 53.6526C96.96 53.4946 96.522 53.0801 96.3044 52.4814C96.2407 52.2832 96.2434 51.9159 96.2434 51.6262C96.5844 51.6262 96.9531 51.6262 97.294 51.6262C97.294 51.7911 97.2954 51.9574 97.3079 52.1293C97.3758 52.7558 98.1201 52.9221 98.6329 52.7295C98.9212 52.6214 99.1236 52.3636 99.1499 52.0545C99.179 51.7121 98.9933 51.3961 98.7355 51.1854C98.1326 50.6906 97.2691 50.5631 96.7466 49.9685C96.4319 49.6109 96.3127 49.1161 96.3169 48.649C96.3169 48.2775 96.4596 47.9532 96.7133 47.6912C97.3952 46.9844 98.6371 46.8652 99.4465 47.4154C99.7376 47.6122 99.9649 47.8894 100.08 48.2221C100.176 48.4979 100.196 48.8112 100.196 49.1244C99.8346 49.1244 99.4715 49.1244 99.1707 49.1244C99.1707 48.8874 99.1305 48.6629 99.028 48.4633C98.8921 48.1944 98.6523 48.0156 98.3516 47.9948C98.0175 47.974 97.6683 48.0225 97.4701 48.333C97.2039 48.7599 97.477 49.2228 97.8595 49.457C98.2767 49.7121 98.7203 49.8978 99.1375 50.1528C99.4826 50.3649 99.7778 50.6684 99.9788 51.0191C100.242 51.4779 100.332 52.0808 100.097 52.5715C99.9025 52.9762 99.5768 53.3365 99.1777 53.5431C98.7424 53.769 98.0661 53.769 97.5879 53.6526Z"
      fill="#FAFAFA"
    />
    <path
      d="M87.2108 52.8646C87.0098 52.8646 86.9613 52.83 86.9613 52.7329C86.9613 52.4682 86.9627 52.2049 86.9613 51.9401C86.9599 51.6809 86.9765 51.4093 86.9197 51.1543C86.8324 50.7648 86.5261 50.4779 86.12 50.4502C86.9197 50.4502 86.9197 49.9304 86.9197 49.4966C86.9197 49.3211 86.9197 49.6144 86.9197 49.2795C86.9197 48.8499 86.9197 48.7162 86.9197 48.2866C86.9197 47.8242 86.4665 47.1777 85.5531 47.1777C85.3757 47.1777 85.1497 47.1777 84.9723 47.1777C84.5551 47.1777 84.1324 47.1777 83.7152 47.1777C83.4962 47.1777 83.2841 47.1777 83.0665 47.1777V53.5867H84.0908V50.8854H85.4228C85.6321 50.8854 85.8053 50.9921 85.8857 51.1861C85.9495 51.3386 85.9425 51.4966 85.9425 51.6574C85.9425 52.1591 85.9425 52.6609 85.9425 53.164C85.9425 53.4107 86.1504 53.5937 86.4443 53.5937C86.5676 53.5937 86.7478 53.5937 86.8629 53.5937C86.9932 53.5937 87.1359 53.5937 87.2648 53.5937V53.2555V52.9201C87.2648 52.8896 87.2648 52.8646 87.2648 52.8646C87.2648 52.8646 87.2329 52.8646 87.2108 52.8646ZM85.8746 49.6144C85.8358 49.7488 85.7513 49.8652 85.6196 49.9304C85.4533 50.0122 85.2648 50.0385 85.0818 50.0468C85.0042 50.051 84.0922 50.0427 84.0922 50.044V48.08C84.5163 48.08 84.9252 48.08 85.3424 48.08C85.5337 48.08 85.7527 48.1965 85.8344 48.3697C85.9093 48.5139 85.9093 48.6746 85.9093 48.841C85.9093 49.06 85.919 49.279 85.8982 49.4966C85.8926 49.5354 85.8857 49.5756 85.8746 49.6144Z"
      fill="#FAFAFA"
    />
  </svg>
)

const testimonials = [
  {
    name: 'Kyle Mathews',
    title: 'CEO',
    testimonial:
      "Our mission at Gatsby is to empower digital creators to build fast, responsive experiences — and Narative does so in ways that are consistently beautiful and inspiring. We're always excited to see what they build, and grateful for their contributions to the Gatsby community.",
    logo: GatsbyLogo,
  },
  {
    name: 'David Lorem',
    title: '[title]',
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in lectus at augue feugiat imperdiet et quis erat. Fusce placerat, nulla in dapibus bibendum, nunc ex dignissim urna, sed aliquam felis. Phasellus in lectus at augue feugiat imperdiet et quis erat.',
    logo: BDCLogo,
  },
  {
    name: 'Shawn Wang',
    title: 'Developer Experience',
    testimonial:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in lectus at augue feugiat imperdiet et quis erat. Fusce placerat, nulla in dapibus bibendum, nunc ex dignissim urna, sed aliquam felis. Phasellus in lectus at augue feugiat imperdiet et quis erat.',
    logo: NetlifyLogo,
  },
  {
    name: 'Peter Bailey',
    title: 'Partner',
    testimonial:
      'I never hesitate to recommend that startups at any stage reach out and talk to the Narative team. Not only are they brilliant professionals in each of their fields, they approach every conversation with thoughtfulness and sincerity.',
    logo: FlowVenturesLogo,
  },
]

function AboutChoose() {
  function clamp(val, min, max) {
    return val > max ? max : val < min ? min : val
  }

  return (
    <Sticky
      cover
      height="3000px"
      render={({ progress }) => {
        const five = progress * 2.5
        const textStyles = `opacity: ${1 - five}; filter: blur(${five * 3}px`

        return (
          <AboutTestimonialContainer>
            <HeadingLineBreak>
              <AboutHeading
                heading="Independent, but never alone"
                text={`
                  <div style="${textStyles}">
                    While we like to do things our own way, nobody can do it all
                    by themselves.
                    <div style="color:#73737D">
                      Narative believes in building ongoing partnerships based
                      on trust, and in contributing our ideas and work to the
                      open source community. When we do honest work, good word
                      spreads, and we can all build ever-greater things.
                    </div>
                  </div>`}
              />
            </HeadingLineBreak>
            <Section narrow>
              <TestimonialCardContainer>
                {testimonials.map((testimonial, index) => {
                  const total = testimonials.length
                  const nextIndex = index + 1

                  const staggered = clamp(progress - index / total, 0, 1)
                  const currentProgress = clamp(staggered * total, 0, 1)

                  const nextStaggered = clamp(
                    progress - nextIndex / total,
                    0,
                    1
                  )
                  const nextProgress = clamp(nextStaggered * total, 0, 1)

                  const transalteYFirst =
                    currentProgress * (index === 0 ? 100 : 450)

                  const transalteYSecond =
                    transalteYFirst + nextProgress * 22 * (total - nextIndex)

                  const scaleCurve = 1 - nextStaggered * 0.25

                  const blends = [
                    '#1D2128',
                    '#1C1F26',
                    '#1A1E24',
                    '#191C23',
                    '#181B21',
                    '#17191F',
                    '#15181D',
                    '#14161B',
                    '#131519',
                    '#121318',
                    '#101216',
                    '#0F1014',
                  ]

                  const selectedBlend = Math.round(
                    ((((1 - scaleCurve) * 100) / 9) * 10) / 2
                  )

                  return (
                    <TestimonialCard
                      index={index}
                      data-card={index}
                      style={{
                        transform: `translateY(-${transalteYSecond}px) scale(${scaleCurve})`,
                      }}
                    >
                      <Card style={{ background: blends[selectedBlend] }}>
                        <div>
                          <testimonial.logo />
                        </div>
                        <VerticalDivider />
                        <div>
                          <Role>
                            {testimonial.name} · {testimonial.title}
                          </Role>
                          <div>{testimonial.testimonial}</div>
                        </div>
                      </Card>
                    </TestimonialCard>
                  )
                })}
              </TestimonialCardContainer>
            </Section>
          </AboutTestimonialContainer>
        )
      }}
    />
  )
}

export default AboutChoose

const AboutTestimonialContainer = styled.div`
  position: relative;
  padding-top: 10vh;
  height: 100vh;

  &::after {
    content: '';
    position: absolute;
    height: 20vh;
    max-height: 262px;
    right: 0;
    left: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(11, 12, 15, 0) 0%, #0b0c0f 76.72%);
  }
`

const TestimonialCardContainer = styled.ul`
  position: relative;
  max-width: 750px;
  margin: 90px auto 0;
  list-style: none;

  ${mediaqueries.desktop`
    flex-direction: column;
  `};
`

const TestimonialCard = styled.li`
  will-change: transform, opacity;
  top: 350px;
  height: 350px;
  position: absolute;

  &:first-child {
    top: 0;
  }
`

const Card = styled.div`
  display: flex;
  align-items: center;
  height: 200px;
  width: 100%;
  border-radius: 5px;
  background: #1d2128;
  padding: 40px 40px 40px 0;
  font-size: 18px;
  color: ${p => p.theme.colors.grey};
  box-shadow: 0px 0px 35px rgba(0, 0, 0, 0.35);
  transition: background 0.1s;
`

const Role = styled.div`
  font-weight: 700;
  color: #fff;
`

const VerticalDivider = styled.div`
  height: 120px;
  width: 5px;
  margin-right: 40px;
  background: rgba(250, 250, 250, 0.05);
`

const HeadingLineBreak = styled.div`
  h2 {
    width: 70%;
    display: block;
  }
`