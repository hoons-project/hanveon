/*
  최종 현지화/법적 문구 검수 보정.
  PR #1 병합 전 마지막 검수에서 발견한 네 가지를 한곳에서 보정한다.
  게임 규칙이나 로직은 바꾸지 않는다.
*/
import { GAMES } from '../data/games';
import { STR as HOPPY } from '../games/hoppy-jump/strings';
import { PRIVACY } from '../text/privacy';

// 1) 프랑스어 Merge Fruit 이름: 영어식 어순보다 자연스러운 프랑스어 제목으로.
const mergeFruit = GAMES.find((g) => g.slug === 'merge-fruit');
if (mergeFruit) mergeFruit.name.fr = ['Fusion', 'Fruitée'];

// 2) 일본어 Hoppy Jump: 「발판을 연결한다」가 아니라 「발판을 뛰어 잇는다」는 뜻으로.
HOPPY.ja.tagline = '足場を跳びついで、どこまで高く行ける？';

// 3) Privacy: Cloudflare Web Analytics beacon이 외부 Cloudflare 주소에서
//    로드될 수 있다는 사실을 명확히 하고, 어린이 문구도 호스팅 과정의
//    기술 정보 처리 설명과 충돌하지 않도록 정리한다.
const privacyFixes = {
  en: {
    files: [
      'Fonts, game images and Hanveon’s own site scripts are served from hanveon.com. Cloudflare Web Analytics is the exception: its analytics beacon may be loaded from a Cloudflare address.',
      'Apart from the hosting and visit counting described above, Hanveon does not intentionally load advertising or tracking services from other providers.',
    ],
    children: [
      'The games are simple and can be played by people of different ages, but Hanveon is not specifically directed at children. Hanveon does not ask children, or anyone else, to submit personal information. Technical information needed for hosting and visit counting may still be processed by Cloudflare as described above.',
    ],
  },
  ko: {
    files: [
      'Hanveon의 글꼴, 게임 이미지, 자체 사이트 스크립트는 hanveon.com에서 제공합니다. 다만 Cloudflare Web Analytics의 분석용 비콘은 Cloudflare 주소에서 불러올 수 있습니다.',
      '위에서 설명한 호스팅과 방문 수 확인을 제외하면, Hanveon이 다른 업체의 광고·추적 서비스를 의도적으로 불러오지는 않습니다.',
    ],
    children: [
      '게임은 단순해서 여러 연령대가 이용할 수 있지만 Hanveon은 특별히 어린이를 대상으로 만든 서비스는 아닙니다. 어린이를 포함해 누구에게도 개인정보 입력을 요구하지 않습니다. 다만 호스팅과 방문 수 확인에 필요한 기술 정보는 위에서 설명한 것처럼 Cloudflare가 처리할 수 있습니다.',
    ],
  },
  ja: {
    files: [
      'Hanveon のフォント、ゲーム画像、サイト独自のスクリプトは hanveon.com から配信されます。ただし Cloudflare Web Analytics の解析用ビーコンは Cloudflare のアドレスから読み込まれる場合があります。',
      '上で説明したホスティングと訪問数の計測を除き、Hanveon が他社の広告・追跡サービスを意図的に読み込むことはありません。',
    ],
    children: [
      'ゲームはシンプルでさまざまな年齢の方が遊べますが、Hanveon は特に子どもを対象としたサービスではありません。子どもを含め、誰に対しても個人情報の入力を求めません。ただし、ホスティングや訪問数の計測に必要な技術情報は、上で説明したとおり Cloudflare が処理する場合があります。',
    ],
  },
  es: {
    files: [
      'Las fuentes, las imágenes de los juegos y los scripts propios de Hanveon se sirven desde hanveon.com. La excepción es Cloudflare Web Analytics: su baliza de análisis puede cargarse desde una dirección de Cloudflare.',
      'Aparte del alojamiento y del recuento de visitas explicados arriba, Hanveon no carga de forma intencionada servicios publicitarios o de seguimiento de otros proveedores.',
    ],
    children: [
      'Los juegos son sencillos y pueden jugar personas de distintas edades, pero Hanveon no está dirigido específicamente a menores. Hanveon no pide a los menores, ni a nadie, que envíen información personal. Cloudflare puede seguir procesando la información técnica necesaria para el alojamiento y el recuento de visitas, tal como se explica arriba.',
    ],
  },
  fr: {
    files: [
      'Les polices, les images des jeux et les scripts propres à Hanveon sont servis depuis hanveon.com. Cloudflare Web Analytics fait exception : sa balise d’analyse peut être chargée depuis une adresse Cloudflare.',
      'En dehors de l’hébergement et de la mesure des visites décrits plus haut, Hanveon ne charge pas volontairement de services publicitaires ou de suivi provenant d’autres fournisseurs.',
    ],
    children: [
      'Les jeux sont simples et peuvent être utilisés par des personnes de différents âges, mais Hanveon ne s’adresse pas spécifiquement aux enfants. Hanveon ne demande à personne, y compris aux enfants, de fournir des informations personnelles. Les informations techniques nécessaires à l’hébergement et à la mesure des visites peuvent néanmoins être traitées par Cloudflare comme expliqué plus haut.',
    ],
  },
  zh: {
    files: [
      'Hanveon 的字体、游戏图片和网站自身脚本都由 hanveon.com 提供。Cloudflare Web Analytics 是例外：它的分析信标可能会从 Cloudflare 的地址加载。',
      '除上面说明的托管和访问统计外，Hanveon 不会主动加载其他服务商的广告或追踪服务。',
    ],
    children: [
      '游戏比较简单，不同年龄的人都可以玩，但 Hanveon 并不是专门面向儿童的服务。Hanveon 不会要求儿童或其他任何人提交个人信息。不过，托管和访问统计所需的技术信息仍可能由 Cloudflare 按照上面的说明进行处理。',
    ],
  },
} as const;

for (const lang of Object.keys(privacyFixes) as (keyof typeof privacyFixes)[]) {
  const copy = PRIVACY[lang];
  if (!copy) continue;
  const fix = privacyFixes[lang];
  // Privacy의 블록 순서: 0 운영자, 1 계정, 2 로컬 저장, 3 호스팅,
  // 4 분석, 5 광고, 6 사이트 파일, 7 어린이, 8 권리, 9 변경.
  copy.blocks[6] = { ...copy.blocks[6], p: [...fix.files] };
  copy.blocks[7] = { ...copy.blocks[7], p: [...fix.children] };
}
