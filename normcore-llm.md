# Anti-hype LLM reading list

Goals: Add links that are reasonable and good explanations of how stuff works. No hype and no vendor content if possible. Practical first-hand accounts and experience preferred (super rare at this point).

## Foundational Concepts 

+ [The Illustrated Word2vec - A Gentle Intro to Word Embeddings in Machine Learning (YouTube)](https://www.youtube.com/watch?v=ISPId9Lhc1g)
+ [Survey of LLMS](https://arxiv.org/abs/2303.18223)
+ [Self-attention and transformer networks](https://sebastianraschka.com/blog/2021/dl-course.html#l19-self-attention-and-transformer-networks) 
+ [Nearest neighbors algos](https://magazine.sebastianraschka.com/p/large-language-models-and-nearest)
+ [What are embeddings](https://vickiboykis.com/what_are_embeddings/)
+ [Catching up on the weird world of LLMS](https://simonwillison.net/2023/Aug/3/weird-world-of-llms)
+ [Building an LLM from Scratch](https://github.com/rasbt/LLMs-from-scratch)
+ [Concepts from Operating Systems that Found their way into LLMS](https://muhtasham.github.io/blog/posts/os-concepts-llm/)

## Foundational Papers

+ [Attention is all you Need](https://arxiv.org/abs/1706.03762)
+ [Scaling Laws for Neural Language Models](https://arxiv.org/abs/2001.08361)
+ [BERT](https://arxiv.org/abs/1810.04805)
+ [Language Models are Unsupervised Multi-Task Learners](https://d4mucfpksywv.cloudfront.net/better-language-models/language_models_are_unsupervised_multitask_learners.pdf)
+ [Training Language Models to Follow Instructions](https://arxiv.org/abs/2203.02155)
+ [Language Models are Few-Shot Learners](https://arxiv.org/abs/2005.14165) 

## The Transformer Architecture

+ [Transformers from Scratch](https://e2eml.school/transformers.html)
+ [Transformer Math](https://blog.eleuther.ai/transformer-math/)
+ [Five Years of GPT Progress](https://finbarr.ca/five-years-of-gpt-progress/)

## GPT Specifically 

+ [What is ChatGPT doing and why does it work](https://writings.stephenwolfram.com/2023/02/what-is-chatgpt-doing-and-why-does-it-work/)
+ [My own notes from a few months back.](https://gist.github.com/veekaybee/6f8885e9906aa9c5408ebe5c7e870698) 
+ [Karpathy's The State of GPT (YouTube)](https://www.youtube.com/watch?v=bZQun8Y4L2A)

## Training Data

+ [What's in my Big Data](https://arxiv.org/abs/2310.20707)
+ ["The “it” in AI models is the dataset."](https://nonint.com/2023/06/10/the-it-in-ai-models-is-the-dataset/)

## Training Your Own
+ [Why host your own LLM?](http://marble.onl/posts/why_host_your_own_llm.html)
+ [How to train your own LLMs](https://blog.replit.com/llm-training)
+ [Hugging Face Resources on Training Your Own](https://github.com/huggingface/llm_training_handbook)
+ Training [Compute-Optimal Large Language Models](https://arxiv.org/abs/2203.15556)
+ [Opt-175B Logbook](https://github.com/facebookresearch/metaseq/blob/main/projects/OPT/chronicles/OPT175B_Logbook.pdf)

## Fine-Tuning Your Own 

+ [LLaMAntino: LLaMA 2 Models for Effective Text Generation in Italian Language](https://arxiv.org/pdf/2312.09993.pdf) - Really great overview of SOTA fine-tuning techniques
+ [A Gentle Introduction to 8-bit matrix multiplication](https://huggingface.co/blog/hf-bitsandbytes-integration)
+ [Motivation for Parameter-Efficient Fine-tuning](https://www.reddit.com/r/MachineLearning/comments/186ck5k/d_what_is_the_motivation_for_parameterefficient/)
+ [Which Quantization Method is Right for You?](https://maartengrootendorst.substack.com/p/which-quantization-method-is-right)

# Small and Local LLMs

+ [How is LlamaCPP Possible?](https://finbarr.ca/how-is-llama-cpp-possible/)
+ [How to beat GPT-4 with a 13-B Model](https://lmsys.org/blog/2023-11-14-llm-decontaminator/)
+ [Efficient LLM Inference on CPUs](https://arxiv.org/abs/2311.00502v1)

## Prompt Engineering 

+ [On Prompt Engineering](https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/)
+ [Prompt Engineering Versus Blind Prompting](https://mitchellh.com/writing/prompt-engineering-vs-blind-prompting)

## Deployment 

+ [Building LLM Applications for Production](https://huyenchip.com/2023/04/11/llm-engineering.html)
+ [Challenges and Applications of Large Language Models](https://arxiv.org/abs/2307.10169)
+ [All the Hard Stuff Nobody talks about when building products with LLMs ](https://www.honeycomb.io/blog/hard-stuff-nobody-talks-about-llm)
+ [Scaling Kubernetes to run ChatGPT](https://openai.com/research/scaling-kubernetes-to-7500-nodes)
+ [Numbers every LLM Developer should know](https://github.com/ray-project/llm-numbers)
+ [Against LLM Maximalism](https://explosion.ai/blog/against-llm-maximalism)
+ [A Guide to Inference and Performance](https://www.baseten.co/blog/llm-transformer-inference-guide/)

## GPUs

+ [The Best GPUS for Deep Learning 2023](https://timdettmers.com/2023/01/30/which-gpu-for-deep-learning/)
+ [Making Deep Learning Go Brr from First Principles](https://horace.io/brrr_intro.html)
+ [Everything about Distributed Training and Efficient Finetuning](https://sumanthrh.com/post/distributed-and-efficient-finetuning/)
+ [Training LLMs at Scale with AMD MI250 GPUs](https://www.databricks.com/blog/training-llms-scale-amd-mi250-gpus
+ [GPU Programming](https://enccs.github.io/gpu-programming/)

## Evaluation

+ [Evaluating ChatGPT](https://ehudreiter.com/2023/04/04/evaluating-chatgpt/)
+ [ChatGPT: Jack of All Trades, Master of None](https://github.com/CLARIN-PL/chatgpt-evaluation-01-2023)
+ [What's Going on with the Open LLM Leaderboard](https://huggingface.co/blog/evaluating-mmlu-leaderboard)
+ [Challenges in Evaluating AI Systems](https://www.anthropic.com/index/evaluating-ai-systems)

## UX

+ [Generative Interfaces Beyond Chat (YouTube)](https://www.youtube.com/watch?v=rd-J3hmycQs)
+ [Why Chatbots are not the Future](https://wattenberger.com/thoughts/boo-chatbots)
+ [The Future of Search is Boutique](https://future.com/the-future-of-search-is-boutique/)

## What's Next? 

Thanks to everyone who added suggestions on [Twitter](https://twitter.com/vboykis/status/1691530859575214081), [Mastodon](https://jawns.club/@vicki/110895263087386568), and Bluesky. 
