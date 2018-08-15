import React from 'react';
import {Collapse,Icon} from 'antd';
import dir01 from '../img/dir01.jpg';
import dir02 from '../img/dir02.jpg';
import dir03 from '../img/dir03.jpg';

const Panel = Collapse.Panel;

const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};

class DirectorExpansionPanel extends React.Component {
  render(){
    return (
      <div>
        <Collapse bordered={false} defaultActiveKey={['1']}>
          <Panel header="大规模内容检索" key="1" style={customPanelStyle}>
            <p className='Dir_Con'>
              <Icon type="check" /> 基于随机行走模型的自动社会标签语义相关性度量技术：社会媒体标签与图片内容信息的语义相关性度量问题是社会媒体大数据搜索的关键问题，我们提出基于自适应随机跳转随机行走模型，通过建模图片之间的结构关系，并在随机行走模型中创新性地引入置信跳转因子实现随机行走过程的自适应随机跳转，对各个结点之间的关系进行挖掘，有效利用结构上的信息来进行社会标签的相关性学习。在理论方面，我们对模型的收敛行进行了证明，并且给出了闭式解。该技术相关研究成果已经发表在该领域国际顶级学术会议: The 37th International ACM SIGIR conference on research and development in Information Retrieval (SIGIR)。
            </p>
            <p className='Dir_Con'>
              <Icon type="check" /> 基于用户意图感知的社会标签相似性度量技术：针对歧义性标签在进行标签相似性度量时，容易受标签的主要用户意图的控制，使得该标签次要用户意图被忽视的问题，我们提出一种新的标签相似性度量模型：正则化话题模型(regularized topic model)，目的是结合用户实际搜索意图来进行标签相关性度量。该模型通过使用标签搜索结果的摘要片段话题建模来学习查询的潜在意图，并结合标签的用户历史使用行为作为话题模型的正则化条件。该技术相关研究成果已经发表在该领域国际顶级学术会议：The 20th ACM International Conference on Information and Knowledge Management (CIKM)。
            </p>
          </Panel>
          <Panel header="智能问答系统" key="2" style={customPanelStyle}>
            <p className='Dir_Con'>
              <Icon type="check" /> 用户提出问题，对问题进行处理，获取相关参考材料，并对答案进行处理，返回精确的答案。使得我们的机器能够理解问句并通过材料获得答案。目前在此方向上的研究已经有了和企业合作的落地项目。
            </p>
          </Panel>
          <Panel header="深度推荐系统" key="3" style={customPanelStyle}>
            <p className='Dir_Con'>
              <Icon type="check" /> 基于流形排序(manifold ranking)的查询差异性推荐技术：针对互联网大数据搜索中查询推荐的冗余性问题和由查询稀疏性造成的相关性度量问题，我们提出引入流形排序技术。此外，我们还在流形排序过程中引入停止点的概念，实现对查询差异性建模，降低推荐查询之间的冗余性，并提出了一体化查询推荐模型。该研究工作为差异性查询推荐提供了新的解决方向。相关研究成果已经发表在该领域国际顶级学术会议和一流学术刊物：1.The 20th International Conference on World Wide Web (WWW'11)；2. IEEE Transactions on Knowledge Data Engineering (TKDE)。 
            </p>
            <p className='Dir_Con'>
              <Icon type="check" /> 基于动态贝叶斯网络(dynamic Bayesian network)的效用性查询推荐技术：查询推荐的最终目标是要帮用户找到其感兴趣的信息，而不仅是推荐相关性和差异性查询。针对这一目标，我们首次提出高效用性查询推荐的概念，并创新性地结合动态贝叶斯网络技术同时对用户在搜索过程中复杂搜索行为.该技术相关研究成果已经发表在该领域国际顶级学术会议：The 21st ACM International Conference on Information and Knowledge Management (CIKM)。
            </p>
          </Panel>
          <Panel header='图像目标识别跟踪' key='4' style={customPanelStyle}>
            <p className='Dir_Con'><Icon type="check" /> 对VGG-16模型的理解，通过实验了解fine-tune</p>
            <p className='Dir_Con'><Icon type="check" /> 对理解现有的目标检测网络，尝试将其作为上层模型来构建新模型</p>
            <div className='Dir_Img'>
              <img src={dir01} alt='game' />
              <img src={dir02} alt='sloth' />
              <img src={dir03} alt='giraffe' />
            </div>
          </Panel>
          <Panel header='舆情分析及可视化' key='5' style={customPanelStyle}>
            <p className='Dir_Con'><Icon type="check" />针对民众态度进行收集和整理，发现相关的意见倾向，分析海量数据，生成精确的用户标签，客观反映舆情状态。例如：从某用户的微博内容中提取的高频词汇如“篮球”、“NBA 球迷”、“球鞋”等，该用户在运动类词汇中多次提到球鞋、以及某品牌的篮球鞋子等，这些词语将人工标记为字典中“喜爱篮球”（范围可以扩大为喜爱运动），情感分析模块将会根据描述这些词语时候所运用的情感词，来标记为喜好或者厌恶，或者“一般”。情感分析会直接给出结果为“喜欢”。那么结合字典中的“篮球”关键字，就会为用户打上其中一个标签“喜爱篮球运动”。通过这一技术分析出用户喜好。</p>
          </Panel>
        </Collapse>
      </div>
    )
  }
}


export default DirectorExpansionPanel;

