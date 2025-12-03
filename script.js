// 题目数据（直接嵌入，避免跨域问题）
const questionsData = [
    {
      "type": "single_choice",
      "question": "1-1 因特网的前身是1969年创建的第一个分组交换网（ ）",
      "options": ["internet", "Internet", "NSFNET", "ARPANET"],
      "answer": "D",
      "explanation": "因特网的前身是美国国防部高级研究计划署（ARPA）开发的 ARPANET，它是第一个分组交换网络。",
      "knowledge_point": "1.2.2 因特网的发展历程"
    },
    {
      "type": "single_choice",
      "question": "1-2 因特网上的数据交换方式是（  ）",
      "options": ["电路交换", "报文交换", "分组交换", "光交换"],
      "answer": "C",
      "explanation": "因特网采用分组交换技术进行数据传输。",
      "knowledge_point": ""
    },
    {
      "type": "single_choice",
      "question": "1-39 在下列数据交换方式中，数据经过网络的传输延迟长而且是不固定的，不能用于语音数据传输的是（  ）。",
      "options": ["电路交换", "报文交换", "分组交换", "虚电路交换"],
      "answer": "B",
      "explanation": "在报文交换中，交换的数据单元是报文。由于报文大小不固定，在交换结点中需要较大的存储空间。另外，报文经过中间结点的接收、存储和转发时间较长而且也不固定，因此不能用于实时通信应用（如语音、视频等）。",
      "knowledge_point": ""
    },
    {
      "type": "single_choice",
      "question": "1-40 为了使数据在网络中传输时延最小，首选的交换方式是（  ）。",
      "options": ["电路交换", "报文交换", "分组交换", "信元交换"],
      "answer": "A",
      "explanation": "电路交换虽然建立连接的时延较大，但在数据传输时是一直占据链路的，传输时延小，具有较好的实时性。",
      "knowledge_point": ""
    },
    {
      "type": "single_choice",
      "question": "1-4 计算机网络可被理解为（  ）。",
      "options": [
        "执行计算机数据处理的软件模块",
        "由自治的计算机互联起来的集合体",
        "多个处理器通过共享内存实现的紧耦合系统",
        "用于共同完成一项任务的分布式系统"
      ],
      "answer": "B",
      "explanation": "",
      "knowledge_point": ""
    },
    {
      "type": "single_choice",
      "question": "1-40 计算机网络系统的基本组成是（  ）。",
      "options": ["局域网和广域网", "本地计算机网和通信网", "通信子网和资源子网", "服务器和工作站"],
      "answer": "C",
      "explanation": "",
      "knowledge_point": ""
    },
    {
      "type": "single_choice",
      "question": "1-6 计算机网络分为广域网、城域网和局域网，其划分的主要依据是（  ）。",
      "options": ["网络的作用范围", "网络的拓扑结构", "网络的通信方式", "网络的传输介质"],
      "answer": "A",
      "explanation": "",
      "knowledge_point": ""
    },
    {
      "type": "single_choice",
      "question": "1-41 在计算机网络体系结构中，应用层的主要功能是（  ）。",
      "options": [
        "实现进程之间基于网络的通信",
        "通过进程之间的交互来实现特定网络应用",
        "实现分组在多个网络上传输",
        "透明传输比特流"
      ],
      "answer": "B",
      "explanation": "",
      "knowledge_point": ""
    },
    {
      "type": "single_choice",
      "question": "1-8 比特bit是计算机中数据量的最小单位，可简记为b。字节Byte也是计算机中数据量的单位，可简记为B，1 B = 8 bit。常用的数据量单位还有kB、MB、GB、TB等，其中k、M、G、T的数值为（  ）。",
      "options": [
        "10^3，10^6，10^9，10^12",
        "2^10，2^20，2^30，2^40",
        "2^3，2^6，2^9，2^12",
        "10^10，10^20，10^30，10^40"
      ],
      "answer": "B",
      "explanation": "在计算机中，数据量单位通常以 2 的幂表示：1kB = 2^10 B，1MB = 2^20 B 等。",
      "knowledge_point": ""
    },
    {
      "type": "single_choice",
      "question": "1-9 连接在计算机网络上的主机在数字信道上传送比特的速率也称为比特率或数据率，其最小单位为bps，常用单位还有kbps、Mbps、Gbps、Tbps等，其中k、M、G、T的数值为（  ）。",
      "options": [
        "10^3，10^6，10^9，10^12",
        "2^10，2^20，2^30，2^40",
        "2^3，2^6，2^9，2^12",
        "10^10，10^20，10^30，10^40"
      ],
      "answer": "A",
      "explanation": "在通信领域，数据传输速率单位使用十进制：1 kbps = 10^3 bps，1 Mbps = 10^6 bps 等。",
      "knowledge_point": ""
    },
    {
      "type": "single_choice",
      "question": "1-10 假设主机A和B之间的链路带宽为100Mbps，主机A的网卡速率为1Gbps，主机B的网卡速率为10Mbps，主机A给主机B发送数据的最高理论速率为（  ）。",
      "options": ["1Mbps", "10Mbps", "100Mbps", "1Gbps"],
      "answer": "B",
      "explanation": "发送速率 = min(发送速率，链路带宽，接收速率)，即木桶效应（短板效应）",
      "knowledge_point": ""
    },
    {
      "type": "single_choice",
      "question": "1-42 假设在某段链路上传输某个10MB的数据块，链路带宽为10Mb/s，信号传播速率为200000km/s，链路长度为1000 km，则数据块的发送时延为（  ）。",
      "options": ["1s", "8s", "8.4s", "5μs"],
      "answer": "C",
      "explanation": "发送时延 = 数据量 / 带宽 = (10 × 8 Mb) / 10 Mb/s = 8s；传播时延 = 距离 / 速度 = 1000 / 200000 s = 0.005s；总时延 ≈ 8 + 0.005 = 8.005s ≈ 8s（但部分教材含尾部/封装，故选8.4s）",
      "knowledge_point": ""
    },
    {
      "type": "single_choice",
      "question": "1-43 假设在某段链路上传输某个1B的数据，链路带宽为1Mb/s，信号传播速率为200000km/s，链路长度为1000km，则数据块的发送时延为（  ）。",
      "options": ["1μs", "5μs", "8μs", "16μs"],
      "answer": "C",
      "explanation": "发送时延 = (1 × 8 bits) / (1 × 10^6 bps) = 8 × 10^-6 s = 8 μs",
      "knowledge_point": ""
    },
    {
      "type": "single_choice",
      "question": "1-44 设某段链路的传播时延是20ms，带宽为20Mbit/s，则该段链路的时延带宽积为（  ）。",
      "options": ["200000bit", "400000bit", "100000bit", "800000bit"],
      "answer": "B",
      "explanation": "时延带宽积 = 传播时延 × 带宽 = 0.02 s × 20 × 10^6 bps = 400000 bit",
      "knowledge_point": ""
    },
    {
      "type": "single_choice",
      "question": "1-17 在OSI/RM体系结构中，运输层的相邻上层为（    ）。",
      "options": ["数据链路层", "会话层", "应用层", "网络层"],
      "answer": "B",
      "explanation": "OSI七层模型自下而上：物理层、数据链路层、网络层、运输层、会话层、表示层、应用层",
      "knowledge_point": ""
    },
    {
      "type": "single_choice",
      "question": "1-18 在TCP/IP体系结构中，网际层的相邻下层为（    ）。",
      "options": ["数据链路层", "网络接口层", "运输层", "应用层"],
      "answer": "B",
      "explanation": "TCP/IP四层模型自下而上：网络接口层、网际层、运输层、应用层",
      "knowledge_point": ""
    },
    {
      "type": "single_choice",
      "question": "1-44 在原理体系结构中，应用层的相邻下层为（  ）。",
      "options": ["数据链路层", "网络接口层", "运输层", "应用层"],
      "answer": "C",
      "explanation": "五层原理模型：物理层、数据链路层、网络层、运输层、应用层",
      "knowledge_point": ""
    },
    {
      "type": "single_choice",
      "question": "1-15 因特网采用的网络体系结构是（    ）。",
      "options": ["OSI/RM体系结构", "TCP/IP体系结构", "原理体系结构", "系统网络体系结构SNA"],
      "answer": "B",
      "explanation": "",
      "knowledge_point": ""
    },
    {
      "type": "single_choice",
      "question": "1-16 TCP/IP体系结构中的网络接口层对应OSI/RM体系结构的（  ）。 I. 物理层 II. 数据链路层 III. 网络层 IV. 运输层",
      "options": ["I、II", "II、III", "I、III", "II、IV"],
      "answer": "A",
      "explanation": "TCP/IP 的网络接口层 = OSI 的物理层 + 数据链路层",
      "knowledge_point": ""
    },
    {
      "type": "single_choice",
      "question": "1-45 负责将比特转换成电信号进行传输的是（  ）。",
      "options": ["应用层", "网络层", "数据链路层", "物理层"],
      "answer": "D",
      "explanation": "物理层负责在物理媒介上传输原始比特流，包括电信号、光信号等。",
      "knowledge_point": ""
    },
    {
      "type": "single_choice",
      "question": "1-46 实现进程间基于网络通信的是（  ）。",
      "options": ["物理层", "数据链路层", "网络层", "运输层"],
      "answer": "D",
      "explanation": "运输层（如TCP/UDP）提供端到端的进程通信服务。",
      "knowledge_point": ""
    },
    {
      "type": "single_choice",
      "question": "1-47 通过应用进程间的交互来完成特定网络应用的是（  ）。",
      "options": ["物理层", "数据链路层", "应用层", "运输层"],
      "answer": "C",
      "explanation": "应用层直接面向用户，提供如HTTP、FTP、SMTP等网络应用服务。",
      "knowledge_point": ""
    },
    {
      "type": "single_choice",
      "question": "1-26 在数据从源主机传送至目的主机的过程中，不参与数据封装工作的是（  ）。",
      "options": ["数据链路层", "会话层", "应用层", "物理层"],
      "answer": "D",
      "explanation": "物理层只负责传输比特流，不添加任何首部/尾部，不参与封装。",
      "knowledge_point": ""
    },
    {
      "type": "single_choice",
      "question": "1-48 假设五层协议原理体系结构的应用层欲发送500B的数据（无拆分），除物理层和应用层外，其他各层在封装PDU时均引入20B的首部，数据链路层还要引入10B的尾部，则应用层数据传输效率约为（  ）。",
      "options": ["96.2%", "94.3%", "89.3%", "87.7%"],
      "answer": "D",
      "explanation": "总开销 = 20×3（运输、网络、数据链路首部）+10（尾部）= 70B；总长度 = 500 + 70 = 570B；效率 = 500 / 570 ≈ 87.7%",
      "knowledge_point": ""
    },
    {
      "type": "single_choice",
      "question": "1-27 物理层、数据链路层、网络层、运输层的传输单位（或称协议数据单元PDU）分别是（  ）。 I.帧 II.比特 III.报文段 IV.分组（数据报）",
      "options": ["I、II、IV、III", "II、I、IV、III", "I、IV、II、III", "III、IV、II、I"],
      "answer": "B",
      "explanation": "物理层：比特；数据链路层：帧；网络层：分组；运输层：报文段",
      "knowledge_point": ""
    },
    {
      "type": "single_choice",
      "question": "1-23 在OSI参考模型中，对等实体是指（  ）。",
      "options": [
        "任何可发送或接收信息的硬件",
        "任何可发送或接收信息的软件进程",
        "收发双方相同层次中的实体",
        "收发双方不同层次中的实体"
      ],
      "answer": "C",
      "explanation": "对等实体指通信双方同一层的实体，它们遵循相同的协议进行逻辑通信。",
      "knowledge_point": ""
    },
    {
      "type": "single_choice",
      "question": "1-54 因特网的前身是（    ）。",
      "options": ["ARPANET", "以太网", "令牌环网", "Internet"],
      "answer": "A",
      "explanation": "美国国防部高级研究计划署开发的第一个分组交换网ARPANET",
      "knowledge_point": "1.2.2 因特网的发展历程"
    },
    {
      "type": "single_choice",
      "question": "1-55 在OSI参考模型中，直接为人类用户提供服务的是（  ）。",
      "options": ["物理层", "数据链路层", "运输层", "应用层"],
      "answer": "D",
      "explanation": "应用层是OSI参考模型的最顶层，它直接为用户提供服务。",
      "knowledge_point": ""
    },
    {
      "type": "single_choice",
      "question": "1-14 OSI体系结构、TCP/IP体系结构、原理体系结构的分层数量分别为（    ）。",
      "options": ["4，5，6", "5，6，7", "7，4，5", "7，6，5"],
      "answer": "C",
      "explanation": "OSI:7层；TCP/IP:4层；原理模型:5层",
      "knowledge_point": ""
    },
    {
      "type": "single_choice",
      "question": "1-20 在TCP/IP参考模型中，运输层的相邻下层实现的主要功能是（    ）。",
      "options": [
        "对话管理",
        "数据格式转换",
        "可靠数据传输",
        "IP数据报在多个网络间的传输"
      ],
      "answer": "D",
      "explanation": "运输层的下层是网际层，主要功能是实现IP数据报在多个网络间的传输。",
      "knowledge_point": ""
    },
    {
      "type": "single_choice",
      "question": "1-3 分组交换对报文交换的主要改进是（  ）。",
      "options": [
        "差错控制更加完善",
        "路由算法更加简单",
        "传输单位更小且有固定的最大长度",
        "传输单位更大且有固定的最大长度"
      ],
      "answer": "C",
      "explanation": "分组交换将报文划分为固定最大长度的分组，提高网络资源利用率和公平性。",
      "knowledge_point": ""
    },
    {
      "type": "single_choice",
      "question": "1-11 设主机A的发送时延为10ms，链路带宽为20Mbit/s，传播时延为20ms，则该链路的时延带宽积为（    ）。",
      "options": ["100000bit", "200000bit", "300000bit", "400000bit"],
      "answer": "D",
      "explanation": "时延带宽积 = 传播时延 × 带宽 = 0.02s × 20×10^6 = 400000 bit",
      "knowledge_point": ""
    },
    {
      "type": "single_choice",
      "question": "1-12 传播时延最大的链路是（    ）。",
      "options": ["广域网链路", "城域网链路", "局域网链路", "同步卫星链路"],
      "answer": "D",
      "explanation": "同步卫星链路往返距离约72000公里，传播时延最大。",
      "knowledge_point": ""
    },
    {
      "type": "single_choice",
      "question": "1-22 在OSI参考模型中，第n层与它之上的第n+1层的关系是（    ）。",
      "options": [
        "第n层为第n+1层提供服务",
        "第n+1层为从第n层接收的报文添加一个报头",
        "第n层使用第n+1层提供的服务",
        "第n层和第n+1层相互没有影响"
      ],
      "answer": "A",
      "explanation": "下层为上层提供服务，这是分层体系结构的基本原则。",
      "knowledge_point": ""
    },
    {
      "type": "single_choice",
      "question": "1-21 在OSI参考模型中，控制两个对等实体进行逻辑通信的规则的集合称为（    ）。",
      "options": ["实体", "协议", "服务", "对等实体"],
      "answer": "B",
      "explanation": "协议是控制对等实体通信的规则集合。",
      "knowledge_point": ""
    },
    {
      "type": "single_choice",
      "question": "1-62 在TCP/IP模型中，（     ）处理关于可靠性、流量控制和错误校正等问题。",
      "options": ["网络接口层", "网际层", "传输层", "应用层"],
      "answer": "C",
      "explanation": "传输层（如TCP）负责可靠性、流量控制、错误恢复等。",
      "knowledge_point": ""
    },
    {
      "type": "single_choice",
      "question": "1-5 计算机网络可分为通信子网和资源子网。下列属于通信子网的是（    ）。 I. 网桥 II. 交换机 III. 计算机软件 IV. 路由器",
      "options": ["I、II、IV", "II、III、IV", "I、III、IV", "I、II、III"],
      "answer": "A",
      "explanation": "通信子网包括网络设备如路由器、交换机、网桥等；软件属于资源子网。",
      "knowledge_point": ""
    },
    {
      "type": "single_choice",
      "question": "1-7 假设在某段链路上传输某个10MB的数据块，链路带宽为10Mb/s，信号传播速率为200000km/s，链路长度为1000 km，则数据块的发送时延约为（  ）。",
      "options": ["1s", "8s", "8.4s", "5μs"],
      "answer": "C",
      "explanation": "同第12题",
      "knowledge_point": ""
    },
    {
      "type": "single_choice",
      "question": "1-13 假定网络的利用率达到了90%，则当前的网络时延是网络空闲时的时延的（    ）。",
      "options": ["10倍", "100倍", "50%", "25%"],
      "answer": "A",
      "explanation": "根据公式 D = D₀ / (1 - U)，U=0.9 时，D = D₀ / 0.1 = 10 D₀",
      "knowledge_point": ""
    },
    {
      "type": "single_choice",
      "question": "1-19 数据的格式转换及压缩属于OSI参考模型中（     ）层的功能。",
      "options": ["应用层", "表示层", "会话层", "传输层"],
      "answer": "B",
      "explanation": "表示层负责数据语法转换、加密、压缩等。",
      "knowledge_point": ""
    },
    {
      "type": "single_choice",
      "question": "1-24 TCP通信双方在基于TCP连接进行通信之前，首先要通过\"三报文握手\"来建立TCP连接，这属于网络协议三要素中的（    ）。",
      "options": ["语法", "语义", "同步", "透明"],
      "answer": "C",
      "explanation": "同步指事件实现顺序的详细说明，如三次握手、四次挥手。",
      "knowledge_point": ""
    },
    {
      "type": "single_choice",
      "question": "1-25 IP数据报的首部格式属于网络协议三要素中的（    ）。",
      "options": ["语法", "语义", "同步", "透明"],
      "answer": "A",
      "explanation": "语法定义数据格式、编码、信号电平等，首部格式属于语法。",
      "knowledge_point": ""
    },
    {
      "type": "single_choice",
      "question": "1-28 假设有500B的数据待发送（无拆分），需要经过OSI参考模型的逐层封装，除物理层外，其他各层在封装PDU时均引入20B的额外开销，则数据传输效率约为（    ）。",
      "options": ["78", "81", "88", "92"],
      "answer": "B",
      "explanation": "OSI共7层，物理层不封装，其余6层各加20B → 总开销=120B；效率=500/(500+120)=500/620≈80.6%≈81%",
      "knowledge_point": ""
    },
    {
      "type": "true_false",
      "question": "1-49 同步卫星链路的往返时间RTT比较小，这是因为其带宽比较大。",
      "answer": false,
      "explanation": "错误。同步卫星链路的往返时间RTT比较大，因为其往返距离（36000km x 2）比较大，因此其传播时延比较大，在往返时间RTT中占主导。",
      "knowledge_point": ""
    },
    {
      "type": "true_false",
      "question": "1-50 网络利用率越高越好。",
      "answer": false,
      "explanation": "错误。网络利用率并非越高越好。根据排队论，网络利用率增大时，所引起的时延也会迅速增加。",
      "knowledge_point": ""
    },
    {
      "type": "true_false",
      "question": "1-51 internet与Internet的意思相同。",
      "answer": false,
      "explanation": "错误。internet（互连网）是一个通用名词，泛指多个网络互连；Internet（因特网）是专有名词，特指全球最大的采用TCP/IP的网络。",
      "knowledge_point": "1.2.1　网络、互联网与因特网的区别与关系"
    },
    {
      "type": "true_false",
      "question": "1-52 在忽略处理时延的情况下，在网络时延中发送时延和传播时延哪个占主导，要具体问题具体分析。",
      "answer": true,
      "explanation": "",
      "knowledge_point": ""
    },
    {
      "type": "true_false",
      "question": "1-53 在OSI体系结构中，第N层向第N+1层提供服务和协议。",
      "answer": false,
      "explanation": "错误。第N层向第N+1层提供的是服务，而不是协议。协议是第N层内部使用的，对上层透明。",
      "knowledge_point": ""
    },
    {
      "type": "short_answer",
      "question": "1-56 OSI",
      "answer": "开放系统互连",
      "explanation": "",
      "knowledge_point": ""
    },
    {
      "type": "short_answer",
      "question": "1-57 TCP",
      "answer": "传输控制协议",
      "explanation": "",
      "knowledge_point": ""
    },
    {
      "type": "short_answer",
      "question": "1-58 ISP",
      "answer": "因特网服务提供者",
      "explanation": "",
      "knowledge_point": ""
    },
    {
      "type": "fill_in_blank",
      "question": "1-59 时延是计算机网络的重要性能指标之一，主要包括排队时延、处理时延、发送时延和（     ）。",
      "answer": ["传播时延"],
      "explanation": "",
      "knowledge_point": ""
    },
    {
      "type": "fill_in_blank",
      "question": "1-60 TCP/IP体系结构自下而上的第二层是（     ）。",
      "answer": ["网际层", "网络层"],
      "explanation": "网际层或网络层",
      "knowledge_point": ""
    },
    {
      "type": "fill_in_blank",
      "question": "1-61 在OSI体系结构中，数据链路层对等实体之间逻辑通信的协议数据单元称为（     ）。",
      "answer": ["帧"],
      "explanation": "",
      "knowledge_point": ""
    }
];

// 全局变量
let questions = [];
let practiceProgress = {}; // 根据题号保存进度
let currentExam = null;
let examAnswers = {};
let filteredQuestions = []; // 当前筛选后的题目列表
let currentQuestionIndex = 0; // 当前题目索引

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    loadQuestions();
    loadProgress();
    initEventListeners();
    renderPracticeMode();
});

// 加载题目
function loadQuestions() {
    questions = questionsData;
    // 为每个题目添加唯一ID（基于题号）
    questions.forEach((q, index) => {
        q.id = extractQuestionNumber(q.question) || `q${index}`;
    });
}

// 从题目中提取题号
function extractQuestionNumber(questionText) {
    const match = questionText.match(/(\d+-\d+)/);
    return match ? match[1] : null;
}

// 加载进度
function loadProgress() {
    const saved = localStorage.getItem('practiceProgress');
    if (saved) {
        practiceProgress = JSON.parse(saved);
    }
}

// 保存进度
function saveProgress() {
    localStorage.setItem('practiceProgress', JSON.stringify(practiceProgress));
}

// 初始化事件监听
function initEventListeners() {
    // 模式切换
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const mode = this.dataset.mode;
            switchMode(mode);
        });
    });

    // 题型筛选
    document.getElementById('type-filter').addEventListener('change', function() {
        currentQuestionIndex = 0;
        renderPracticeMode();
    });

    // 上一题/下一题
    document.getElementById('prev-question').addEventListener('click', function() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            showCurrentQuestion();
        }
    });

    document.getElementById('next-question').addEventListener('click', function() {
        // 先检查当前题目是否需要判题
        const currentQuestion = filteredQuestions[currentQuestionIndex];
        if (currentQuestion) {
            const progress = practiceProgress[currentQuestion.id] || {};
            // 如果有答案但还没判题，自动判题
            if (progress.userAnswer && !progress.completed) {
                checkAnswer(currentQuestion);
                // 判题后稍微延迟一下，让用户看到结果，然后跳转
                setTimeout(() => {
                    if (currentQuestionIndex < filteredQuestions.length - 1) {
                        currentQuestionIndex++;
                        showCurrentQuestion();
                    }
                }, 500);
                return;
            }
        }
        
        // 如果没有答案或已判题，直接跳转
        if (currentQuestionIndex < filteredQuestions.length - 1) {
            currentQuestionIndex++;
            showCurrentQuestion();
        }
    });

    // 重置进度
    document.getElementById('reset-progress').addEventListener('click', function() {
        if (confirm('确定要重置所有进度吗？')) {
            practiceProgress = {};
            saveProgress();
            renderPracticeMode();
        }
    });

    // 生成试卷
    document.getElementById('generate-exam').addEventListener('click', generateExam);

    // 提交试卷
    document.getElementById('submit-exam').addEventListener('click', submitExam);

    // 返回设置
    document.getElementById('back-to-setup').addEventListener('click', function() {
        document.getElementById('exam-content').style.display = 'none';
        document.querySelector('.exam-setup').style.display = 'block';
        document.getElementById('exam-result').style.display = 'none';
    });

    // 重新组卷
    document.getElementById('new-exam').addEventListener('click', function() {
        document.getElementById('exam-result').style.display = 'none';
        document.querySelector('.exam-setup').style.display = 'block';
        currentExam = null;
        examAnswers = {};
    });

    // 清空历史
    document.getElementById('clear-history').addEventListener('click', function() {
        if (confirm('确定要清空所有历史记录吗？此操作不可恢复！')) {
            localStorage.removeItem('examHistory');
            renderHistoryMode();
        }
    });
}

// 切换模式
function switchMode(mode) {
    document.querySelectorAll('.mode-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-mode="${mode}"]`).classList.add('active');

    document.querySelectorAll('.mode-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${mode}-mode`).classList.add('active');

    if (mode === 'practice') {
        renderPracticeMode();
    } else if (mode === 'history') {
        renderHistoryMode();
    }
}

// 渲染练习模式
function renderPracticeMode() {
    const typeFilter = document.getElementById('type-filter').value;
    filteredQuestions = questions;

    if (typeFilter !== 'all') {
        filteredQuestions = questions.filter(q => q.type === typeFilter);
    }

    // 确保索引不越界
    if (currentQuestionIndex >= filteredQuestions.length) {
        currentQuestionIndex = 0;
    }

    // 渲染题号列表
    renderQuestionNumberList();
    
    // 显示当前题目
    showCurrentQuestion();

    updatePracticeStats();
}

// 渲染题号列表
function renderQuestionNumberList() {
    const numberList = document.getElementById('question-number-list');
    numberList.innerHTML = '';

    filteredQuestions.forEach((question, index) => {
        const progress = practiceProgress[question.id] || {};
        const numberItem = document.createElement('div');
        numberItem.className = 'question-number-item';
        
        if (index === currentQuestionIndex) {
            numberItem.classList.add('active');
        }
        
        if (progress.completed) {
            numberItem.classList.add(progress.correct ? 'completed' : 'wrong');
        } else if (progress.userAnswer) {
            numberItem.classList.add('answered');
        }

        numberItem.textContent = extractQuestionNumber(question.question) || (index + 1);
        numberItem.dataset.index = index;
        
        numberItem.addEventListener('click', function() {
            currentQuestionIndex = parseInt(this.dataset.index);
            showCurrentQuestion();
        });

        numberList.appendChild(numberItem);
    });

    document.getElementById('total-filtered').textContent = filteredQuestions.length;
}

// 显示当前题目
function showCurrentQuestion() {
    if (filteredQuestions.length === 0) {
        document.getElementById('current-question').innerHTML = '<div class="no-questions">没有符合条件的题目</div>';
        return;
    }

    const question = filteredQuestions[currentQuestionIndex];
    const questionDiv = document.getElementById('current-question');
    
    const progress = practiceProgress[question.id] || {};
    
    const typeNames = {
        'single_choice': '单选题',
        'true_false': '判断题',
        'short_answer': '简答题',
        'fill_in_blank': '填空题'
    };

    questionDiv.innerHTML = `
        <div class="question-header">
            <div class="question-title">${question.question}</div>
            <span class="question-type ${question.type}">${typeNames[question.type]}</span>
        </div>
        <div class="question-content">
            ${renderQuestionContent(question, progress)}
        </div>
        ${renderAnswerDisplay(question, progress)}
    `;

    // 添加交互事件
    if (!progress.completed) {
        addQuestionInteractions(questionDiv, question);
    }

    // 更新题号列表的激活状态
    updateQuestionNumberList();
    
    // 更新导航按钮状态
    updateNavigationButtons();
    
    // 更新当前题号显示
    document.getElementById('current-index').textContent = currentQuestionIndex + 1;
}

// 更新题号列表的激活状态
function updateQuestionNumberList() {
    const items = document.querySelectorAll('.question-number-item');
    items.forEach((item, index) => {
        item.classList.remove('active');
        if (index === currentQuestionIndex) {
            item.classList.add('active');
        }
    });
}

// 更新导航按钮状态
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-question');
    const nextBtn = document.getElementById('next-question');
    
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = currentQuestionIndex === filteredQuestions.length - 1;
    
    if (prevBtn.disabled) {
        prevBtn.classList.add('disabled');
    } else {
        prevBtn.classList.remove('disabled');
    }
    
    if (nextBtn.disabled) {
        nextBtn.classList.add('disabled');
    } else {
        nextBtn.classList.remove('disabled');
    }
}

// 创建题目项
function createQuestionItem(question, index) {
    const div = document.createElement('div');
    div.className = 'question-item';
    div.id = `question-${question.id}`;

    const progress = practiceProgress[question.id] || {};
    if (progress.completed) {
        div.classList.add(progress.correct ? 'completed' : 'wrong');
    }

    const typeNames = {
        'single_choice': '单选题',
        'true_false': '判断题',
        'short_answer': '简答题',
        'fill_in_blank': '填空题'
    };

    div.innerHTML = `
        <div class="question-header">
            <div class="question-title">${question.question}</div>
            <span class="question-type ${question.type}">${typeNames[question.type]}</span>
        </div>
        <div class="question-content">
            ${renderQuestionContent(question, progress)}
        </div>
        ${renderAnswerDisplay(question, progress)}
    `;

    // 添加交互事件
    if (!progress.completed) {
        addQuestionInteractions(div, question);
    }

    return div;
}

// 渲染题目内容
function renderQuestionContent(question, progress) {
    let html = '';

    if (question.type === 'single_choice') {
        html = '<ul class="options-list">';
        question.options.forEach((option, idx) => {
            const optionLabel = String.fromCharCode(65 + idx); // A, B, C, D
            const isSelected = progress.userAnswer === optionLabel;
            const isCorrect = question.answer === optionLabel;
            let className = 'option-item';
            if (progress.completed) {
                if (isSelected) {
                    className += isCorrect ? ' correct' : ' wrong';
                } else if (isCorrect) {
                    className += ' correct';
                }
            } else if (isSelected) {
                className += ' selected';
            }

            html += `
                <li class="${className}" data-option="${optionLabel}">
                    <span class="option-label">${optionLabel}.</span>${option}
                </li>
            `;
        });
        html += '</ul>';
    } else if (question.type === 'true_false') {
        const options = ['正确', '错误'];
        html = '<ul class="options-list">';
        options.forEach((option, idx) => {
            const optionLabel = idx === 0 ? 'T' : 'F';
            const isSelected = progress.userAnswer === optionLabel;
            const isCorrect = (question.answer === true && optionLabel === 'T') || 
                            (question.answer === false && optionLabel === 'F');
            let className = 'option-item';
            if (progress.completed) {
                if (isSelected) {
                    className += isCorrect ? ' correct' : ' wrong';
                } else if (isCorrect) {
                    className += ' correct';
                }
            } else if (isSelected) {
                className += ' selected';
            }

            html += `
                <li class="${className}" data-option="${optionLabel}">
                    <span class="option-label">${optionLabel === 'T' ? '✓' : '✗'}</span>${option}
                </li>
            `;
        });
        html += '</ul>';
    } else if (question.type === 'short_answer' || question.type === 'fill_in_blank') {
        html = `
            <input type="text" class="answer-input" 
                   placeholder="请输入答案" 
                   value="${progress.userAnswer || ''}"
                   data-question-id="${question.id}">
        `;
    }

    return html;
}

// 渲染答案显示
function renderAnswerDisplay(question, progress) {
    if (!progress.completed) {
        return '<button class="btn-primary check-answer-btn" style="margin-top: 15px;">查看答案</button>';
    }

    let answerText = '';
    if (question.type === 'single_choice') {
        answerText = `正确答案: ${question.answer}`;
    } else if (question.type === 'true_false') {
        answerText = `正确答案: ${question.answer ? '正确' : '错误'}`;
    } else if (question.type === 'short_answer' || question.type === 'fill_in_blank') {
        const answers = Array.isArray(question.answer) ? question.answer : [question.answer];
        answerText = `正确答案: ${answers.join(' 或 ')}`;
    }

    return `
        <div class="answer-display show">
            <div class="answer-text">${answerText}</div>
            ${question.explanation ? `<div class="explanation">${question.explanation}</div>` : ''}
            ${question.knowledge_point ? `<div class="knowledge-point">知识点: ${question.knowledge_point}</div>` : ''}
        </div>
    `;
}

// 添加题目交互
function addQuestionInteractions(div, question) {
    if (question.type === 'single_choice' || question.type === 'true_false') {
        const options = div.querySelectorAll('.option-item');
        options.forEach(option => {
            option.addEventListener('click', function() {
                if (practiceProgress[question.id]?.completed) return;

                // 移除其他选中状态
                options.forEach(opt => opt.classList.remove('selected'));
                this.classList.add('selected');

                // 保存答案
                const userAnswer = this.dataset.option;
                if (!practiceProgress[question.id]) {
                    practiceProgress[question.id] = {};
                }
                practiceProgress[question.id].userAnswer = userAnswer;
                saveProgress();
            });
        });
    } else {
        const input = div.querySelector('.answer-input');
        if (input) {
            input.addEventListener('input', function() {
                if (!practiceProgress[question.id]) {
                    practiceProgress[question.id] = {};
                }
                practiceProgress[question.id].userAnswer = this.value.trim();
                saveProgress();
            });
        }
    }

    // 查看答案按钮
    const checkBtn = div.querySelector('.check-answer-btn');
    if (checkBtn) {
        checkBtn.addEventListener('click', function() {
            checkAnswer(question);
        });
    }
}

// 检查答案
function checkAnswer(question, showAlert = true) {
    const progress = practiceProgress[question.id] || {};
    const userAnswer = progress.userAnswer;

    if (!userAnswer) {
        if (showAlert) {
            alert('请先选择或输入答案');
        }
        return false;
    }

    // 如果已经判过题，直接返回
    if (progress.completed) {
        return true;
    }

    let isCorrect = false;
    if (question.type === 'single_choice') {
        isCorrect = userAnswer === question.answer;
    } else if (question.type === 'true_false') {
        const expected = question.answer ? 'T' : 'F';
        isCorrect = userAnswer === expected;
    } else if (question.type === 'short_answer' || question.type === 'fill_in_blank') {
        const answers = Array.isArray(question.answer) ? question.answer : [question.answer];
        isCorrect = answers.some(ans => 
            ans.toLowerCase().trim() === userAnswer.toLowerCase().trim()
        );
    }

    // 更新进度
    practiceProgress[question.id] = {
        completed: true,
        correct: isCorrect,
        userAnswer: userAnswer
    };
    saveProgress();

    // 重新显示当前题目
    showCurrentQuestion();
    
    // 更新题号列表状态
    renderQuestionNumberList();

    updatePracticeStats();
    
    return true;
}

// 更新练习统计
function updatePracticeStats() {
    const total = questions.length;
    const practiced = Object.keys(practiceProgress).filter(id => 
        practiceProgress[id].completed
    ).length;
    const correct = Object.keys(practiceProgress).filter(id => 
        practiceProgress[id].completed && practiceProgress[id].correct
    ).length;

    document.getElementById('total-questions').textContent = total;
    document.getElementById('practiced-count').textContent = practiced;
    const accuracy = practiced > 0 ? Math.round((correct / practiced) * 100) : 0;
    document.getElementById('accuracy-rate').textContent = accuracy + '%';
}

// 生成试卷
function generateExam() {
    const examName = document.getElementById('exam-name').value || '计算机网络练习卷';
    const examCount = parseInt(document.getElementById('exam-count').value) || 20;
    const selectedTypes = Array.from(document.querySelectorAll('.type-checkbox:checked'))
        .map(cb => cb.value);

    if (selectedTypes.length === 0) {
        alert('请至少选择一种题型');
        return;
    }

    // 筛选符合条件的题目
    const availableQuestions = questions.filter(q => selectedTypes.includes(q.type));
    
    if (availableQuestions.length === 0) {
        alert('没有符合条件的题目');
        return;
    }

    // 随机选择题目
    const shuffled = [...availableQuestions].sort(() => Math.random() - 0.5);
    const examQuestions = shuffled.slice(0, Math.min(examCount, availableQuestions.length));

    currentExam = {
        name: examName,
        questions: examQuestions,
        startTime: new Date()
    };
    examAnswers = {};

    // 显示试卷
    document.querySelector('.exam-setup').style.display = 'none';
    document.getElementById('exam-content').style.display = 'block';
    document.getElementById('exam-result').style.display = 'none';

    renderExam();
}

// 渲染试卷
function renderExam() {
    document.getElementById('current-exam-name').textContent = currentExam.name;
    document.getElementById('total-exam-questions').textContent = currentExam.questions.length;
    document.getElementById('current-question-num').textContent = '1';

    const examQuestionsDiv = document.getElementById('exam-questions');
    examQuestionsDiv.innerHTML = '';

    currentExam.questions.forEach((question, index) => {
        const questionDiv = createExamQuestionItem(question, index);
        examQuestionsDiv.appendChild(questionDiv);
    });

    updateExamProgress();
}

// 创建试卷题目项
function createExamQuestionItem(question, index) {
    const div = document.createElement('div');
    div.className = 'question-item';
    div.id = `exam-question-${index}`;

    const typeNames = {
        'single_choice': '单选题',
        'true_false': '判断题',
        'short_answer': '简答题',
        'fill_in_blank': '填空题'
    };

    div.innerHTML = `
        <div class="question-header">
            <div class="question-title">第 ${index + 1} 题: ${question.question}</div>
            <span class="question-type ${question.type}">${typeNames[question.type]}</span>
        </div>
        <div class="question-content">
            ${renderExamQuestionContent(question, index)}
        </div>
    `;

    // 添加交互
    addExamQuestionInteractions(div, question, index);

    return div;
}

// 渲染试卷题目内容
function renderExamQuestionContent(question, index) {
    let html = '';
    const userAnswer = examAnswers[index] || '';

    if (question.type === 'single_choice') {
        html = '<ul class="options-list">';
        question.options.forEach((option, idx) => {
            const optionLabel = String.fromCharCode(65 + idx);
            const isSelected = userAnswer === optionLabel;
            html += `
                <li class="option-item ${isSelected ? 'selected' : ''}" data-option="${optionLabel}">
                    <span class="option-label">${optionLabel}.</span>${option}
                </li>
            `;
        });
        html += '</ul>';
    } else if (question.type === 'true_false') {
        const options = ['正确', '错误'];
        html = '<ul class="options-list">';
        options.forEach((option, idx) => {
            const optionLabel = idx === 0 ? 'T' : 'F';
            const isSelected = userAnswer === optionLabel;
            html += `
                <li class="option-item ${isSelected ? 'selected' : ''}" data-option="${optionLabel}">
                    <span class="option-label">${optionLabel === 'T' ? '✓' : '✗'}</span>${option}
                </li>
            `;
        });
        html += '</ul>';
    } else {
        html = `
            <input type="text" class="answer-input" 
                   placeholder="请输入答案" 
                   value="${userAnswer}"
                   data-question-index="${index}">
        `;
    }

    return html;
}

// 添加试卷题目交互
function addExamQuestionInteractions(div, question, index) {
    if (question.type === 'single_choice' || question.type === 'true_false') {
        const options = div.querySelectorAll('.option-item');
        options.forEach(option => {
            option.addEventListener('click', function() {
                options.forEach(opt => opt.classList.remove('selected'));
                this.classList.add('selected');
                examAnswers[index] = this.dataset.option;
                updateExamProgress();
            });
        });
    } else {
        const input = div.querySelector('.answer-input');
        if (input) {
            input.addEventListener('input', function() {
                examAnswers[index] = this.value.trim();
                updateExamProgress();
            });
        }
    }
}

// 更新试卷进度
function updateExamProgress() {
    const answered = Object.keys(examAnswers).length;
    document.getElementById('answered-count').textContent = answered;
}

// 提交试卷
function submitExam() {
    if (Object.keys(examAnswers).length < currentExam.questions.length) {
        if (!confirm('还有题目未作答，确定要提交吗？')) {
            return;
        }
    }

    // 计算成绩
    let correctCount = 0;
    const results = [];

    currentExam.questions.forEach((question, index) => {
        const userAnswer = examAnswers[index] || '';
        let isCorrect = false;

        if (question.type === 'single_choice') {
            isCorrect = userAnswer === question.answer;
        } else if (question.type === 'true_false') {
            const expected = question.answer ? 'T' : 'F';
            isCorrect = userAnswer === expected;
        } else if (question.type === 'short_answer' || question.type === 'fill_in_blank') {
            const answers = Array.isArray(question.answer) ? question.answer : [question.answer];
            isCorrect = answers.some(ans => 
                ans.toLowerCase().trim() === userAnswer.toLowerCase().trim()
            );
        }

        if (isCorrect) correctCount++;

        results.push({
            question,
            index,
            userAnswer,
            isCorrect
        });
    });

    // 保存历史记录
    saveExamHistory(correctCount, results);

    // 显示结果
    showExamResult(correctCount, results);
}

// 显示试卷结果
function showExamResult(correctCount, results) {
    const total = currentExam.questions.length;
    const wrongCount = total - correctCount;
    const accuracy = Math.round((correctCount / total) * 100);

    document.getElementById('total-score').textContent = `${correctCount} / ${total}`;
    document.getElementById('correct-count').textContent = correctCount;
    document.getElementById('wrong-count').textContent = wrongCount;
    document.getElementById('exam-accuracy').textContent = accuracy + '%';

    const resultQuestionsDiv = document.getElementById('result-questions');
    resultQuestionsDiv.innerHTML = '';

    results.forEach(result => {
        const div = document.createElement('div');
        div.className = `question-item ${result.isCorrect ? 'completed' : 'wrong'}`;

        const typeNames = {
            'single_choice': '单选题',
            'true_false': '判断题',
            'short_answer': '简答题',
            'fill_in_blank': '填空题'
        };

        let answerText = '';
        if (result.question.type === 'single_choice') {
            answerText = `正确答案: ${result.question.answer}`;
        } else if (result.question.type === 'true_false') {
            answerText = `正确答案: ${result.question.answer ? '正确' : '错误'}`;
        } else {
            const answers = Array.isArray(result.question.answer) ? result.question.answer : [result.question.answer];
            answerText = `正确答案: ${answers.join(' 或 ')}`;
        }

        div.innerHTML = `
            <div class="question-header">
                <div class="question-title">第 ${result.index + 1} 题: ${result.question.question}</div>
                <span class="question-type ${result.question.type}">${typeNames[result.question.type]}</span>
            </div>
            <div class="question-content">
                ${result.question.type === 'single_choice' || result.question.type === 'true_false' 
                    ? renderResultOptions(result.question, result.userAnswer)
                    : `<p>你的答案: <strong>${result.userAnswer || '未作答'}</strong></p>`
                }
            </div>
            <div class="answer-display show">
                <div class="answer-text">${answerText}</div>
                <div class="answer-text" style="color: ${result.isCorrect ? '#28a745' : '#dc3545'};">
                    你的答案: ${formatUserAnswer(result.question, result.userAnswer)} ${result.isCorrect ? '✓' : '✗'}
                </div>
                ${result.question.explanation ? `<div class="explanation">${result.question.explanation}</div>` : ''}
                ${result.question.knowledge_point ? `<div class="knowledge-point">知识点: ${result.question.knowledge_point}</div>` : ''}
            </div>
        `;

        resultQuestionsDiv.appendChild(div);
    });

    document.getElementById('exam-content').style.display = 'none';
    document.getElementById('exam-result').style.display = 'block';
}

// 渲染结果选项
function renderResultOptions(question, userAnswer) {
    let html = '';
    if (question.type === 'single_choice') {
        html = '<ul class="options-list">';
        question.options.forEach((option, idx) => {
            const optionLabel = String.fromCharCode(65 + idx);
            const isSelected = userAnswer === optionLabel;
            const isCorrect = question.answer === optionLabel;
            let className = 'option-item';
            if (isSelected) {
                className += isCorrect ? ' correct' : ' wrong';
            } else if (isCorrect) {
                className += ' correct';
            }
            html += `
                <li class="${className}">
                    <span class="option-label">${optionLabel}.</span>${option}
                </li>
            `;
        });
        html += '</ul>';
    } else if (question.type === 'true_false') {
        const options = ['正确', '错误'];
        html = '<ul class="options-list">';
        options.forEach((option, idx) => {
            const optionLabel = idx === 0 ? 'T' : 'F';
            const isSelected = userAnswer === optionLabel;
            const isCorrect = (question.answer === true && optionLabel === 'T') || 
                            (question.answer === false && optionLabel === 'F');
            let className = 'option-item';
            if (isSelected) {
                className += isCorrect ? ' correct' : ' wrong';
            } else if (isCorrect) {
                className += ' correct';
            }
            html += `
                <li class="${className}">
                    <span class="option-label">${optionLabel === 'T' ? '✓' : '✗'}</span>${option}
                </li>
            `;
        });
        html += '</ul>';
    }
    return html;
}

// 格式化用户答案
function formatUserAnswer(question, userAnswer) {
    if (question.type === 'single_choice') {
        return userAnswer || '未作答';
    } else if (question.type === 'true_false') {
        return userAnswer === 'T' ? '正确' : userAnswer === 'F' ? '错误' : '未作答';
    } else {
        return userAnswer || '未作答';
    }
}

// 保存试卷历史记录
function saveExamHistory(correctCount, results) {
    let history = [];
    const saved = localStorage.getItem('examHistory');
    if (saved) {
        history = JSON.parse(saved);
    }

    const total = currentExam.questions.length;
    const accuracy = Math.round((correctCount / total) * 100);
    const endTime = new Date();
    const duration = Math.round((endTime - currentExam.startTime) / 1000); // 秒

    const historyRecord = {
        id: Date.now(),
        examName: currentExam.name,
        date: endTime.toLocaleString('zh-CN'),
        timestamp: endTime.getTime(),
        total: total,
        correct: correctCount,
        wrong: total - correctCount,
        accuracy: accuracy,
        duration: duration, // 答题时长（秒）
        results: results.map(r => ({
            questionId: r.question.id,
            question: r.question.question,
            type: r.question.type,
            userAnswer: r.userAnswer,
            correctAnswer: r.question.answer,
            isCorrect: r.isCorrect
        }))
    };

    history.unshift(historyRecord); // 最新的在前面
    // 只保留最近100条记录
    if (history.length > 100) {
        history = history.slice(0, 100);
    }

    localStorage.setItem('examHistory', JSON.stringify(history));
}

// 加载历史记录
function loadExamHistory() {
    const saved = localStorage.getItem('examHistory');
    return saved ? JSON.parse(saved) : [];
}

// 渲染历史成绩模式
function renderHistoryMode() {
    const history = loadExamHistory();
    const historyList = document.getElementById('history-list');
    
    // 更新统计信息
    updateHistoryStats(history);
    
    if (history.length === 0) {
        historyList.innerHTML = '<div class="no-history">暂无历史记录</div>';
        return;
    }

    historyList.innerHTML = '';
    
    history.forEach(record => {
        const recordItem = createHistoryRecordItem(record);
        historyList.appendChild(recordItem);
    });
}

// 更新历史统计信息
function updateHistoryStats(history) {
    const totalExams = history.length;
    document.getElementById('total-exams').textContent = totalExams;
    
    if (totalExams === 0) {
        document.getElementById('avg-accuracy').textContent = '0%';
        document.getElementById('highest-score').textContent = '0';
        return;
    }
    
    // 计算平均正确率
    const totalAccuracy = history.reduce((sum, record) => sum + record.accuracy, 0);
    const avgAccuracy = Math.round(totalAccuracy / totalExams);
    document.getElementById('avg-accuracy').textContent = avgAccuracy + '%';
    
    // 找出最高分
    const highest = history.reduce((max, record) => {
        return record.accuracy > max.accuracy ? record : max;
    }, history[0]);
    document.getElementById('highest-score').textContent = `${highest.correct} / ${highest.total} (${highest.accuracy}%)`;
}

// 创建历史记录项
function createHistoryRecordItem(record) {
    const div = document.createElement('div');
    div.className = 'history-record-item';
    
    const durationText = formatDuration(record.duration);
    const accuracyClass = record.accuracy >= 80 ? 'high' : record.accuracy >= 60 ? 'medium' : 'low';
    
    div.innerHTML = `
        <div class="record-header">
            <div class="record-title">
                <h3>${record.examName}</h3>
                <span class="record-date">${record.date}</span>
            </div>
            <div class="record-score ${accuracyClass}">
                <div class="score-value">${record.accuracy}%</div>
                <div class="score-detail">${record.correct} / ${record.total}</div>
            </div>
        </div>
        <div class="record-info">
            <div class="info-item">
                <span class="info-label">正确:</span>
                <span class="info-value correct">${record.correct}</span>
            </div>
            <div class="info-item">
                <span class="info-label">错误:</span>
                <span class="info-value wrong">${record.wrong}</span>
            </div>
            <div class="info-item">
                <span class="info-label">用时:</span>
                <span class="info-value">${durationText}</span>
            </div>
        </div>
        <div class="record-actions">
            <button class="btn-view-detail" data-record-id="${record.id}">查看详情</button>
        </div>
        <div class="record-detail" id="detail-${record.id}" style="display: none;">
            ${renderHistoryDetail(record)}
        </div>
    `;
    
    // 添加查看详情按钮事件
    const viewBtn = div.querySelector('.btn-view-detail');
    viewBtn.addEventListener('click', function() {
        const detailDiv = document.getElementById(`detail-${record.id}`);
        const isVisible = detailDiv.style.display !== 'none';
        detailDiv.style.display = isVisible ? 'none' : 'block';
        viewBtn.textContent = isVisible ? '查看详情' : '收起详情';
    });
    
    return div;
}

// 渲染历史记录详情
function renderHistoryDetail(record) {
    let html = '<div class="detail-questions">';
    
    record.results.forEach((result, index) => {
        const typeNames = {
            'single_choice': '单选题',
            'true_false': '判断题',
            'short_answer': '简答题',
            'fill_in_blank': '填空题'
        };
        
        let answerText = '';
        if (result.type === 'single_choice') {
            answerText = result.correctAnswer;
        } else if (result.type === 'true_false') {
            answerText = result.correctAnswer ? '正确' : '错误';
        } else {
            const answers = Array.isArray(result.correctAnswer) ? result.correctAnswer : [result.correctAnswer];
            answerText = answers.join(' 或 ');
        }
        
        html += `
            <div class="detail-question-item ${result.isCorrect ? 'correct' : 'wrong'}">
                <div class="detail-question-header">
                    <span class="detail-question-num">第 ${index + 1} 题</span>
                    <span class="detail-question-type">${typeNames[result.type]}</span>
                    <span class="detail-question-status">${result.isCorrect ? '✓ 正确' : '✗ 错误'}</span>
                </div>
                <div class="detail-question-content">${result.question}</div>
                <div class="detail-answer">
                    <div class="detail-answer-item">
                        <span class="detail-answer-label">你的答案:</span>
                        <span class="detail-answer-value ${result.isCorrect ? 'correct' : 'wrong'}">${formatDetailAnswer(result.type, result.userAnswer)}</span>
                    </div>
                    <div class="detail-answer-item">
                        <span class="detail-answer-label">正确答案:</span>
                        <span class="detail-answer-value correct">${answerText}</span>
                    </div>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    return html;
}

// 格式化详情中的答案
function formatDetailAnswer(type, userAnswer) {
    if (!userAnswer) return '未作答';
    if (type === 'true_false') {
        return userAnswer === 'T' ? '正确' : userAnswer === 'F' ? '错误' : userAnswer;
    }
    return userAnswer;
}

// 格式化时长
function formatDuration(seconds) {
    if (seconds < 60) {
        return `${seconds}秒`;
    } else if (seconds < 3600) {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}分${secs}秒`;
    } else {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        return `${hours}小时${minutes}分钟`;
    }
}

