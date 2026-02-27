import { IPostList } from './post.interface';

export const posts: IPostList = [
    {
        title: 'Mapeamento de Retina: O que é, Para que Serve e Como é Feito o Exame do Fundo de Olho',
        description: 'Descubra a importância do Mapeamento de Retina para a saúde dos seus olhos. A Clinica Sempre Visão explica como este exame indolor detecta doenças silenciosas como glaucoma, tumores e rasgos na retina.',
        slug:'mapeamento-de-retina-exame-fundo-de-olho',
        imageUrl: 'mapeamento-de-retina-exame-fundo-de-olho.wepb',
        content: `
                <section id="introducao" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <p>Muitas pessoas acreditam que o exame de vista serve apenas para descobrir se precisam de óculos. No entanto, a verdadeira saúde ocular é avaliada na parte de trás do olho. É exatamente para isso que serve o <strong>Mapeamento de Retina</strong>.</p>
                    <p>Na Clinica Sempre Visão, consideramos este exame um dos pilares da oftalmologia preventiva. Ele permite que o médico investigue detalhadamente o "fundo do olho", diagnosticando doenças silenciosas antes mesmo que elas afetem a sua visão.</p>
                </section>

                <section id="o-que-e" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-6 mb-4">O que é o Mapeamento de Retina?</h2>
                    <p>Também conhecido como exame de fundo de olho indireto, o mapeamento é uma avaliação completa das estruturas internas do olho. Enquanto exames simples veem apenas a parte central, o mapeamento permite ao oftalmologista visualizar toda a <strong>periferia da retina</strong>, o nervo óptico e os vasos sanguíneos.</p>
                    <p>Para que essa visualização ampla seja possível, é necessário o uso de um oftalmoscópio indireto e de uma lente especial mantida próxima ao olho do paciente.</p>
                </section>

                <section id="indicacoes" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-6 mb-4">Para quem é indicado?</h2>
                    <p>O Mapeamento de Retina deve fazer parte da rotina anual de check-up de qualquer adulto, mas é <strong>obrigatório</strong> para pacientes com:</p>
                    <ul class="list-disc space-y-2 pl-6 sm:pl-8">
                        <li><strong>Miopia (especialmente graus altos):</strong> Olhos míopes são mais alongados, o que torna a retina mais fina e propensa a rasgos.</li>
                        <li><strong>Diabetes e Hipertensão:</strong> Para avaliar danos nos microvasos sanguíneos.</li>
                        <li>Pacientes com mais de 50 anos (prevenção de DMRI e Catarata).</li>
                        <li>Histórico familiar de Glaucoma ou Descolamento de Retina.</li>
                        <li>Queixas de "moscas volantes" (pontos escuros flutuando na visão) ou flashes de luz.</li>
                    </ul>
                </section>

                <section id="como-e-feito" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-6 mb-4">Como é Feito o Exame? Dói?</h2>
                    <p>O exame é <strong>rápido e totalmente indolor</strong>. O único desconforto é a sensibilidade à luz.</p>
                    <p>O passo mais importante é a <strong>dilatação da pupila</strong>. Você receberá colírios para abrir a pupila, o que leva cerca de 20 a 30 minutos. Uma vez dilatada, o médico projeta uma luz no seu olho e, através de uma lente, examina minuciosamente toda a estrutura interna.</p>
                    <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mt-4">
                        <p class="text-yellow-800 font-medium"><strong>Aviso Importante:</strong> Como a pupila é dilatada, sua visão ficará embaçada (especialmente para perto) e sensível à luz por cerca de 3 a 6 horas. Recomendamos trazer óculos escuros e vir com um acompanhante que possa dirigir por você.</p>
                    </div>
                </section>

                <section id="cta-final" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <div class="mt-6 text-center">
                        <p class="text-xl font-semibold text-slate-800 mb-3">Quando foi o seu último exame de fundo de olho?</p>
                        <p class="text-base text-slate-600 mb-6">Não espere os sintomas aparecerem para cuidar da sua retina.</p>
                        <a href="https://wa.me/5516992627740" target="_blank" rel="noopener noreferrer" class="cta-button inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-green-700 transition-colors text-base sm:text-lg">
                            Agendar Mapeamento de Retina via WhatsApp
                        </a>
                    </div>
                </section>

                <section id="faq" class="w-full faq-section mt-8 pt-6 border-t border-gray-200 text-lg text-slate-700 leading-relaxed">
                    <h2 class="text-3xl font-bold text-slate-800 mb-6 text-center">Dúvidas Frequentes</h2>
                    <div class="space-y-3">
                        <details class="faq-item group border-b border-gray-200 pb-3">
                            <summary class="text-xl font-semibold text-slate-800 cursor-pointer hover:text-blue-600 list-none py-2">Qual a diferença entre Mapeamento e Retinografia?</summary>
                            <p class="pt-2 text-slate-600 leading-relaxed">O mapeamento é o exame clínico onde o médico olha ativamente dentro do seu olho. A retinografia é uma "fotografia" digital do fundo do olho, usada para documentar e acompanhar lesões ao longo do tempo. Ambos são complementares.</p>
                        </details>
                        <details class="faq-item group border-b border-gray-200 pb-3">
                            <summary class="text-xl font-semibold text-slate-800 cursor-pointer hover:text-blue-600 list-none py-2">Grávidas podem fazer o mapeamento?</summary>
                            <p class="pt-2 text-slate-600 leading-relaxed">Sim. Inclusive, o exame de fundo de olho é muito importante durante a gravidez, especialmente para monitorar alterações vasculares ligadas à hipertensão gestacional (pré-eclâmpsia).</p>
                        </details>
                    </div>
                </section>
        `
    },
    {
        title: 'Degeneração Macular (DMRI): Causas, Sintomas e Tratamentos para Proteger a Visão Central',
        description: 'A DMRI é a principal causa de perda de visão na terceira idade. Entenda a diferença entre a DMRI Seca e Úmida, os sintomas como linhas tortuosas e como as injeções intraoculares podem paralisar a doença na Clinica Sempre Visão.',
        slug:'degeneracao-macular-dmri-sintomas-injecao-anti-vegf',
        imageUrl: 'degeneracao-macular-dmri-sintomas-injecao-anti-vegf.webp',
        content: `
                <section id="introducao" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <p>Imagine tentar ler um livro, mas as letras bem no centro da página estão borradas ou simplesmente desaparecem, enquanto as margens continuam nítidas. Este é o impacto devastador da <strong>Degeneração Macular Relacionada à Idade (DMRI)</strong>.</p>
                    <p>A DMRI é a principal causa de cegueira legal em pessoas com mais de 60 anos. Na Clinica Sempre Visão, contamos com tecnologia de ponta para diagnosticar essa condição precocemente e oferecer os tratamentos mais eficazes para preservar a sua independência.</p>
                </section>

                <section id="o-que-e-macula" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-6 mb-4">O que é a Mácula?</h2>
                    <p>A mácula é uma pequena, mas vital, área no centro da retina. Ela é a responsável pela nossa <strong>visão central de alta resolução</strong> — a visão que usamos para ler, reconhecer rostos, conduzir e ver cores detalhadas. Quando a mácula se desgasta com a idade, temos a DMRI.</p>
                </section>

                <section id="seca-vs-umida" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-6 mb-4">Os Dois Tipos de DMRI</h2>
                    <p>Existem duas formas da doença, e a abordagem clínica é completamente diferente para cada uma:</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        <div class="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm">
                            <h3 class="text-xl font-bold text-slate-800 mb-2">DMRI Seca (Mais Comum)</h3>
                            <p class="text-base text-slate-600">Representa cerca de 90% dos casos. É um desgaste lento e gradual das células da mácula e o acúmulo de depósitos amarelos chamados "drusas". A perda de visão é lenta. O tratamento foca em vitaminas e suplementos antioxidantes para desacelerar a progressão.</p>
                        </div>
                        <div class="bg-red-50 p-5 rounded-xl border border-red-200 shadow-sm">
                            <h3 class="text-xl font-bold text-red-800 mb-2">DMRI Úmida (Mais Grave)</h3>
                            <p class="text-base text-slate-600">Representa 10% dos casos, mas é responsável pela maioria das perdas severas de visão. Vasos sanguíneos anormais crescem sob a mácula, vazando sangue e fluidos. O dano é rápido e exige tratamento oftalmológico urgente.</p>
                        </div>
                    </div>
                </section>

                <section id="sintomas-tratamentos" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-6 mb-4">Sintomas e Tratamento da DMRI Úmida</h2>
                    <p>O sintoma de alerta mais clássico da DMRI é ver <strong>linhas retas de forma ondulada ou distorcida</strong> (por exemplo, os azulejos do banheiro parecem tortos). Além disso, pode surgir uma mancha escura constante no centro da visão.</p>
                    
                    <h3 class="text-xl font-bold text-slate-800 mt-4">A Revolução das Injeções Anti-VEGF</h3>
                    <p>Para a DMRI Úmida, o tratamento padrão ouro e que salvou a visão de milhões de pessoas no mundo são as <strong>Injeções Intravítreas</strong>. Tratam-se de medicamentos aplicados diretamente no olho (com anestesia local) que impedem o crescimento dos vasos sanguíneos anormais e secam os fluidos. O tratamento costuma exigir aplicações periódicas, mas é altamente eficaz em estabilizar ou até melhorar a visão.</p>
                </section>

                <section id="cta-final" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <div class="mt-6 text-center">
                        <p class="text-xl font-semibold text-slate-800 mb-3">Percebeu distorções ou manchas na sua visão central?</p>
                        <p class="text-base text-slate-600 mb-6">A DMRI exige diagnóstico rápido com o exame de OCT (Tomografia de Coerência Óptica). Agende hoje mesmo.</p>
                        <a href="https://wa.me/5516992627740" target="_blank" rel="noopener noreferrer" class="cta-button inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-green-700 transition-colors text-base sm:text-lg">
                            Agendar Avaliação de DMRI e OCT
                        </a>
                    </div>
                </section>

                <section id="faq" class="w-full faq-section mt-8 pt-6 border-t border-gray-200 text-lg text-slate-700 leading-relaxed">
                    <h2 class="text-3xl font-bold text-slate-800 mb-6 text-center">Dúvidas Frequentes</h2>
                    <div class="space-y-3">
                        <details class="faq-item group border-b border-gray-200 pb-3">
                            <summary class="text-xl font-semibold text-slate-800 cursor-pointer hover:text-blue-600 list-none py-2">A DMRI cega completamente?</summary>
                            <p class="pt-2 text-slate-600 leading-relaxed">Não. A DMRI afeta exclusivamente a visão central. Mesmo nos casos mais severos não tratados, o paciente geralmente mantém a visão periférica (lateral), permitindo que ande sozinho, embora perca a capacidade de ler e conduzir.</p>
                        </details>
                        <details class="faq-item group border-b border-gray-200 pb-3">
                            <summary class="text-xl font-semibold text-slate-800 cursor-pointer hover:text-blue-600 list-none py-2">Posso prevenir a DMRI?</summary>
                            <p class="pt-2 text-slate-600 leading-relaxed">A genética e a idade são os maiores fatores. No entanto, você pode reduzir o risco não fumando, controlando a pressão arterial, usando óculos de sol com proteção UV e mantendo uma dieta rica em folhas verdes e ômega-3.</p>
                        </details>
                    </div>
                </section>
        `
    },
    {
        title: 'Moscas Volantes e Flashes de Luz? Cuidado, Pode Ser Descolamento de Retina',
        description: 'Ver pontos pretos flutuando ou flashes de luz repentinos exige avaliação urgente. Entenda os sinais de perigo do descolamento de retina, quem corre mais risco e como as cirurgias (Vitrectomia e Laser) podem salvar a visão.',
        slug:'descolamento-retina-sintomas-moscas-volantes-cirurgia',
        imageUrl: 'descolamento-retina-sintomas-moscas-volantes-cirurgia.webp',
        content: `
                <section id="introducao" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <p>Na oftalmologia, o tempo é precioso. O <strong>Descolamento de Retina</strong> é uma das maiores urgências médicas oculares que existem. Se não for tratado rapidamente, pode resultar em perda permanente da visão em questão de dias.</p>
                    <p>Na Clinica Sempre Visão, orientamos todos os pacientes a conhecerem os sinais de alerta dessa condição. Se a retina (o tecido no fundo do olho que capta as imagens) se soltar da parede ocular, ela fica sem nutrição e começa a morrer.</p>
                </section>

                <section id="sintomas-alerta" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-6 mb-4">Os Sinais de Emergência: A Regra dos Três</h2>
                    <p>O descolamento de retina é totalmente indolor, o que torna vital o reconhecimento visual dos sintomas. Procure um oftalmologista IMEDIATAMENTE se você notar:</p>
                    <ul class="list-disc space-y-2 pl-6 sm:pl-8">
                        <li><strong class="font-semibold text-red-700">Aumento súbito de Moscas Volantes:</strong> O aparecimento repentino de dezenas de pontos pretos, fios ou "teias de aranha" flutuando na sua visão.</li>
                        <li><strong class="font-semibold text-red-700">Flashes de Luz (Fotopsia):</strong> Ver clarões rápidos e repetitivos no canto do olho, como relâmpagos ou flashes de câmara, mesmo num quarto escuro.</li>
                        <li><strong class="font-semibold text-red-700">A Cortina Escura:</strong> O sintoma mais grave. Uma sombra escurecida que começa na periferia da visão e avança em direção ao centro, como uma cortina a fechar.</li>
                    </ul>
                </section>

                <section id="fatores-risco" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-6 mb-4">Quem corre maior risco?</h2>
                    <p>A retina descola quando o vítreo (o gel que preenche o olho) repuxa e causa um rasgo na retina, permitindo que fluido entre por trás dela. Os fatores que aumentam esse risco incluem:</p>
                    <ul class="list-disc space-y-2 pl-6 sm:pl-8">
                        <li><strong>Alta Miopia:</strong> Olhos alongados têm retinas mais finas e esticadas.</li>
                        <li><strong>Idade avançada:</strong> O gel do olho encolhe naturalmente com a idade.</li>
                        <li>Traumas graves nos olhos (pancadas, acidentes).</li>
                        <li>Histórico familiar de descolamento.</li>
                        <li>Pacientes que já realizaram cirurgia de catarata complexa no passado.</li>
                    </ul>
                </section>

                <section id="tratamentos" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-6 mb-4">Cirurgia: A Única Solução</h2>
                    <p>Não existem colírios ou medicamentos que "colem" a retina de volta. O tratamento é exclusivamente cirúrgico e deve ser feito o mais rápido possível.</p>
                    <p>Se diagnosticado no estágio de apenas um <strong>rasgo</strong> (antes do descolamento total), um bloqueio com <strong>Laser</strong> no consultório resolve o problema.</p>
                    <p>Se a retina já estiver descolada, recorremos à <strong>Vitrectomia</strong>, uma cirurgia de alta complexidade onde removemos o gel do olho, reposicionamos a retina e utilizamos gás ou óleo de silicone para mantê-la colada até a cicatrização.</p>
                </section>

                <section id="cta-final" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <div class="mt-6 text-center bg-red-50 p-6 rounded-xl border border-red-200">
                        <p class="text-xl font-bold text-red-800 mb-3">Está a ver flashes de luz ou manchas subitamente?</p>
                        <p class="text-base text-red-700 mb-6">Isto é uma emergência oftalmológica. Não aguarde para ver se melhora.</p>
                        <a href="https://wa.me/5516992627740" target="_blank" rel="noopener noreferrer" class="cta-button inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-green-700 transition-colors text-base sm:text-lg">
                            Falar com a Equipa de Urgência via WhatsApp
                        </a>
                    </div>
                </section>

                <section id="faq" class="w-full faq-section mt-8 pt-6 border-t border-gray-200 text-lg text-slate-700 leading-relaxed">
                    <h2 class="text-3xl font-bold text-slate-800 mb-6 text-center">Dúvidas Frequentes</h2>
                    <div class="space-y-3">
                        <details class="faq-item group border-b border-gray-200 pb-3">
                            <summary class="text-xl font-semibold text-slate-800 cursor-pointer hover:text-blue-600 list-none py-2">Ter moscas volantes é normal?</summary>
                            <p class="pt-2 text-slate-600 leading-relaxed">Sim. Ver 1 ou 2 pontinhos transparentes flutuando, que você tem há anos, é comum do envelhecimento do olho. O perigo é o <strong>aparecimento repentino</strong> de múltiplas moscas novas, acompanhado ou não de flashes.</p>
                        </details>
                        <details class="faq-item group border-b border-gray-200 pb-3">
                            <summary class="text-xl font-semibold text-slate-800 cursor-pointer hover:text-blue-600 list-none py-2">Qual a posição de repouso após a cirurgia de retina?</summary>
                            <p class="pt-2 text-slate-600 leading-relaxed">Geralmente, se o cirurgião utilizar gás para manter a retina no lugar, o paciente precisará ficar de cabeça para baixo (olhando para o chão) durante vários dias. Isso é crucial para o sucesso da cirurgia.</p>
                        </details>
                    </div>
                </section>
        `
    },
    {
        title: 'Cirurgia de Estrabismo: Como Corrigir o "Olho Desviado" em Crianças e Adultos',
        description: 'O estrabismo tem correção em qualquer idade! Entenda os tipos de desvio ocular, como o estrabismo afeta a auto-estima e a visão, e como funciona a cirurgia de alinhamento dos músculos oculares na Clinica Sempre Visão.',
        slug:'cirurgia-de-estrabismo-correcao-olho-desviado-adulto-crianca',
        imageUrl: 'cirurgia-de-estrabismo-correcao-olho-desviado-adulto-crianca.webp',
        content: `
                <section id="introducao" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <p>O <strong>Estrabismo</strong>, condição onde os olhos não estão alinhados e apontam para direções diferentes, é frequentemente rodeado de mitos. O principal deles é que "só tem jeito se operar em criança". <strong>Isso é falso!</strong></p>
                    <p>Na Clinica Sempre Visão, tratamos o estrabismo tanto em crianças (para evitar o desenvolvimento de "olho preguiçoso") quanto em adultos, onde a cirurgia devolve não apenas o alinhamento estético, mas também resgata profundamente a auto-estima e as interações sociais.</p>
                </section>

                <section id="tipos-estrabismo" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-6 mb-4">Tipos de Estrabismo e Suas Causas</h2>
                    <p>Cada olho possui seis pequenos músculos responsáveis pela sua movimentação. O estrabismo ocorre quando há um desequilíbrio na força ou na comunicação nervosa desses músculos. Os desvios podem ser:</p>
                    <ul class="list-disc space-y-2 pl-6 sm:pl-8">
                        <li><strong>Convergente (Esotropia):</strong> O olho desvia para dentro, em direção ao nariz.</li>
                        <li><strong>Divergente (Exotropia):</strong> O olho desvia para fora, em direção à orelha.</li>
                        <li><strong>Vertical (Hipertropia/Hipotropia):</strong> O olho desvia para cima ou para baixo.</li>
                    </ul>
                    <p>Em adultos, o estrabismo pode surgir subitamente devido a traumas, problemas neurológicos, diabetes ou alterações de tireoide, muitas vezes causando <strong>visão dupla (diplopia)</strong>.</p>
                </section>

                <section id="cirurgia-como-funciona" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-6 mb-4">Como Funciona a Cirurgia de Estrabismo?</h2>
                    <p>A cirurgia de correção é um procedimento focado puramente na musculatura externa do olho, ou seja, o cirurgião <strong>não entra dentro do olho</strong> nem mexe na visão em si.</p>
                    <p>O objetivo é restaurar o equilíbrio mecânico. O cirurgião oftalmologista afrouxa, tensiona ou reposiciona os músculos extraoculares. Na prática, se um músculo está puxando o olho demais para dentro, ele é cirurgicamente "enfraquecido" e reposicionado mais atrás para soltar a tensão, alinhando o globo ocular.</p>
                    <p>O procedimento é feito sob anestesia geral (em crianças) ou anestesia local com sedação (em adultos) e a alta ocorre no mesmo dia.</p>
                </section>

                <section id="pos-operatorio" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-6 mb-4">Recuperação e Resultados</h2>
                    <p>O pós-operatório é mais tranquilo do que a maioria dos pacientes imagina. O olho ficará vermelho (parecendo uma conjuntivite forte) por cerca de 2 a 3 semanas. Haverá sensação de areia ou leve ardência, facilmente controladas com colírios.</p>
                    <p>O resultado estético do alinhamento pode ser notado logo nos primeiros dias, gerando um impacto emocional extremamente positivo e transformador na vida do paciente adulto.</p>
                </section>

                <section id="cta-final" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <div class="mt-6 text-center">
                        <p class="text-xl font-semibold text-slate-800 mb-3">Gostaria de avaliar a correção do seu desvio ocular?</p>
                        <p class="text-base text-slate-600 mb-6">Nunca é tarde para alinhar o olhar e recuperar a sua auto-estima. Agende uma avaliação especializada.</p>
                        <a href="https://wa.me/5516992627740" target="_blank" rel="noopener noreferrer" class="cta-button inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-green-700 transition-colors text-base sm:text-lg">
                            Agendar Avaliação de Estrabismo
                        </a>
                    </div>
                </section>

                <section id="faq" class="w-full faq-section mt-8 pt-6 border-t border-gray-200 text-lg text-slate-700 leading-relaxed">
                    <h2 class="text-3xl font-bold text-slate-800 mb-6 text-center">Dúvidas Frequentes</h2>
                    <div class="space-y-3">
                        <details class="faq-item group border-b border-gray-200 pb-3">
                            <summary class="text-xl font-semibold text-slate-800 cursor-pointer hover:text-blue-600 list-none py-2">Todo estrabismo precisa de cirurgia?</summary>
                            <p class="pt-2 text-slate-600 leading-relaxed">Não. Em muitos casos infantis (como o estrabismo acomodativo), o desvio é totalmente corrigido apenas com o uso de óculos de grau adequados. A cirurgia é indicada quando os óculos não resolvem o desvio mecânico.</p>
                        </details>
                        <details class="faq-item group border-b border-gray-200 pb-3">
                            <summary class="text-xl font-semibold text-slate-800 cursor-pointer hover:text-blue-600 list-none py-2">A cirurgia de estrabismo cura o olho preguiçoso (Ambliopia)?</summary>
                            <p class="pt-2 text-slate-600 leading-relaxed">Não diretamente. A cirurgia alinha o olho fisicamente, mas a visão "preguiçosa" precisa ser estimulada separadamente, geralmente com o uso de tampão no olho bom durante a infância.</p>
                        </details>
                        <details class="faq-item group border-b border-gray-200 pb-3">
                            <summary class="text-xl font-semibold text-slate-800 cursor-pointer hover:text-blue-600 list-none py-2">Adultos precisam operar os dois olhos?</summary>
                            <p class="pt-2 text-slate-600 leading-relaxed">Depende do tamanho do desvio. Desvios pequenos podem ser corrigidos operando músculos de apenas um olho. Desvios maiores exigem intervenção nos músculos de ambos os olhos para obter um resultado harmonioso.</p>
                        </details>
                    </div>
                </section>
        `
    },
    {
        title: 'Diabetes e Visão: O Que é a Retinopatia Diabética e Como Prevenir a Cegueira',
        description: 'Você sabia que o diabetes pode afetar gravemente sua visão? A Retinopatia Diabética é uma complicação silenciosa que exige atenção. Saiba como o controle da glicemia e exames de fundo de olho podem salvar sua visão.',
        slug: 'retinopatia-diabetica-sintomas-tratamento-laser-injecao',
        imageUrl: 'Paciente monitorizando a glicemia com óculos ao fundo, ilustrando a relação entre diabetes e saúde ocular.webp', // Inserir URL da imagem aqui
        content: `
                <section id="introducao" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <p>O diabetes é uma doença sistémica que afeta todo o corpo, mas os olhos são um dos órgãos mais sensíveis às flutuações de açúcar no sangue. A <strong>Retinopatia Diabética</strong> é a principal causa de cegueira entre adultos em idade ativa.</p>
                    <p>Na Clinica Sempre Visão, sabemos que muitos pacientes só procuram o oftalmologista quando a visão já está embaçada. O nosso objetivo é mudar esse cenário através da informação e da prevenção ativa.</p>
                </section>

                <section id="o-que-acontece" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-6 mb-4">Como o Diabetes Afeta o Olho?</h2>
                    <p>O excesso de glicose no sangue danifica os pequenos vasos sanguíneos da retina (o "filme" no fundo do olho que capta as imagens). Com o tempo, esses vasos podem:</p>
                    <ul class="list-disc space-y-2 pl-6 sm:pl-8">
                        <li><strong>Inchar e vazar:</strong> Liberando fluido e sangue na retina, causando inchaço (Edema Macular).</li>
                        <li><strong>Fechar:</strong> Impedindo que o sangue chegue a áreas vitais.</li>
                        <li><strong>Crescer desordenadamente:</strong> O olho tenta criar novos vasos (neovasos), mas eles são frágeis e sangram facilmente, podendo causar descolamento de retina.</li>
                    </ul>
                </section>

                <section id="sintomas" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-6 mb-4">Sintomas: O Perigo do Silêncio</h2>
                    <p>No início, a retinopatia diabética pode não apresentar sintomas. Quando eles aparecem, a doença já pode estar avançada. Fique atento a:</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div class="bg-red-50 p-4 rounded-lg border border-red-100">
                            <strong class="block text-red-800 mb-2">Manchas Escuras</strong>
                            <p class="text-sm">Pequenos pontos pretos ou "teias de aranha" flutuando na visão (moscas volantes).</p>
                        </div>
                        <div class="bg-red-50 p-4 rounded-lg border border-red-100">
                            <strong class="block text-red-800 mb-2">Visão Flutuante</strong>
                            <p class="text-sm">Dias em que a visão está boa, dias em que está embaçada (relacionado ao nível de açúcar).</p>
                        </div>
                    </div>
                </section>

                <section id="tratamentos" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-6 mb-4">Existe Tratamento?</h2>
                    <p>Sim! O controle rigoroso do diabetes é o primeiro passo. Para os olhos, a oftalmologia moderna oferece recursos incríveis para estabilizar a visão:</p>
                    <ul class="list-disc space-y-2 pl-6 sm:pl-8">
                        <li><strong class="font-semibold text-slate-800">Injeções Intravítreas (Anti-VEGF):</strong> Medicamentos aplicados dentro do olho (de forma indolor) que secam o inchaço e impedem o crescimento de vasos ruins. É o tratamento padrão ouro atual.</li>
                        <li><strong class="font-semibold text-slate-800">Fotocoagulação a Laser:</strong> Queimaduras controladas a laser para selar vasos com vazamento.</li>
                        <li><strong class="font-semibold text-slate-800">Cirurgia (Vitrectomia):</strong> Para casos avançados onde há muito sangue ou cicatrizes no olho.</li>
                    </ul>
                </section>

                <section id="cta-final" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <div class="mt-6 text-center">
                        <p class="text-xl font-semibold text-slate-800 mb-3">É diabético? Não espere a visão embaçar.</p>
                        <p class="text-base text-slate-600 mb-6">O exame de fundo de olho anual é obrigatório para todo paciente diabético. Cuide da sua saúde.</p>
                        <a href="https://wa.me/5516992627740" target="_blank" rel="noopener noreferrer" class="cta-button inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-green-700 transition-colors text-base sm:text-lg">
                            Agendar Mapeamento de Retina
                        </a>
                    </div>
                </section>

                <section id="faq" class="w-full faq-section mt-8 pt-6 border-t border-gray-200 text-lg text-slate-700 leading-relaxed">
                    <h2 class="text-3xl font-bold text-slate-800 mb-6 text-center">Dúvidas Frequentes</h2>
                    
                    <div class="space-y-3">
                        <details class="faq-item group border-b border-gray-200 pb-3">
                            <summary class="text-xl font-semibold text-slate-800 cursor-pointer hover:text-blue-600 list-none py-2">
                                A injeção no olho dói?
                            </summary>
                            <p class="pt-2 text-slate-600 leading-relaxed">Pode parecer assustador, mas o procedimento é praticamente indolor graças ao uso de colírios anestésicos potentes. A maioria dos pacientes relata apenas uma leve pressão.</p>
                        </details>
                        
                        <details class="faq-item group border-b border-gray-200 pb-3">
                            <summary class="text-xl font-semibold text-slate-800 cursor-pointer hover:text-blue-600 list-none py-2">
                                Se eu controlar o diabetes, a visão volta?
                            </summary>
                            <p class="pt-2 text-slate-600 leading-relaxed">O controle da glicemia impede que a doença piore, mas danos estruturais já estabelecidos na retina podem ser permanentes. Por isso, o tratamento precoce é vital.</p>
                        </details>
                    </div>
                </section>
        `
    },
    {
        title: 'Pterígio: Tudo sobre a Cirurgia de "Carne Crescida" nos Olhos',
        description: 'Seus olhos estão sempre vermelhos e com uma "pele" crescendo em direção à córnea? Pode ser Pterígio. Entenda as causas (sol e vento), por que não se deve usar colírios clareadores e como funciona a cirurgia moderna com transplante conjuntival.',
        slug: 'pterigio-carne-nos-olhos-cirurgia-recuperacao',
        imageUrl: 'Oftalmologista a realizar exame de fundo de olho para detetar retinopatia diabética.webp', // Inserir URL da imagem aqui
        content: `
                <section id="introducao" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <p>O <strong>Pterígio</strong>, popularmente conhecido como "carne nos olhos" ou "carne crescida", é mais do que um problema estético. É uma lesão que causa desconforto constante, vermelhidão e, em casos avançados, pode até distorcer a visão cobrindo a pupila.</p>
                    <p>Muitos pacientes convivem anos com o problema por medo da cirurgia ou receio de que "a carne volte". Na Clinica Sempre Visão, utilizamos técnicas avançadas que reduzem drasticamente essa chance de retorno.</p>
                </section>

                <section id="causas" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-6 mb-4">Por que o Pterígio Aparece?</h2>
                    <p>O pterígio é uma resposta do olho a agressões externas crónicas. Os principais vilões são:</p>
                    <ul class="list-disc space-y-2 pl-6 sm:pl-8">
                        <li><strong>Radiação Ultravioleta (Sol):</strong> É a causa número 1. Por isso é tão comum em países tropicais como o Brasil.</li>
                        <li><strong>Poeira e Vento:</strong> Ressecam e irritam a superfície ocular.</li>
                        <li><strong>Olho Seco:</strong> A falta de lubrificação aumenta o atrito e a inflamação.</li>
                    </ul>
                </section>

                <section id="cirurgia" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-6 mb-4">A Cirurgia Moderna: Técnica do Transplante</h2>
                    <p>Esqueça as cirurgias antigas onde apenas se "raspava" a carne e ela voltava meses depois. Hoje, o padrão ouro é a <strong>Exérese de Pterígio com Transplante Conjuntival</strong>.</p>
                    
                    <div class="bg-blue-50 p-5 rounded-xl border border-blue-200 mt-4">
                        <h3 class="font-bold text-blue-800 text-lg mb-2">Como funciona?</h3>
                        <p class="text-slate-700">O cirurgião remove o pterígio e cobre a área exposta com um pequeno pedaço de conjuntiva saudável retirada do próprio olho do paciente (geralmente da parte superior, escondida pela pálpebra). Isso funciona como uma barreira natural que impede o pterígio de crescer novamente.</p>
                    </div>
                    
                    <p class="mt-4">Em muitos casos, utilizamos <strong>cola biológica</strong> em vez de pontos, o que torna o pós-operatório muito mais confortável, sem a sensação de "agulhadas".</p>
                </section>

                <section id="pos-operatorio" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-6 mb-4">Recuperação e Cuidados</h2>
                    <p>A recuperação costuma levar de 7 a 15 dias. O olho pode ficar vermelho e sensível inicialmente. O uso de óculos escuros e colírios lubrificantes e anti-inflamatórios é obrigatório para um bom resultado estético.</p>
                </section>

                <section id="cta-final" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <div class="mt-6 text-center">
                        <p class="text-xl font-semibold text-slate-800 mb-3">O pterígio está a incomodar ou a afetar a sua estética?</p>
                        <p class="text-base text-slate-600 mb-6">Agende uma avaliação para discutir a remoção com a técnica de transplante conjuntival.</p>
                        <a href="https://wa.me/5516992627740" target="_blank" rel="noopener noreferrer" class="cta-button inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-green-700 transition-colors text-base sm:text-lg">
                            Agendar Avaliação via WhatsApp
                        </a>
                    </div>
                </section>

                <section id="faq" class="w-full faq-section mt-8 pt-6 border-t border-gray-200 text-lg text-slate-700 leading-relaxed">
                    <h2 class="text-3xl font-bold text-slate-800 mb-6 text-center">Perguntas Frequentes (FAQ)</h2>
                    
                    <div class="space-y-3">
                        <details class="faq-item group border-b border-gray-200 pb-3">
                            <summary class="text-xl font-semibold text-slate-800 cursor-pointer hover:text-blue-600 list-none py-2">
                                O pterígio pode voltar após a cirurgia?
                            </summary>
                            <p class="pt-2 text-slate-600 leading-relaxed">Com a técnica antiga (apenas raspagem), a chance de retorno era alta (até 50%). Com a técnica moderna de transplante conjuntival que usamos, a taxa de recidiva cai drasticamente para cerca de 5% ou menos.</p>
                        </details>
                        
                        <details class="faq-item group border-b border-gray-200 pb-3">
                            <summary class="text-xl font-semibold text-slate-800 cursor-pointer hover:text-blue-600 list-none py-2">
                                Posso usar colírio para "secar" a carne?
                            </summary>
                            <p class="pt-2 text-slate-600 leading-relaxed">Não. Vasoconstritores apenas diminuem a vermelhidão temporariamente, mas não removem o tecido. O uso excessivo pode até piorar a irritação. A única cura é a remoção cirúrgica.</p>
                        </details>
                    </div>
                </section>
        `
    },
    {
        title: 'Qual a Melhor Lente para Catarata? Guia Definitivo para Escolher sua Lente Intraocular',
        description: 'Monofocal, Trifocal ou Tórica? Entenda as diferenças entre as lentes intraoculares (LIOs) para cirurgia de catarata e descubra qual oferece a melhor visão para o seu estilo de vida. Um comparativo completo da Clinica Sempre Visão.',
        slug: 'qual-melhor-lente-catarata-monofocal-trifocal-torica',
        imageUrl: 'Oftalmologista comparando tipos de lentes intraoculares (monofocal e multifocal) para paciente de cirurgia de catarata.webp',
        content: `
                <section id="introducao" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <p>A cirurgia de catarata não é apenas sobre remover a visão embaçada; é uma oportunidade única de <strong>recuperar a independência dos óculos</strong>. A grande estrela dessa transformação é a <strong>Lente Intraocular (LIO)</strong>, o implante que substitui o cristalino envelhecido.</p>
                    <p>Mas, com tantas opções no mercado (nacionais, importadas, premium), como saber qual é a ideal para você? Na Clinica Sempre Visão, ajudamos você a navegar por essas escolhas para encontrar a visão perfeita para o seu estilo de vida.</p>
                </section>

                <section id="tipos-lentes" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-6 mb-4">Os 3 Principais Tipos de Lentes Intraoculares</h2>
                    <p>As lentes não são todas iguais. Elas variam na tecnologia de foco e na capacidade de corrigir outros problemas de visão, como miopia e vista cansada.</p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                        <div class="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                            <h3 class="text-xl font-bold text-slate-800 mb-2">1. Monofocais</h3>
                            <span class="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-3">O Padrão Básico</span>
                            <p class="text-base grow">Corrigem a visão para apenas <strong>uma distância</strong> (geralmente para longe). Você enxergará bem placas e TV, mas <strong>precisará de óculos</strong> para ler, usar o celular ou computador.</p>
                        </div>

                        <div class="bg-blue-50 p-5 rounded-xl border border-blue-200 shadow-sm flex flex-col relative overflow-hidden">
                            <div class="absolute top-0 right-0 bg-blue-600 text-white text-xs px-2 py-1 rounded-bl">Premium</div>
                            <h3 class="text-xl font-bold text-blue-800 mb-2">2. Trifocais (Premium)</h3>
                            <span class="text-xs font-semibold uppercase tracking-wide text-blue-600 mb-3">Independência Total</span>
                            <p class="text-base grow">A tecnologia mais avançada. Possuem três focos: longe, intermediário e perto. Oferecem a maior chance de <strong>viver sem óculos</strong> para 90% das atividades diárias.</p>
                        </div>

                        <div class="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col">
                            <h3 class="text-xl font-bold text-slate-800 mb-2">3. Foco Estendido (EDOF)</h3>
                            <span class="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-3">Conforto Moderno</span>
                            <p class="text-base grow">Uma tecnologia intermediária que oferece excelente visão de longe e intermediária (painel do carro, computador), com menos halos noturnos que as trifocais. Pode precisar de óculos para letras muito pequenas.</p>
                        </div>
                    </div>
                </section>

                <section id="astigmatismo" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-6 mb-4">E se eu tiver Astigmatismo? (Lentes Tóricas)</h2>
                    <p>Muitos pacientes acreditam que quem tem astigmatismo não fica com a visão perfeita após a cirurgia. Isso é um mito!</p>
                    <p>Para esses casos, existem as <strong>Lentes Tóricas</strong>. Elas possuem um design especial feito sob medida para compensar a curvatura irregular da sua córnea. As lentes tóricas podem ser encontradas tanto nas versões Monofocais quanto nas Trifocais Premium.</p>
                </section>

                <section id="como-escolher" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-6 mb-4">Como Escolher a Ideal para Mim?</h2>
                    <p>Não existe "a melhor lente do mundo", existe a melhor lente para a <strong>sua vida</strong>. Na consulta pré-operatória, avaliamos:</p>
                    <ul class="list-disc space-y-2 pl-6 sm:pl-8">
                        <li><strong>Seus Hobbies:</strong> Você costura? Joga golfe? Dirige muito à noite? Lê muito no celular?</li>
                        <li><strong>Sua Profissão:</strong> Trabalha no computador o dia todo ou ao ar livre?</li>
                        <li><strong>Saúde Ocular:</strong> Condições como glaucoma ou problemas na retina podem influenciar a escolha da lente.</li>
                    </ul>
                </section>

                <section id="cta-final" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <div class="mt-6 text-center">
                        <p class="text-xl font-semibold text-slate-800 mb-3">Quer simular como ficaria sua visão?</p>
                        <p class="text-base text-slate-600 mb-6">Agende uma consulta de avaliação. Nossos especialistas usarão exames de biometria para indicar a lente que trará mais liberdade para seus dias.</p>
                        
                        <a href="https://wa.me/5516992627740" target="_blank" rel="noopener noreferrer" class="cta-button inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-green-700 transition-colors text-base sm:text-lg">
                            Agendar Avaliação pelo WhatsApp
                        </a>
                    </div>
                </section>

                <section id="faq" class="w-full faq-section mt-8 pt-6 border-t border-gray-200 text-lg text-slate-700 leading-relaxed">
                    <h2 class="text-3xl font-bold text-slate-800 mb-6 text-center">Dúvidas sobre Lentes (FAQ)</h2>
                    
                    <div class="space-y-3">
                        <details class="faq-item group border-b border-gray-200 pb-3">
                            <summary class="text-xl font-semibold text-slate-800 cursor-pointer hover:text-blue-600 list-none py-2">
                                A lente intraocular tem validade? Precisa trocar?
                            </summary>
                            <p class="pt-2 text-slate-600 leading-relaxed">Não. As lentes intraoculares são feitas de materiais biocompatíveis extremamente duráveis (acrílico ou silicone). Elas são projetadas para durar a vida toda, não havendo necessidade de troca por "validade".</p>
                        </details>
                        
                        <details class="faq-item group border-b border-gray-200 pb-3">
                            <summary class="text-xl font-semibold text-slate-800 cursor-pointer hover:text-blue-600 list-none py-2">
                                O plano de saúde cobre as lentes importadas/premium?
                            </summary>
                            <p class="pt-2 text-slate-600 leading-relaxed">Geralmente, os convênios cobrem a cirurgia e a lente monofocal padrão. Lentes premium (trifocais, tóricas de alta tecnologia) costumam não ter cobertura completa, sendo necessário um acerto da diferença. Verifique a política do seu plano.</p>
                        </details>

                        <details class="faq-item group border-b border-gray-200 pb-3">
                            <summary class="text-xl font-semibold text-slate-800 cursor-pointer hover:text-blue-600 list-none py-2">
                                O corpo pode rejeitar a lente?
                            </summary>
                            <p class="pt-2 text-slate-600 leading-relaxed">A rejeição imunológica à lente intraocular é extremamente rara, praticamente inexistente, pois o material é inerte. O que pode ocorrer é infecção ou inflamação, tratáveis com colírios.</p>
                        </details>
                    </div>
                </section>
        `
    },
    {
        title:
            'Ceratocone: Por que coçar os olhos pode deformar sua córnea e prejudicar a visão',
        description:
            'Seu grau de astigmatismo muda todo ano? Você tem o hábito frequente de coçar os olhos? Cuidado, pode ser Ceratocone. Entenda o que é essa doença, seus riscos e conheça os tratamentos modernos como Crosslinking e Anel de Ferrara.',
        slug: 'ceratocone-sintomas-cocar-olhos-tratamentos-crosslinking',
        imageUrl:
            'Jovem esfregando os olhos com força, principal fator de risco para o desenvolvimento e agravamento do ceratocone.webp', // Inserir URL da imagem aqui
        content: `
                <section id="introducao" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <p>Parece um hábito inofensivo: sentir uma coceira e esfregar os olhos com força para aliviar. Porém, esse gesto repetitivo pode ser o gatilho para uma doença grave e progressiva chamada <strong>Ceratocone</strong>.</p>
                    <p>Na Clinica Sempre Visão, recebemos frequentemente pacientes jovens preocupados porque "o grau do óculos não para de aumentar". Muitas vezes, o diagnóstico é o Ceratocone. Neste artigo, vamos explicar por que isso acontece, como parar a progressão da doença e evitar o transplante de córnea.</p>
                </section>

                <section id="o-que-e" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-6 mb-4">O que é o Ceratocone?</h2>
                    <p>A nossa córnea deve ser redonda e lisa, como a lente de uma câmera ou uma bola de basquete. No Ceratocone, a estrutura da córnea fica fraca e fina, e ela acaba se projetando para frente, assumindo o formato de um <strong>cone</strong> (daí o nome).</p>
                    <p>Essa deformação causa uma distorção severa na visão, gerando o que chamamos de <strong>astigmatismo irregular</strong>. Diferente do astigmatismo comum, este é mais difícil de corrigir com óculos simples.</p>
                </section>

                <section id="sintomas-alerta" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-6 mb-4">Sinais de Alerta: Quando Procurar o Médico?</h2>
                    <p>O Ceratocone costuma aparecer na adolescência ou no início da vida adulta. Fique atento se você notar:</p>
                    <ul class="list-disc space-y-2 pl-6 sm:pl-8">
                        <li><strong>Mudança frequente de grau:</strong> Seus óculos parecem ficar "fracos" a cada 6 meses.</li>
                        <li><strong>Visão de "fantasmas":</strong> Ao olhar para letras ou luzes, você vê uma sombra ou duplicação da imagem.</li>
                        <li><strong>Alta sensibilidade à luz (Fotofobia):</strong> Dificuldade para dirigir à noite ou sair ao sol.</li>
                        <li><strong>Coceira intensa:</strong> Uma vontade incontrolável de coçar os olhos (muitas vezes ligada a alergias).</li>
                    </ul>
                </section>

                <section id="tratamentos" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-6 mb-4">Existe Tratamento? Como Evitar o Transplante?</h2>
                    <p>Sim! Antigamente, muitos casos terminavam em transplante de córnea. Hoje, com a tecnologia da Clinica Sempre Visão, conseguimos estacionar a doença e reabilitar a visão na grande maioria dos casos.</p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        <div class="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm">
                            <h3 class="text-xl font-bold text-blue-700 mb-2">Crosslinking (Para Estagnar)</h3>
                            <p class="text-sm text-slate-600 mb-3">O freio da doença.</p>
                            <p class="text-base">Um procedimento que usa vitamina B2 e luz ultravioleta para endurecer a córnea, impedindo que ela continue se deformando. É fundamental realizar o quanto antes.</p>
                        </div>

                        <div class="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm">
                            <h3 class="text-xl font-bold text-blue-700 mb-2">Anel Corneano (Para Corrigir)</h3>
                            <p class="text-sm text-slate-600 mb-3">Também conhecido como Anel de Ferrara.</p>
                            <p class="text-base">Pequenos segmentos de arco implantados dentro da córnea para regularizar sua curvatura, melhorando a visão e facilitando o uso de lentes ou óculos.</p>
                        </div>
                    </div>
                    
                    <p class="mt-4">Para casos onde a visão não melhora com óculos, utilizamos <strong>Lentes de Contato Rígidas</strong> ou <strong>Esclerais</strong>, que oferecem uma nitidez impressionante.</p>
                </section>

                <section id="diagnostico" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-6 mb-4">Como Descobrir se Tenho Ceratocone?</h2>
                    <p>O exame de vista comum (refração) pode levantar a suspeita, mas o diagnóstico definitivo é feito com a <strong>Topografia</strong> ou <strong>Tomografia de Córnea</strong>. Esses exames criam um mapa de calor da superfície do seu olho, mostrando exatamente onde estão as deformações, mesmo em estágios iniciais.</p>
                    
                    <div class="mt-6 text-center">
                        <p class="text-xl font-semibold text-slate-800 mb-3">Você coça muito os olhos ou seu grau mudou rápido?</p>
                        <a href="https://api.whatsapp.com/send/?phone=5516992627740&text&type=phone_number&app_absent=0" class="cta-button inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition-colors text-base sm:text-lg">Agende sua Topografia de Córnea</a>
                    </div>
                </section>

                <section id="faq" class="w-full faq-section mt-8 pt-6 border-t border-gray-200 text-lg text-slate-700 leading-relaxed">
                    <h2 class="text-3xl font-bold text-slate-800 mb-6 text-center">Dúvidas Frequentes</h2>
                    
                    <div class="space-y-3">
                        <details class="faq-item group border-b border-gray-200 pb-3">
                            <summary class="text-xl font-semibold text-slate-800 cursor-pointer hover:text-blue-600 list-none py-2">
                                Ceratocone leva à cegueira?
                            </summary>
                            <p class="pt-2 text-slate-600 leading-relaxed">O ceratocone não causa cegueira total (escuridão completa), mas sem tratamento, pode levar a uma perda de visão severa que impede uma vida normal, exigindo transplante de córnea para reabilitação.</p>
                        </details>
                        
                        <details class="faq-item group border-b border-gray-200 pb-3">
                            <summary class="text-xl font-semibold text-slate-800 cursor-pointer hover:text-blue-600 list-none py-2">
                                Quem tem ceratocone pode fazer cirurgia a laser (LASIK)?
                            </summary>
                            <p class="pt-2 text-slate-600 leading-relaxed"><strong class="text-red-600">Não.</strong> A cirurgia refrativa a laser (LASIK/PRK) remove tecido da córnea. Como a córnea do ceratocone já é fina e fraca, esse procedimento é contraindicado pois pode agravar a doença. O tratamento deve ser Crosslinking ou Anel.</p>
                        </details>

                        <details class="faq-item group border-b border-gray-200 pb-3">
                            <summary class="text-xl font-semibold text-slate-800 cursor-pointer hover:text-blue-600 list-none py-2">
                                O que faço se meu olho coçar muito?
                            </summary>
                            <p class="pt-2 text-slate-600 leading-relaxed">Nunca coce! Use compressas frias ou colírios lubrificantes gelados para aliviar. Se a coceira for por alergia, seu oftalmologista prescreverá colírios antialérgicos específicos para controlar o sintoma.</p>
                        </details>
                    </div>
                </section>
        `
    },
    {
        title:
            'Olho Seco: Por que seus olhos ardem e parecem ter "areia"? Causas e Tratamentos',
        description:
            'Sensação de areia, ardor e visão embaçada ao fim do dia? Você pode ter Síndrome do Olho Seco. Descubra como o uso de telas e o ar condicionado afetam sua visão e conheça os tratamentos modernos na Clinica Sempre Visão.',
        slug: 'sindrome-olho-seco-ardor-areia-tratamento',
        imageUrl:
            'Pessoa esfregando os olhos cansados em frente ao computador, sintoma de síndrome do olho seco.webp', // Inserir URL da imagem aqui
        content: `
                <section id="introducao" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <p>Você já sentiu como se tivesse um grão de areia dentro dos olhos, mesmo não havendo nada lá? Ou percebe que, ao final de um dia de trabalho no computador, sua visão fica embaçada e seus olhos vermelhos? Esses são os sinais clássicos da <strong>Síndrome do Olho Seco</strong>.</p>
                    <p>Na Clinica Sempre Visão, temos notado um aumento expressivo de pacientes com essa queixa. O que antes era comum apenas em idosos, hoje afeta jovens e adultos devido ao estilo de vida moderno. Neste artigo, explicamos por que isso acontece e, principalmente, como aliviar esse desconforto.</p>
                </section>

                <section id="o-que-e" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-6 mb-4">O que é a Síndrome do Olho Seco?</h2>
                    <p>Ao contrário do que o nome sugere, o olho seco não é apenas a "falta de água". Nossa lágrima é complexa, composta por água, gordura (lipídios) e muco. A síndrome ocorre quando:</p>
                    <ul class="list-disc space-y-2 pl-6 sm:pl-8">
                        <li><strong>Você produz pouca lágrima:</strong> Deficiência aquosa.</li>
                        <li><strong>Sua lágrima evapora muito rápido:</strong> Deficiência lipídica (a mais comum). Se a camada de gordura da lágrima é ruim, a água evapora, deixando o olho desprotegido.</li>
                    </ul>
                </section>

                <section id="sintomas" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-6 mb-4">Sintomas Mais Comuns</h2>
                    <p>Além da sensação de secura, fique atento a:</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div class="bg-slate-50 p-4 rounded-lg border border-slate-200">
                            <strong class="text-blue-700 block mb-2">Sensação de Corpo Estranho</strong>
                            <p class="text-sm">A impressão persistente de ter cisco ou areia nos olhos.</p>
                        </div>
                        <div class="bg-slate-50 p-4 rounded-lg border border-slate-200">
                            <strong class="text-blue-700 block mb-2">Ardor e Vermelhidão</strong>
                            <p class="text-sm">Olhos que queimam, especialmente em ambientes com ar condicionado.</p>
                        </div>
                        <div class="bg-slate-50 p-4 rounded-lg border border-slate-200">
                            <strong class="text-blue-700 block mb-2">Visão Flutuante</strong>
                            <p class="text-sm">A visão embaça, mas melhora logo após piscar várias vezes.</p>
                        </div>
                        <div class="bg-slate-50 p-4 rounded-lg border border-slate-200">
                            <strong class="text-blue-700 block mb-2">Lacrimejamento Excessivo</strong>
                            <p class="text-sm">Parece contraditório, mas o olho seco irritado produz lágrimas reflexas (apenas água) para tentar se defender, mas que não lubrificam adequadamente.</p>
                        </div>
                    </div>
                </section>

                <section id="vilao-telas" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-6 mb-4">O Efeito das Telas (Síndrome da Visão de Computador)</h2>
                    <p>Por que o celular e o computador são vilões? Normalmente, piscamos cerca de 15 a 20 vezes por minuto. Quando estamos focados em uma tela, <strong>piscamos 5 vezes menos</strong>.</p>
                    <p>Sem piscar, a lágrima não é renovada e evapora. Isso, somado ao ar condicionado dos escritórios, cria o cenário perfeito para o ressecamento crônico.</p>
                </section>

                <section id="tratamentos" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-6 mb-4">Como Tratar e Aliviar?</h2>
                    <p>O tratamento vai muito além de "pingar qualquer colírio". É preciso identificar a causa. As abordagens incluem:</p>
                    <ul class="list-disc space-y-2 pl-6 sm:pl-8">
                        <li><strong class="font-semibold text-slate-800">Lubrificantes Oculares (Lágrimas Artificiais):</strong> Prescritos especificamente para o seu tipo de olho seco (com ou sem reposição lipídica).</li>
                        <li><strong class="font-semibold text-slate-800">Higiene das Pálpebras:</strong> Limpar a base dos cílios para desobstruir as glândulas de gordura.</li>
                        <li><strong class="font-semibold text-slate-800">Luz Pulsada (IPL):</strong> Uma tecnologia moderna disponível para estimular as glândulas de Meibomius a produzirem gordura de melhor qualidade.</li>
                        <li><strong class="font-semibold text-slate-800">Regra 20-20-20:</strong> A cada 20 minutos de tela, olhe para algo a 20 pés (6 metros) de distância por 20 segundos.</li>
                    </ul>
                </section>

                <section id="cta-final" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <div class="mt-6 text-center">
                        <p class="text-xl font-semibold text-slate-800 mb-3">Cansado de sentir os olhos queimando ao fim do dia?</p>
                        <p class="text-base text-slate-600 mb-6">O uso indiscriminado de colírios pode mascarar problemas maiores. Agende uma avaliação específica para Olho Seco.</p>
                        <a href="https://api.whatsapp.com/send/?phone=5516992627740&text&type=phone_number&app_absent=0" class="cta-button inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition-colors text-base sm:text-lg">Agendar Consulta</a>
                    </div>
                </section>

                <section id="faq" class="w-full faq-section mt-8 pt-6 border-t border-gray-200 text-lg text-slate-700 leading-relaxed">
                    <h2 class="text-3xl font-bold text-slate-800 mb-6 text-center">Dúvidas Comuns</h2>
                    
                    <div class="space-y-3">
                        <details class="faq-item group border-b border-gray-200 pb-3">
                            <summary class="text-xl font-semibold text-slate-800 cursor-pointer hover:text-blue-600 list-none py-2">
                                Posso usar colírio "clareador" para olho seco?
                            </summary>
                            <p class="pt-2 text-slate-600 leading-relaxed"><strong class="text-red-600">Cuidado!</strong> Colírios que prometem deixar o olho branco (vasoconstritores) apenas "escondem" a vermelhidão temporariamente e podem causar efeito rebote, piorando o ressecamento a longo prazo. Use apenas lubrificantes prescritos.</p>
                        </details>
                        
                        <details class="faq-item group border-b border-gray-200 pb-3">
                            <summary class="text-xl font-semibold text-slate-800 cursor-pointer hover:text-blue-600 list-none py-2">
                                Beber água ajuda no olho seco?
                            </summary>
                            <p class="pt-2 text-slate-600 leading-relaxed">Sim! A hidratação sistêmica é fundamental. Se você bebe pouca água, seu corpo raciona líquidos, e a produção de lágrima é uma das primeiras a diminuir.</p>
                        </details>

                        <details class="faq-item group border-b border-gray-200 pb-3">
                            <summary class="text-xl font-semibold text-slate-800 cursor-pointer hover:text-blue-600 list-none py-2">
                                O clima afeta meus olhos?
                            </summary>
                            <p class="pt-2 text-slate-600 leading-relaxed">Com certeza. Dias com baixa umidade, muito vento ou uso intenso de ar condicionado aceleram a evaporação da lágrima, exigindo lubrificação mais frequente.</p>
                        </details>
                    </div>
                </section>
        `
    },
    {
        title:
            'Glaucoma: O Ladrão Silencioso da Visão e a Importância do Diagnóstico Precoce',
        description:
            'O glaucoma é a principal causa de cegueira irreversível no mundo. Saiba por que ele não apresenta sintomas iniciais, quem faz parte do grupo de risco e como o exame de pressão ocular pode salvar sua visão. Um guia completo da Clinica Sempre Visão.',
        slug: 'glaucoma-sintomas-tratamento-prevencao-cegueira',
        imageUrl:
            'Paciente realizando exame de medição de pressão ocular (tonometria) para prevenção do glaucoma.webp',
        content: `
                <section id="introducao" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <p>Você sabia que é possível perder a visão lentamente sem sentir dor ou perceber qualquer mudança imediata? Este é o perigo do <strong>Glaucoma</strong>, conhecido mundialmente como o "ladrão silencioso da visão".</p>
                    <p>Na Clinica Sempre Visão, o glaucoma é uma das condições que levamos mais a sério. Por ser a principal causa de <strong>cegueira irreversível</strong> no mundo, o nosso foco total é na prevenção. Neste artigo, explicamos como essa doença age e por que o seu check-up anual é a única arma contra ela.</p>
                </section>

                <section id="o-que-e" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-6 mb-4">O que é o Glaucoma?</h2>
                    <p>O glaucoma é um grupo de doenças oculares que danificam o <strong>nervo óptico</strong>, o "cabo" vital que transmite as imagens do olho para o cérebro. Esse dano é frequentemente (mas nem sempre) causado por uma pressão interna do olho anormalmente alta.</p>
                    <div class="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                        <p class="text-blue-800 font-medium">Imagine um pneu sendo inflado excessivamente: a pressão aumenta até danificar a estrutura. No olho, quem sofre primeiro é o nervo óptico, resultando em perda de campo visual.</p>
                    </div>
                </section>

                <section id="sintomas-silenciosos" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-6 mb-4">Por que ele é chamado de "Silencioso"?</h2>
                    <p>A forma mais comum da doença, o <strong>Glaucoma Primário de Ângulo Aberto</strong>, praticamente não apresenta sintomas nos estágios iniciais:</p>
                    <ul class="list-disc space-y-2 pl-6 sm:pl-8">
                        <li>Não há dor.</li>
                        <li>Não há vermelhidão.</li>
                        <li>A nitidez da visão central permanece boa até o final.</li>
                    </ul>
                    <p>A perda de visão começa pela <strong>periferia</strong> (visão lateral). O paciente começa a perder a noção do que está ao seu redor, tropeçando em objetos ou não vendo carros se aproximando lateralmente. Quando a visão central é afetada, a doença já está em estágio muito avançado.</p>
                </section>

                <section id="fator-risco" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-6 mb-4">Você está no Grupo de Risco?</h2>
                    <p>Embora possa afetar qualquer pessoa, a vigilância deve ser redobrada se você:</p>
                    <ul class="list-disc space-y-2 pl-6 sm:pl-8">
                        <li>Tem mais de <strong>40 anos</strong>.</li>
                        <li>Possui <strong>histórico familiar</strong> de glaucoma (fator genético forte).</li>
                        <li>É de etnia <strong>africana ou asiática</strong>.</li>
                        <li>Tem pressão intraocular elevada.</li>
                        <li>Usa medicamentos corticoides por longo prazo.</li>
                        <li>Tem diabetes, hipertensão ou alta miopia.</li>
                    </ul>
                </section>

                <section id="diagnostico-tratamento" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-6 mb-4">Diagnóstico e Tratamento: Como Protegemos sua Visão</h2>
                    <p>A boa notícia é que, se detectado cedo, o glaucoma pode ser controlado.</p>
                    
                    <h3 class="text-xl font-bold text-slate-800 mt-4">Como diagnosticamos?</h3>
                    <p>Na sua consulta de rotina na Clinica Sempre Visão, realizamos a <strong>Tonometria</strong> (medição da pressão do olho) e a avaliação do fundo de olho. Se houver suspeita, solicitamos exames de alta precisão como o OCT (Tomografia) e a Campimetria Visual.</p>

                    <h3 class="text-xl font-bold text-slate-800 mt-4">Qual é o tratamento?</h3>
                    <p>O dano causado pelo glaucoma é irreversível, mas o tratamento impede que ele piore. As opções incluem:</p>
                    <ul class="list-disc space-y-2 pl-6 sm:pl-8">
                        <li><strong>Colírios:</strong> O método mais comum para baixar a pressão ocular.</li>
                        <li><strong>Laser (SLT):</strong> Um procedimento rápido e indolor feito no consultório para facilitar a drenagem do líquido ocular.</li>
                        <li><strong>Cirurgias:</strong> Indicadas para casos mais avançados ou quando colírios não são suficientes.</li>
                    </ul>
                </section>

                <section id="cta-final" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <div class="mt-6 text-center bg-slate-50 p-6 rounded-xl border border-slate-200">
                        <p class="text-xl font-semibold text-slate-800 mb-3">Há quanto tempo você não mede a pressão dos seus olhos?</p>
                        <p class="text-base text-slate-600 mb-6">Não espere notar falhas na sua visão. O diagnóstico precoce é a única forma de evitar a cegueira pelo glaucoma.</p>
                        <a href="https://api.whatsapp.com/send/?phone=5516992627740&text&type=phone_number&app_absent=0" class="cta-button inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition-colors text-base sm:text-lg">Agende seu Check-up de Glaucoma</a>
                    </div>
                </section>

                <section id="faq" class="w-full faq-section mt-8 pt-6 border-t border-gray-200 text-lg text-slate-700 leading-relaxed">
                    <h2 class="text-3xl font-bold text-slate-800 mb-6 text-center">Perguntas Frequentes (FAQ)</h2>
                    
                    <div class="space-y-3">
                        <details class="faq-item group border-b border-gray-200 pb-3">
                            <summary class="text-xl font-semibold text-slate-800 cursor-pointer hover:text-blue-600 list-none py-2">
                                O glaucoma tem cura?
                            </summary>
                            <p class="pt-2 text-slate-600 leading-relaxed">O glaucoma não tem cura definitiva (no sentido de eliminar a doença para sempre), mas tem <strong>controle</strong>. Com o tratamento correto e contínuo, o paciente mantém sua visão e qualidade de vida.</p>
                        </details>
                        
                        <details class="faq-item group border-b border-gray-200 pb-3">
                            <summary class="text-xl font-semibold text-slate-800 cursor-pointer hover:text-blue-600 list-none py-2">
                                Ter pressão alta no olho significa que tenho glaucoma?
                            </summary>
                            <p class="pt-2 text-slate-600 leading-relaxed">Nem sempre. Algumas pessoas têm pressão alta ocular, mas não desenvolvem danos no nervo (hipertensão ocular), enquanto outras têm pressão "normal" e desenvolvem glaucoma. Por isso, a avaliação completa com o oftalmologista é essencial.</p>
                        </details>

                        <details class="faq-item group border-b border-gray-200 pb-3">
                            <summary class="text-xl font-semibold text-slate-800 cursor-pointer hover:text-blue-600 list-none py-2">
                                O que é Glaucoma Agudo?
                            </summary>
                            <p class="pt-2 text-slate-600 leading-relaxed">É uma emergência médica rara onde a pressão sobe subitamente. Diferente do tipo crônico, este causa dor intensa, náuseas, vômitos e visão embaçada repentina. Exige atendimento hospitalar imediato.</p>
                        </details>
                    </div>
                </section>
        `
    },
    {
        title:
            '7 Mitos e Verdades sobre a Catarata: O Que Você Precisa Saber Antes de Operar',
        description:
            'Colírio cura catarata? É preciso esperar "amadurecer"? A doença volta? A Clinica Sempre Visão desvenda os 7 maiores mitos sobre a cirurgia de catarata para que você possa cuidar da sua visão com segurança e informação correta.',
        slug: 'mitos-e-verdades-sobre-catarata',
        imageUrl:
            'Médico oftalmologista da Clinica Sempre Visão explicando verdades sobre a catarata para paciente idosa.webp',
        content: `
                <section id="introducao" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <p>Quando o assunto é a saúde dos nossos olhos, a sabedoria popular nem sempre está correta. A <strong>catarata</strong>, sendo a cirurgia mais realizada na oftalmologia mundial, é cercada de muitas informações desencontradas que podem gerar medo ou atrasar o diagnóstico.</p>
                    <p>Na Clinica Sempre Visão, acreditamos que a informação é o primeiro passo para o tratamento. Por isso, reunimos nossa equipe de especialistas para esclarecer, de uma vez por todas, o que é fato e o que é ficção sobre a catarata.</p>
                </section>

                <section id="mito-1-colirio" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                        <h3 class="font-bold text-red-700 text-xl">Mito #1: "Existem colírios ou exercícios que curam a catarata."</h3>
                    </div>
                    <p><strong class="text-green-700 font-bold">Verdade:</strong> Infelizmente, não. Até o momento, a ciência não descobriu nenhum medicamento, colírio, dieta ou exercício ocular capaz de reverter a opacidade do cristalino. O processo de "esbranquiçamento" da lente natural do olho é físico e progressivo. A <strong>única forma eficaz e definitiva</strong> de tratar a catarata é através da cirurgia.</p>
                </section>

                <section id="mito-2-amadurecer" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                        <h3 class="font-bold text-red-700 text-xl">Mito #2: "Tenho que esperar a catarata 'amadurecer' para operar."</h3>
                    </div>
                    <p><strong class="text-green-700 font-bold">Verdade:</strong> Esse é um conceito muito antigo, da época em que as técnicas cirúrgicas eram menos avançadas. Hoje, com a moderna Facoemulsificação, <strong>não é necessário esperar</strong>. Pelo contrário: cataratas muito "maduras" (duras) podem tornar a cirurgia mais complexa.</p>
                    <p>A indicação atual é operar assim que a catarata começar a afetar sua qualidade de vida, dificultando tarefas simples como ler, dirigir ou ver televisão.</p>
                </section>

                <section id="mito-3-volta" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                        <h3 class="font-bold text-red-700 text-xl">Mito #3: "A catarata pode voltar depois da cirurgia."</h3>
                    </div>
                    <p><strong class="text-green-700 font-bold">Verdade:</strong> A catarata não volta. O cristalino opaco é removido e substituído por uma lente artificial que não estraga. O que pode acontecer em alguns pacientes, meses ou anos depois, é a opacificação da membrana que sustenta a lente (cápsula posterior).</p>
                    <p>Isso é conhecido como "segunda catarata", mas o tratamento é simples: uma limpeza rápida feita no consultório com YAG Laser, sem necessidade de nova cirurgia.</p>
                </section>

                <section id="mito-4-idosos" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                        <h3 class="font-bold text-red-700 text-xl">Mito #4: "Catarata é doença apenas de idosos."</h3>
                    </div>
                    <p><strong class="text-green-700 font-bold">Verdade:</strong> Embora o envelhecimento seja a causa principal (Catarata Senil), ela não é exclusiva da terceira idade. Pessoas mais jovens podem desenvolver catarata devido a:</p>
                    <ul class="list-disc space-y-2 pl-6 sm:pl-8">
                        <li>Diabetes não controlada.</li>
                        <li>Uso prolongado de corticoides.</li>
                        <li>Traumas ou pancadas nos olhos.</li>
                        <li>Alta exposição solar sem proteção UV.</li>
                        <li>Fatores genéticos (Catarata Congênita).</li>
                    </ul>
                </section>

                <section id="mito-5-laser" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                        <h3 class="font-bold text-red-700 text-xl">Mito #5: "A cirurgia é feita inteiramente a laser."</h3>
                    </div>
                    <p><strong class="text-green-700 font-bold">Verdade:</strong> Esta é uma meia-verdade. A técnica padrão (Facoemulsificação) utiliza <strong>ultrassom</strong> para fragmentar a catarata. Existe, sim, a tecnologia de <strong>Laser de Femtossegundo</strong>, que realiza etapas cruciais da cirurgia com precisão micrométrica, mas ela trabalha em conjunto com o ultrassom e a aspiração. Ambos os métodos são extremamente seguros.</p>
                </section>

                <section id="cta-final" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-6 mb-4">Não deixe os mitos atrapalharem sua visão</h2>
                    <p>A desinformação é o maior inimigo da saúde ocular. Se você percebe sua visão embaçada, o melhor caminho é sempre a avaliação profissional.</p>
                    
                    <div class="mt-6 text-center">
                        <p class="text-xl font-semibold text-slate-800 mb-3">Tem mais dúvidas sobre a catarata?</p>
                        <a href="https://api.whatsapp.com/send/?phone=5516992627740&text&type=phone_number&app_absent=0" class="cta-button inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition-colors text-base sm:text-lg">Converse com nossos Especialistas</a>
                    </div>
                </section>

                <section id="faq" class="w-full faq-section mt-8 pt-6 border-t border-gray-200 text-lg text-slate-700 leading-relaxed">
                    <h2 class="text-3xl font-bold text-slate-800 mb-6 text-center">Resumo Rápido (FAQ)</h2>
                    
                    <div class="space-y-3">
                        <details class="faq-item group border-b border-gray-200 pb-3">
                            <summary class="text-xl font-semibold text-slate-800 cursor-pointer hover:text-blue-600 list-none py-2">
                                A cirurgia de catarata é perigosa?
                            </summary>
                            <p class="pt-2 text-slate-600 leading-relaxed">Todo procedimento cirúrgico envolve riscos, mas a cirurgia de catarata é considerada uma das mais seguras e bem-sucedidas da medicina moderna, com taxas de complicação extremamente baixas.</p>
                        </details>
                        
                        <details class="faq-item group border-b border-gray-200 pb-3">
                            <summary class="text-xl font-semibold text-slate-800 cursor-pointer hover:text-blue-600 list-none py-2">
                                Posso deixar de usar óculos após a cirurgia?
                            </summary>
                            <p class="pt-2 text-slate-600 leading-relaxed">Sim, é muito provável! Com o implante de Lentes Intraoculares Premium (Multifocais ou Tóricas), é possível corrigir miopia, hipermetropia, astigmatismo e presbiopia na mesma cirurgia, reduzindo drasticamente a dependência dos óculos.</p>
                        </details>
                    </div>
                </section>
        `
    },
    {
        title:
            'Cirurgia Refrativa a Laser: O Guia para Deixar de Usar Óculos (LASIK e PRK)',
        description:
            'Sonha em viver sem óculos ou lentes de contato? Descubra tudo sobre a Cirurgia Refrativa a Laser. A Clinica Sempre Visão explica as diferenças entre LASIK e PRK, quem pode fazer a cirurgia, como é a recuperação e os benefícios de corrigir miopia, astigmatismo e hipermetropia.',
        slug: 'cirurgia-refrativa-laser-lasik-prk-adeus-oculos',
        imageUrl:
            'Mulher sorrindo segurando óculos de grau em consultório, decidindo pela cirurgia refrativa..webp',
        content: `
                <section id="introducao" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <p>Imagine acordar de manhã e enxergar o relógio nitidamente sem precisar tatear a mesa de cabeceira em busca dos óculos. Ou praticar esportes e nadar sem a preocupação com lentes de contato. Para milhões de pessoas, essa liberdade é conquistada através da <strong class="font-semibold text-slate-800">Cirurgia Refrativa a Laser</strong>.</p>
                    <p>Na Clinica Sempre Visão, sabemos que a decisão de operar os olhos envolve expectativas e dúvidas. Este artigo foi preparado para esclarecer como o procedimento funciona, as tecnologias que utilizamos e se você é um candidato ideal para dar adeus ao "grau".</p>
                </section>

                <section id="o-que-corrige" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-6 mb-4">O Que a Cirurgia Refrativa Corrige?</h2>
                    <p>A cirurgia a laser remodela a curvatura da córnea para corrigir os chamados "erros refrativos", permitindo que a imagem seja focalizada corretamente na retina. Ela é indicada para:</p>
                    <ul class="list-disc space-y-2 pl-6 sm:pl-8">
                        <li><strong class="font-semibold text-slate-800">Miopia:</strong> Dificuldade para enxergar de longe.</li>
                        <li><strong class="font-semibold text-slate-800">Hipermetropia:</strong> Dificuldade para enxergar de perto (e às vezes longe).</li>
                        <li><strong class="font-semibold text-slate-800">Astigmatismo:</strong> Visão distorcida ou embaçada em qualquer distância.</li>
                        <li><strong class="font-semibold text-slate-800">Presbiopia:</strong> Em alguns casos específicos, técnicas modernas podem auxiliar na "vista cansada" após os 40 anos.</li>
                    </ul>
                </section>

                <section id="tecnicas-lasik-prk" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-6 mb-4">LASIK vs. PRK: Entenda as Diferenças</h2>
                    <p>Existem duas técnicas principais e consagradas mundialmente. Ambas utilizam o <strong>Excimer Laser</strong>, mas diferem na forma de aplicação. Seu médico indicará a melhor opção baseada na espessura da sua córnea e no seu estilo de vida.</p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        <div class="bg-slate-50 p-[20px!important] rounded-xl border border-slate-200 shadow-sm">
                            <h3 class="text-xl font-bold text-blue-700 mb-2">LASIK</h3>
                            <p class="text-sm text-slate-600 mb-3">A técnica mais comum.</p>
                            <ul class="space-y-1 text-base">
                                <li>Criamos uma fina camada (flap) na superfície da córnea.</li>
                                <li>O laser é aplicado nas camadas internas.</li>
                                <li><strong>Recuperação visual:</strong> Muito rápida (frequentemente no dia seguinte).</li>
                                <li><strong>Desconforto:</strong> Mínimo ou inexistente.</li>
                            </ul>
                        </div>

                        <div class="bg-slate-50 p-[20px!important] rounded-xl border border-slate-200 shadow-sm">
                            <h3 class="text-xl font-bold text-blue-700 mb-2">PRK</h3>
                            <p class="text-sm text-slate-600 mb-3">Ideal para córneas mais finas ou esportistas de contato.</p>
                            <ul class="space-y-1 text-base">
                                <li>O laser é aplicado diretamente na superfície da córnea (sem flap).</li>
                                <li>Usa-se uma lente de contato terapêutica por alguns dias.</li>
                                <li><strong>Recuperação visual:</strong> Gradual (alguns dias a semanas).</li>
                                <li><strong>Desconforto:</strong> Pode haver ardência nos primeiros 2-3 dias.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="quem-pode-fazer" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-6 mb-4">Quem Pode Fazer a Cirurgia? (Pré-requisitos)</h2>
                    <p>Para garantir a segurança e o sucesso do procedimento, é necessário cumprir alguns critérios básicos:</p>
                    <ul class="list-disc space-y-2 pl-6 sm:pl-8">
                        <li>Ter mais de <strong class="font-semibold text-slate-800">18 anos</strong> (idealmente acima de 21).</li>
                        <li>Ter o <strong class="font-semibold text-slate-800">grau estável</strong> por pelo menos 1 ano (sem mudanças significativas nos óculos).</li>
                        <li>Não estar grávida ou amamentando.</li>
                        <li>Ter córneas saudáveis e com espessura adequada (avaliado através do exame de Topografia ou Tomografia de Córnea).</li>
                        <li>Não possuir doenças oculares graves como ceratocone não tratado ou glaucoma avançado.</li>
                    </ul>
                </section>

                <section id="passo-a-passo" class="w-full text-lg text-slate-700 leading-relaxed space-y-4 mb-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-6 mb-4">Como é o Procedimento?</h2>
                    <p>A cirurgia é surpreendentemente rápida e segura:</p>
                    <ol class="list-decimal space-y-2 pl-6 sm:pl-8">
                        <li><strong>Anestesia:</strong> Apenas colírios anestésicos. Sem agulhas, sem dor.</li>
                        <li><strong>O Laser:</strong> O paciente fita uma luz enquanto o laser trabalha. O aparelho possui um sistema de rastreamento (eye-tracker) que segue qualquer movimento involuntário do olho, garantindo precisão total.</li>
                        <li><strong>Tempo:</strong> A aplicação do laser dura apenas alguns segundos por olho.</li>
                    </ol>
                    
                    <div class="mt-6 text-center">
                        <p class="text-xl font-semibold text-slate-800 mb-[12px!Important]">Quer saber se você é um candidato?</p>
                        <a href="https://api.whatsapp.com/send/?phone=5516992627740&text&type=phone_number&app_absent=0" class="cta-button inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition-colors text-base sm:text-lg">Agende seus Exames Pré-Operatórios</a>
                    </div>
                </section>

                <section id="faq" class="w-full faq-section mt-8 pt-6 border-t border-gray-200 text-lg text-slate-700 leading-relaxed">
                    <h2 class="text-3xl font-bold text-slate-800 mb-6 text-center">Perguntas Frequentes (FAQ)</h2>
                    
                    <div class="space-y-3">
                        
                        <details class="faq-item group border-b border-gray-200 pb-3">
                            <summary class="text-xl font-semibold text-slate-800 cursor-pointer hover:text-blue-600 list-none py-2">
                                O grau pode voltar depois da cirurgia?
                            </summary>
                            <p class="pt-2 text-slate-600 leading-relaxed">Na grande maioria dos casos, a correção é definitiva. No entanto, o olho é um órgão vivo e pequenas alterações podem ocorrer ao longo de décadas. Além disso, a cirurgia não previne a presbiopia (vista cansada) que ocorre naturalmente após os 40 anos.</p>
                        </details>
                        
                        <details class="faq-item group border-b border-gray-200 pb-3">
                            <summary class="text-xl font-semibold text-slate-800 cursor-pointer hover:text-blue-600 list-none py-2">
                                É possível operar os dois olhos no mesmo dia?
                            </summary>
                            <p class="pt-2 text-slate-600 leading-relaxed">Sim! Na cirurgia refrativa a laser, é padrão realizar o procedimento em ambos os olhos no mesmo dia, permitindo uma recuperação simultânea e mais conforto visual.</p>
                        </details>

                        <details class="faq-item group border-b border-gray-200 pb-3">
                            <summary class="text-xl font-semibold text-slate-800 cursor-pointer hover:text-blue-600 list-none py-2">
                                Quanto tempo de repouso é necessário?
                            </summary>
                            <p class="pt-2 text-slate-600 leading-relaxed">Geralmente, recomenda-se repouso relativo de 1 a 3 dias, dependendo da técnica (LASIK é mais rápido que PRK). Atividades físicas intensas e piscina devem ser evitadas por algumas semanas, conforme orientação médica.</p>
                        </details>
                        
                        <details class="faq-item group border-b border-gray-200 pb-3">
                            <summary class="text-xl font-semibold text-slate-800 cursor-pointer hover:text-blue-600 list-none py-2">
                                A cirurgia a laser dói?
                            </summary>
                            <p class="pt-2 text-slate-600 leading-relaxed">O procedimento em si é indolor graças aos colírios anestésicos. No pós-operatório do PRK, pode haver dor leve a moderada e sensação de areia por 2 a 3 dias, controlada com medicação. No LASIK, o desconforto é mínimo.</p>
                        </details>
                    </div>
                </section>
        `
    },
    {
        title:
            'Catarata: O que É, Principais Sintomas e Quando a Cirurgia é Indicada',
        description:
            'Um guia completo da Clinica Sempre Visão sobre a catarata, a principal causa de cegueira reversível. Entenda o que é, os sintomas de alerta (como visão embaçada) e descubra qual o momento certo de optar pela cirurgia para restaurar sua visão.',
        slug: 'catarata-o-que-e-sintomas-quando-operar',
        imageUrl:
            'Oftalmologista da Clinica Sempre Visão explicando o diagnóstico de catarata para um paciente idoso em consultório.png',
        content: `
                <section id="o-que-e" class="space-y-6">
                    <p>A <strong class="font-semibold text-slate-800">catarata</strong> é uma das principais causas de perda de visão no mundo, mas felizmente, é <strong class="font-semibold text-slate-800">totalmente reversível</strong> com o tratamento adequado. Ela ocorre quando o <strong class="font-semibold text-slate-800">cristalino</strong>, a lente natural do nosso olho, perde sua transparência e se torna opaco. Esse processo impede que a luz chegue com clareza à retina, tornando a visão progressivamente embaçada ou "nublada".</p>
                    <p>Na Clinica Sempre Visão, entendemos que um diagnóstico de catarata pode gerar dúvidas. Por isso, preparamos este guia para explicar tudo o que você precisa saber sobre essa condição, desde os primeiros sinais até o momento certo de considerar o tratamento.</p>
                </section>

                <section id="sintomas" class="space-y-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-12 mb-6">Quais são os Sintomas da Catarata?</h2>
                    <p>A catarata geralmente se desenvolve de forma lenta e gradual. Muitas vezes, os primeiros sintomas são sutis e podem ser confundidos com o processo natural de envelhecimento. Fique atento a estes sinais:</p>
                    
                    <ul class="list-disc space-y-4 pl-6 sm:pl-8">
                        <li><strong class="font-semibold text-slate-800">Visão embaçada ou "nublada":</strong> É como se estivesse olhando através de um vidro fosco ou de uma névoa constante.</li>
                        <li><strong class="font-semibold text-slate-800">Sensibilidade aumentada à luz (Fotofobia):</strong> Luzes fortes, como faróis de carro à noite ou a luz do sol, podem causar grande desconforto e ofuscamento.</li>
                        <li><strong class="font-semibold text-slate-800">Mudanças frequentes no grau dos óculos:</strong> Se seu grau de miopia ou hipermetropia muda constantemente, pode ser um sinal.</li>
                        <li><strong class="font-semibold text-slate-800">Percepção desbotada das cores:</strong> As cores parecem menos vivas e mais amareladas.</li>
                        <li><strong class="font-semibold text-slate-800">Visão dupla (diplopia):</strong> Ver imagens duplicadas em apenas um dos olhos.</li>
                        <li><strong class="font-semibold text-slate-800">Dificuldade para enxergar à noite:</strong> A visão noturna fica significativamente prejudicada, tornando tarefas como dirigir à noite mais difíceis.</li>
                    </ul>
                </section>

                <section id="causas" class="space-y-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-12 mb-6">O que Causa a Catarata?</h2>
                    <p>A causa mais comum da catarata é o <strong class="font-semibold text-slate-800">envelhecimento natural do olho</strong> (catarata senil), que afeta a maioria das pessoas acima dos 60 anos. No entanto, outros fatores podem acelerar ou causar o problema:</p>
                    <ul class="list-disc space-y-4 pl-6 sm:pl-8">
                        <li><strong class="font-semibold text-slate-800">Diabetes:</strong> Pacientes diabéticos têm um risco aumentado.</li>
                        <li><strong class="font-semibold text-slate-800">Traumas Oculares:</strong> Uma pancada ou lesão significativa no olho.</li>
                        <li><strong class="font-semibold text-slate-800">Uso prolongado de medicamentos:</strong> Especialmente corticoides.</li>
                        <li><strong class="font-semibold text-slate-800">Exposição solar excessiva:</strong> A radiação UV sem proteção adequada ao longo da vida.</li>
                        <li><strong class="font-semibold text-slate-800">Catarata congênita:</strong> Presente desde o nascimento.</li>
                        <li><strong class="font-semibold text-slate-800">Tabagismo e Alcoolismo:</strong> Hábitos que aumentam o risco.</li>
                    </ul>
                </section>

                <section id="quando-operar" class="space-y-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-12 mb-6">Quando a Cirurgia de Catarata é Indicada?</h2>
                    <p>Esta é a dúvida mais comum. Antigamente, existia o mito de que era preciso "esperar a catarata amadurecer". <strong class="font-semibold text-slate-800">Isso não é mais verdade.</strong></p>
                    <p>A indicação da cirurgia de catarata não depende da "maturidade" da doença, mas sim do <strong class="font-semibold text-slate-800">impacto que ela causa na qualidade de vida do paciente</strong>. A cirurgia é recomendada quando a perda de visão começa a interferir nas suas atividades diárias, como:</p>
                    <ul class="list-disc space-y-4 pl-6 sm:pl-8">
                        <li>Dificuldade para ler livros, legendas ou o celular.</li>
                        <li>Insegurança para dirigir, especialmente à noite.</li>
                        <li>Dificuldade em reconhecer rostos.</li>
                        <li>Risco aumentado de quedas.</li>
                    </ul>
                    <p>A decisão é sempre tomada em conjunto com seu oftalmologista, após uma avaliação detalhada. O objetivo é devolver sua independência e qualidade de visão.</p>
                </section>

                <section id="diagnostico" class="space-y-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-12 mb-6">Como é feito o Diagnóstico?</h2>
                    <p>O diagnóstico da catarata é feito pelo médico oftalmologista durante uma consulta de rotina. Através de exames como o exame na <strong class="font-semibold text-slate-800">lâmpada de fenda</strong> (biomicroscopia) e a avaliação da acuidade visual, o médico consegue identificar a opacidade do cristalino e avaliar o quanto ela está afetando sua visão.</p>
                    <p><strong class="font-semibold text-slate-800">Não espere seus sintomas piorarem.</strong> Se você se identifica com algum dos sinais, o primeiro passo é marcar uma avaliação.</p>
                    
                    <a href="https://api.whatsapp.com/send/?phone=5516992627740&text&type=phone_number&app_absent=0" class=" h-6 inline-block bg-blue-900 text-white font-bold py-8 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition-colors text-center text-base sm:text-lg">Agende sua Avaliação de Catarata</a>
                </section>

                <section id="faq" class="faq-section mt-16 pt-8 border-t border-gray-200">
                    <h2 class="text-3xl font-bold text-slate-800 mb-8 text-center">Perguntas Frequentes (FAQ)</h2>
                    
                    <div class="w-full space-y-4">
                        
                        <details class="faq-item group border-b border-gray-200 pb-8">
                            <summary class="text-xl font-semibold text-slate-800 cursor-pointer hover:text-blue-600 list-none py-2">
                                Existe colírio ou óculos que cura catarata?
                            </summary>
                            <p class="pt-3 text-slate-600 leading-relaxed">Não. O único tratamento eficaz e definitivo para a catarata é a cirurgia, que substitui o cristalino opaco por uma lente nova e transparente.</p>
                        </details>
                        
                        <details class="faq-item group border-b border-gray-200 pb-8">
                            <summary class="text-xl font-semibold text-slate-800 cursor-pointer hover:text-blue-600 list-none py-2">
                                A catarata pode voltar depois da cirurgia?
                            </summary>
                            <p class="pt-3 text-slate-600 leading-relaxed">Não. A catarata em si não volta. O que pode ocorrer meses ou anos depois é a opacificação da cápsula onde a lente foi implantada (chamada de "opacidade capsular" ou "segunda catarata"). O tratamento para isso é simples, rápido e feito no próprio consultório com um laser (Capsulotomia YAG).</p>
                        </details>

                        <details class="faq-item group border-b border-gray-200 pb-8">
                            <summary class="text-xl font-semibold text-slate-800 cursor-pointer hover:text-blue-600 list-none py-2">
                                A catarata é contagiosa ou passa de um olho para o outro?
                            </summary>
                            <p class="pt-3 text-slate-600 leading-relaxed">Não, a catarata não é uma doença contagiosa. Ela também não "passa" de um olho para o outro, embora seja muito comum se desenvolver em ambos os olhos (geralmente em ritmos diferentes).</p>
                        </details>
                    </div>
                </section>
            
        `
    },
    {
        title:
            'Cirurgia de Catarata: O Guia Definitivo sobre o Procedimento, Lentes Intraoculares e Recuperação',
        description:
            'Prepare-se para a cirurgia de catarata. A Clinica Sempre Visão explica em detalhes como funciona o procedimento moderno (facoemulsificação), os tipos de lentes intraoculares (LIOs) para corrigir grau (multifocais, tóricas) e o guia passo a passo da recuperação pós-operatória.',
        slug: 'cirurgia-de-catarata-procedimento-lentes-intraoculares-recuperacao',
        imageUrl:
            'Cirurgião oftalmologista realizando cirurgia de catarata com equipamento moderno de facoemulsificação.png',
        content: `
                <section id="introducao" class="space-y-6">
                    <p>A <strong class="font-semibold text-slate-800">cirurgia de catarata</strong> é um dos procedimentos mais seguros e eficazes da medicina moderna. Ela consiste na remoção do cristalino opaco e sua substituição por uma lente intraocular (LIO) artificial e transparente, restaurando a nitidez da visão. Graças aos avanços tecnológicos, a cirurgia é rápida, indolor e de recuperação acelerada.</p>
                    <p>Se você ou um ente querido tem indicação para a cirurgia, é natural ter dúvidas. Na Clinica Sempre Visão, priorizamos sua confiança. Este guia detalha o passo a passo do procedimento, os tipos de lentes disponíveis e o que esperar da recuperação.</p>
                </section>

                <section id="como-e-feita" class="space-y-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-12 mb-6">Como Funciona a Cirurgia de Catarata? A Técnica Moderna</h2>
                    <p>O método mais moderno e utilizado atualmente é a <strong class="font-semibold text-slate-800">Facoemulsificação</strong>. O procedimento é realizado sob anestesia local (colírios) e leve sedação, garantindo total conforto.</p>
                    
                    <ol class="list-decimal space-y-4 pl-6 sm:pl-8">
                        <li><strong class="font-semibold text-slate-800">Microincisão:</strong> O cirurgião faz uma incisão minúscula (cerca de 2 milímetros) na córnea.</li>
                        <li><strong class="font-semibold text-slate-800">Facoemulsificação:</strong> Uma sonda de ultrassom de alta frequência é inserida. Ela vibra rapidamente, quebrando (emulsificando) o cristalino opaco em pequenos fragmentos.</li>
                        <li><strong class="font-semibold text-slate-800">Aspiração:</strong> Esses fragmentos são delicadamente aspirados para fora do olho.</li>
                        <li><strong class="font-semibold text-slate-800">Implante da Lente:</strong> Através da mesma microincisão, a nova <strong class="font-semibold text-slate-800">lente intraocular (LIO)</strong> é inserida. Ela entra dobrada e se abre suavemente dentro do olho, posicionando-se no lugar do antigo cristalino.</li>
                    </ol>
                    <p>A incisão é tão pequena que, na maioria dos casos, ela é autosselante, <strong class="font-semibold text-slate-800">não necessitando de pontos</strong>. O procedimento todo dura, em média, de 15 a 20 minutos.</p>
                </section>

                <section id="lentes-intraoculares" class="space-y-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-12 mb-6">Quais são os Tipos de Lentes Intraoculares (LIOs)?</h2>
                    <p>A escolha da lente intraocular é um dos momentos mais importantes da cirurgia, pois ela pode não apenas curar a catarata, mas também <strong class="font-semibold text-slate-800">corrigir erros refrativos</strong> (grau), como miopia, hipermetropia, astigmatismo e presbiopia (vista cansada).</p>
                    <p>As principais opções são:</p>
                    <ul class="list-disc space-y-4 pl-6 sm:pl-8">
                        <li><strong class="font-semibold text-slate-800">Lentes Monofocais:</strong> Corrigem a visão para um único foco, geralmente para <strong class="font-semibold text-slate-800">longe</strong>. O paciente terá uma excelente visão para dirigir ou ver TV, mas provavelmente precisará de óculos para ler de perto.</li>
                        <li><strong class="font-semibold text-slate-800">Lentes Tóricas (Monofocais ou Multifocais):</strong> São desenhadas especificamente para pacientes que possuem <strong class="font-semibold text-slate-800">astigmatismo</strong>, corrigindo-o juntamente com a catarata.</li>
                        <li><strong class="font-semibold text-slate-800">Lentes Multifocais (Bifocais ou Trifocais):</strong> A tecnologia mais avançada. Possuem múltiplos focos, permitindo uma boa visão para <strong class="font-semibold text-slate-800">longe, intermediário (computador) e perto (leitura)</strong>. O objetivo é reduzir ou eliminar a dependência dos óculos após a cirurgia.</li>
                    </ul>
                    <p>A escolha da lente ideal depende do seu estilo de vida, das suas expectativas e da saúde geral dos seus olhos. Seu oftalmologista da Clinica Sempre Visão irá avaliar qual a melhor opção para o seu caso.</p>
                </section>

                <section id="recuperacao" class="space-y-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-12 mb-6">Como é o Pós-Operatório e a Recuperação?</h2>
                    <p>A recuperação da cirurgia de catarata moderna é notavelmente rápida.</p>
                    <ul class="list-disc space-y-4 pl-6 sm:pl-8">
                        <li><strong class="font-semibold text-slate-800">Alta no Mesmo Dia:</strong> O paciente recebe alta logo após o procedimento, com um protetor ocular.</li>
                        <li><strong class="font-semibold text-slate-800">Visão Imediata:</strong> Embora a visão possa estar um pouco embaçada no primeiro dia, a melhora da nitidez é percebida rapidamente, progredindo ao longo dos dias seguintes.</li>
                        <li><strong class="font-semibold text-slate-800">Uso de Colírios:</strong> É fundamental seguir rigorosamente o uso dos colírios antibióticos e anti-inflamatórios prescritos para prevenir infecções e acelerar a cicatrização.</li>
                        <li><strong class="font-semibold text-slate-800">Cuidados Essenciais:</strong> Nos primeiros dias, é vital evitar coçar ou apertar os olhos, não fazer esforço físico pesado e evitar mergulhar em piscina ou mar.</li>
                        <li><strong class="font-semibold text-slate-800">Retorno às Atividades:</strong> A maioria dos pacientes retoma atividades leves, como ler e assistir TV, no dia seguinte.</li>
                    </ul>
                </section>

                <section id="vantagens" class="space-y-6">
                    <h2 class="text-2xl sm:text-3xl font-bold text-slate-800 mt-12 mb-6">Vantagens da Cirurgia Moderna</h2>
                    <ul class="list-disc space-y-4 pl-6 sm:pl-8">
                        <li>Procedimento rápido, seguro e indolor.</li>
                        <li>Recuperação acelerada.</li>
                        <li>Restauração da visão nítida e das cores vibrantes.</li>
                        <li>Oportunidade de corrigir o grau (miopia, astigmatismo, presbiopia).</li>
                        <li>Melhora significativa na qualidade de vida e independência.</li>
                    </ul>
                    
                    <a href="https://api.whatsapp.com/send/?phone=5516992627740&text&type=phone_number&app_absent=0" class="cta-button inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition-colors text-center text-base sm:text-lg">Pronto para Voltar a Enxergar o Mundo? Agende sua Cirurgia</a>
                </section>

                <section id="faq" class="faq-section mt-16 pt-8 border-t border-gray-200">
                    <h2 class="text-3xl font-bold text-slate-800 mb-8 text-center">Perguntas Frequentes (FAQ)</h2>
                    
                    <div class="space-y-4">
                        
                        <details class="faq-item group border-b border-gray-200 pb-4">
                            <summary class="text-xl font-semibold text-slate-800 cursor-pointer hover:text-blue-600 list-none py-2">
                                A cirurgia de catarata dói?
                            </summary>
                            <p class="pt-3 text-slate-600 leading-relaxed">Não. O procedimento é realizado com anestesia local (colírios) e uma leve sedação, tornando-o completamente indolor. O paciente pode sentir um leve desconforto ou sensação de areia no olho nas primeiras horas após a cirurgia, o que é normal.</p>
                        </details>
                        
                        <details class="faq-item group border-b border-gray-200 pb-4">
                            <summary class="text-xl font-semibold text-slate-800 cursor-pointer hover:text-blue-600 list-none py-2">
                                Quanto tempo dura a cirurgia?
                            </summary>
                            <p class="pt-3 text-slate-600 leading-relaxed">O ato cirúrgico em si é muito rápido, durando em média de 15 a 20 minutos por olho.</p>
                        </details>

                        <details class="faq-item group border-b border-gray-200 pb-4">
                            <summary class="text-xl font-semibold text-slate-800 cursor-pointer hover:text-blue-600 list-none py-2">
                                A cirurgia é feita com laser?
                            </summary>
                            <p class="pt-3 text-slate-600 leading-relaxed">A técnica principal é a Facoemulsificação, que usa ultrassom. Existe também a cirurgia assistida pelo <strong class="font-semibold text-slate-800">Laser de Femtossegundo</strong>, que automatiza algumas etapas (como a incisão e a quebra do cristalino) com extrema precisão. Ambas as técnicas são excelentes. Consulte seu médico sobre qual é a mais indicada para você.</p>
                        </details>
                        
                        <details class="faq-item group border-b border-gray-200 pb-4">
                            <summary class="text-xl font-semibold text-slate-800 cursor-pointer hover:text-blue-600 list-none py-2">
                                Posso operar os dois olhos no mesmo dia?
                            </summary>
                            <p class="pt-3 text-slate-600 leading-relaxed">Embora seja tecnicamente possível, a prática mais comum e segura é operar um olho de cada vez, geralmente com um intervalo de uma a duas semanas entre os procedimentos. Isso permite a recuperação do primeiro olho e minimiza riscos.</p>
                        </details>
                    </div>
                </section>
            
        `
    },
    {
        title:
            'Coquetel de inauguração da Sempre Visão em Franca celebra nova fase da clínica com convidados especiais',
        slug: 'coquetel-de-inauguracao-da-sempre-visao-em-franca-celebra-nova-fase-da-clinica-com-convidados-especiais',
        imageUrl: 'coquetel-inauguracao-sempre-visao-em-franca-capa.JPG',
        description:
            'No dia 16 de outubro, a Sempre Visão realizou um coquetel de inauguração que reuniu convidados especiais, parceiros, amigos e personalidades da região. O evento marcou a abertura oficial da nova unidade em Franca e celebrou uma nova etapa na trajetória de excelência da clínica.',
        content: `
        <h2>Coquetel de inauguração da Sempre Visão em Franca celebra nova fase da clínica com convidados especiais</h2>

        <p>No dia <strong>16 de outubro</strong>, a <strong>Sempre Visão</strong> realizou um coquetel de inauguração que reuniu convidados especiais, parceiros, amigos e personalidades da região. O evento marcou a abertura oficial da nova unidade em Franca e celebrou uma nova etapa na trajetória de excelência da clínica.</p>

        <p>Durante a noite, os presentes puderam conhecer de perto as modernas instalações, pensadas para oferecer <strong>conforto</strong>, <strong>tecnologia de ponta</strong> e um <strong>atendimento humanizado</strong>. Os convidados se encantaram com os espaços cuidadosamente planejados, os equipamentos de última geração e a estrutura preparada para garantir a melhor experiência em saúde ocular.</p>

        <p>A nova unidade conta com <strong>centro cirúrgico próprio</strong>, permitindo a realização de procedimentos como <strong>cirurgia de catarata sem fila</strong>, <strong>pterígio</strong>, <strong>cirurgias refrativas a laser</strong> e outros <strong>tratamentos oftalmológicos avançados</strong>, reforçando o compromisso da Sempre Visão com a excelência e a comodidade para os pacientes.</p>

        <p>O coquetel foi também uma oportunidade de celebrar pessoas que fazem parte da história da clínica. Entre conversas descontraídas e momentos de networking, os participantes compartilharam a alegria de testemunhar a expansão da Sempre Visão, reforçando a importância do cuidado com a visão e do compromisso com a comunidade.</p>

        <p>O evento foi um verdadeiro momento de <strong>celebração</strong>, <strong>união</strong> e <strong>inspiração</strong>, mostrando que a clínica segue firme em sua missão: <em>transformar vidas através da visão, com excelência, cuidado e humanidade.</em></p>

    `,
        galleryImages: [
            'coquetel-inauguracao-sempre-visao-em-franca-001.JPG',
            'coquetel-inauguracao-sempre-visao-em-franca-002.JPG',
            'coquetel-inauguracao-sempre-visao-em-franca-003.JPG',
            'coquetel-inauguracao-sempre-visao-em-franca-004.JPG',
            'coquetel-inauguracao-sempre-visao-em-franca-005.JPG',
            'coquetel-inauguracao-sempre-visao-em-franca-006.JPG',
            'coquetel-inauguracao-sempre-visao-em-franca-007.JPG',
            'coquetel-inauguracao-sempre-visao-em-franca-008.JPG',
            'coquetel-inauguracao-sempre-visao-em-franca-009.JPG',
            'coquetel-inauguracao-sempre-visao-em-franca-010.JPG',
            'coquetel-inauguracao-sempre-visao-em-franca-011.JPG',
            'coquetel-inauguracao-sempre-visao-em-franca-012.JPG',
            'coquetel-inauguracao-sempre-visao-em-franca-013.JPG',
            'coquetel-inauguracao-sempre-visao-em-franca-014.JPG',
            'coquetel-inauguracao-sempre-visao-em-franca-015.JPG',
            'coquetel-inauguracao-sempre-visao-em-franca-016.JPG',
            'coquetel-inauguracao-sempre-visao-em-franca-017.JPG',
            'coquetel-inauguracao-sempre-visao-em-franca-018.JPG',
            'coquetel-inauguracao-sempre-visao-em-franca-019.JPG',
            'coquetel-inauguracao-sempre-visao-em-franca-020.JPG',
            'coquetel-inauguracao-sempre-visao-em-franca-021.JPG'
        ]
    },
    {
        title: 'Sempre Visão chega a Franca com tecnologia e cuidado humanizado',
        slug: 'sempre-visao-chega-a-franca-com-tecnologia-e-cuidado-humanizado',
        description:
            'No dia 13 de outubro, a cidade de Franca ganhou uma nova referência em saúde ocular: a Sempre Visão, clínica oftalmológica do Grupo Sempre, abriu oficialmente suas portas e já está atendendo pacientes na Rua General Telles, 1259, ao lado da Sempre Sorrindo. A nova unidade chega para oferecer à população o que há de mais moderno em cuidados com a visão, combinando tecnologia de ponta, atendimento humanizado e uma equipe altamente especializada.',
        imageUrl:
            'sempre-visao-chega-a-franca-com-tecnologia-e-cuidado-humanizado.JPG',
        content: `
        <h2>Sempre Visão chega a Franca com tecnologia e cuidado humanizado</h2>

        <p>No dia <strong>13 de outubro</strong>, a cidade de Franca ganhou uma nova referência em saúde ocular: a <strong>Sempre Visão</strong>, clínica oftalmológica do <strong>Grupo Sempre</strong>, abriu oficialmente suas portas e já está atendendo pacientes na <strong>Rua General Telles, 1259</strong>, ao lado da Sempre Sorrindo. A nova unidade chega para oferecer à população o que há de mais moderno em cuidados com a visão, combinando tecnologia de ponta, atendimento humanizado e uma equipe altamente especializada.</p>

        <p>Desde a sua abertura, os pacientes têm acesso a um atendimento completo e personalizado, com foco em qualidade de vida e bem-estar visual — e claro, <strong>cirurgia de catarata sem fila</strong>. A Sempre Visão oferece uma ampla gama de serviços, garantindo que cada paciente receba a atenção e o cuidado necessários para a saúde dos olhos. Entre os principais serviços estão:</p>

        <ul>
            <li>Consultas de vista detalhadas, realizadas por profissionais especializados.</li>
            <li>Exames oftalmológicos avançados, com equipamentos modernos.</li>
            <li>Cirurgias oftalmológicas, incluindo:
            <ul>
                <li>Catarata sem fila.</li>
                <li>Cirurgia de pterígio.</li>
                <li>Cirurgia refrativa a laser.</li>
            </ul>
            </li>
            <li>Tratamentos especializados para todas as idades.</li>
            <li>E muito mais.</li>
        </ul>

        <p>A unidade se destaca também pela <strong>localização estratégica</strong>, ao lado da Sempre Sorrindo, oferecendo praticidade para quem precisa cuidar da visão e do sorriso em um único lugar.</p>

        <p>Além da infraestrutura moderna, a Sempre Visão prioriza o <strong>atendimento humanizado</strong>, garantindo que cada paciente se sinta acolhido e seguro. A equipe está preparada para orientar sobre cuidados preventivos, tirar dúvidas sobre tratamentos e acompanhar cada etapa do cuidado oftalmológico.</p>

        <p>A presença da Sempre Visão em Franca representa a chegada de uma <strong>referência em oftalmologia</strong> na cidade, proporcionando aos moradores acesso a exames, consultas e cirurgias de alta qualidade.</p>

        <p>A <strong>Sempre Visão</strong> em Franca, aberta desde <strong>13 de outubro de 2025</strong>, está pronta para cuidar da sua saúde ocular com excelência. Agende sua consulta e descubra como nossos tratamentos e nossa equipe especializada podem transformar sua visão e sua qualidade de vida.</p>

        <p><strong>Endereço:</strong> Rua General Telles, 1259 – Ao lado da Sempre Sorrindo, em frente ao terminal.</p>
    `
    },
    {
        title:
            'Sempre Visão realiza dezenas de cirurgias de catarata no primeiro mês de funcionamento — sem filas e com excelência',
        slug: 'sempre-visao-realiza-dezenas-de-cirurgias-de-catarata-no-primeiro-mes-de-funcionamento-sem-filas-e-com-excelencia',
        imageUrl:
            'sempre-visao-realiza-dezenas-de-cirurgias-de-catarata-no-primeiro-mes-de-funcionamento.JPG',
        description: `A clínica oftalmológica Sempre Visão, inaugurada há apenas um mês, já comemora um marco importante: dezenas de cirurgias de catarata foram realizadas com sucesso e, o melhor, sem filas de espera. A unidade, que já se destaca entre as principais referências em oftalmologia da região, tem como missão restaurar a visão e transformar vidas.
    Idealizada pelos oftalmologistas Dr. Raphael Brigagão e Dr. Breno Reis, a Sempre Visão nasceu com um propósito claro: oferecer atendimento humanizado, rápido e de qualidade, especialmente para quem enfrenta problemas como a catarata, uma das principais causas de cegueira reversível no mundo.
    “O nosso propósito é realizar o sonho de pessoas que têm dificuldade para enxergar e ajudá-las a terem suas visões restauradas”, explica Dr. Raphael.
    Com tecnologia de ponta, equipe especializada e estrutura pensada para o bem-estar dos pacientes, a clínica tem se destacado por agilizar o acesso à cirurgia de catarata, promovendo mais qualidade de vida a quem tanto precisa.`,
        content: `
        <p>
            A clínica oftalmológica Sempre Visão, inaugurada há apenas um mês, já comemora um marco importante: dezenas de cirurgias de catarata foram realizadas com sucesso e, o melhor, sem filas de espera. A unidade, que já se destaca entre as principais referências em oftalmologia da região, tem como missão restaurar a visão e transformar vidas.
        </p>
        <p>
            Idealizada pelos oftalmologistas Dr. Raphael Brigagão e Dr. Breno Reis, a Sempre Visão nasceu com um propósito claro: oferecer atendimento humanizado, rápido e de qualidade, especialmente para quem enfrenta problemas como a catarata, uma das principais causas de cegueira reversível no mundo.
        </p>
        <p>
            “O nosso propósito é realizar o sonho de pessoas que têm dificuldade para enxergar e ajudá-las a terem suas visões restauradas”, explica Dr. Raphael.
        </p>
        <p>
            Com tecnologia de ponta, equipe especializada e estrutura pensada para o bem-estar dos pacientes, a clínica tem se destacado por agilizar o acesso à cirurgia de catarata, promovendo mais qualidade de vida a quem tanto precisa.
        </p>
        <h2>
            Cirurgia de catarata: rápida, segura e acessível
        </h2>
        <p>
            A cirurgia de catarata é um procedimento seguro e eficaz, capaz de devolver a nitidez da visão em poucas horas. Na Sempre Visão, todo o processo — da consulta à cirurgia — é realizado com agilidade, garantindo um atendimento sem burocracia e com o cuidado que cada paciente merece.
        </p>
        <h2>
            Compromisso com a saúde ocular
        </h2>
        <p>
            Além da cirurgia de catarata, a clínica oferece uma gama completa de serviços oftalmológicos, reforçando seu compromisso com a saúde ocular da população.
        </p>
        <p>
            Se você ou alguém da sua família tem sofrido com visão turva, dificuldade para ler ou dirigir, agende uma avaliação. A catarata tem tratamento e a solução pode estar mais perto do que você imagina.
        </p>
        <strong>
            Agende sua consulta agora mesmo e descubra como é possível enxergar o mundo com clareza novamente!
        </strong>
        <ul>
            <li>📍 Sempre Visão – Ver é viver. E disso, a gente entende!</li>
            <li>📞 (16) 99262-7740</li>
            <li>🌐 <a href="https://semprevisao.com.br" target="_blank" rel="noopener noreferrer">www.semprevisao.com.br</a></li>
            <li>📍 Rua São Sebastião, 614, Centro, Ribeirão Preto, SP.</li>
        </ul>
    `
    },
    {
        title: 'Por que escolher a Sempre Visão para a sua cirurgia de catarata?',
        slug: 'por-que-escolher-a-sempre-visao-para-a-sua-cirurgia-de-catarata',
        imageUrl:
            'por-que-escolher-a-sempre-visao-para-a-sua-cirurgia-de-catarata.JPG',
        description:
            'A cirurgia de catarata é um dos procedimentos oftalmológicos mais seguros e eficazes para recuperar a visão. Na Sempre Visão, você encontra tecnologia de ponta, equipe médica especializada e um atendimento humanizado. Confira os diferenciais que tornam a Sempre Visão a melhor escolha para sua cirurgia de catarata.',
        content: `
        <p>
            A cirurgia de catarata é hoje um dos procedimentos oftalmológicos mais seguros, rápidos e eficazes para quem busca recuperar a visão com qualidade de vida. Na Sempre Visão, essa cirurgia é realizada com tecnologia de última geração, por uma equipe médica especializada e com total atenção ao bem-estar do paciente.
        </p>
        <p>
            Se você está procurando o melhor lugar para fazer sua cirurgia de catarata, conheça os diferenciais que tornam a Sempre Visão uma das clínicas mais recomendadas da região.
        </p>
        <h2>
            Benefícios exclusivos da cirurgia de catarata na Sempre Visão
        </h2>
        <ul>
            <li>
                <h3>✅ Agendamento sem filas e atendimento rápido</h3>
                <p>
                    Na Sempre Visão, você não precisa esperar meses para fazer sua cirurgia. Nosso sistema de agendamento é ágil, sem filas, e pensado para garantir <strong>rapidez no tratamento da catarata.</strong>
                </p>
            </li>
            <li>
                <h3>✅ Equipamentos de última geração</h3>
                <p>
                    Contamos com <strong>tecnologia de ponta em oftalmologia</strong>, que permite diagnósticos precisos e cirurgias mais seguras. Usamos técnicas modernas que reduzem riscos e aceleram a recuperação.
                </p>
            </li>
            <li>
                <h3>✅ Equipe médica experiente e especializada</h3>
                <p>
                    Nossos oftalmologistas, como a exemplo do Dr. Breno Reis, são reconhecidos por sua atuação na área de <strong>cirurgia de catarata</strong>, com centenas de procedimentos bem-sucedidos. Profissionais preparados para cuidar de você com excelência.
                </p>
            </li>
            <li>
                <h3>✅ Recuperação rápida e segura</h3>
                <p>
                    Graças às técnicas minimamente invasivas e ao acompanhamento pós-operatório personalizado, a recuperação é tranquila. Muitos pacientes relatam melhora significativa da visão já nas primeiras 24 horas após a cirurgia.
                </p>
            </li>
            <li>
                <h3>✅ Atendimento humanizado e ambiente acolhedor</h3>
                <p>
                    Mais do que tecnologia, oferecemos <strong>cuidado, atenção e empatia</strong>. Desde a recepção até o pós-operatório, nossa equipe está preparada para acolher você com respeito e carinho, tornando o processo mais leve e seguro.
                </p>
            </li>
        </ul>
        <h2>
            Cirurgia de catarata: qualidade de vida ao seu alcance
        </h2>
        <p>
            A catarata é uma das principais causas de perda de visão no Brasil, mas felizmente tem tratamento eficaz e acessível. Na Sempre Visão, unimos tecnologia, agilidade e cuidado para proporcionar a você ou a um familiar uma experiência positiva e transformadora.
        </p>
        <h2>Agende agora sua avaliação com um especialista</h2>
        <p>
            Não deixe que a catarata limite sua vida. Entre em contato com a Sempre Visão, faça uma avaliação com nossos oftalmologistas e descubra como é possível voltar a enxergar com clareza e segurança.
        </p>
        <ul>
            <li>📍 Sempre Visão – Ver é viver. E disso, a gente entende!</li>
            <li>📞 (16) 99262-7740</li>
            <li>🌐 <a href="https://semprevisao.com.br" target="_blank" rel="noopener noreferrer">www.semprevisao.com.br</a></li>
            <li>📍 Rua São Sebastião, 614, Centro, Ribeirão Preto, SP.</li>
            <li>🕐 Atendimento de segunda a sábado</li>
        </ul>
    `
    },
    {
        title:
            'Como saber a hora certa de operar a catarata? Especialistas da Sempre Visão explicam',
        slug: 'como-saber-a-hora-certa-de-operar-a-catarata-especialistas-da-sempre-visao-explicam',
        imageUrl: 'como-saber-a-hora-certa-de-operar-a-catarata.JPG',
        description:
            'A catarata é uma condição oftalmológica muito comum, especialmente após os 60 anos, e pode causar sérios prejuízos à qualidade de vida se não for tratada corretamente. Mas afinal, qual é o momento ideal para operar a catarata? A equipe médica da Sempre Visão responde essa e outras dúvidas frequentes sobre o assunto.',
        content: `
        <p>
            A catarata é uma condição oftalmológica muito comum, especialmente após os 60 anos, e pode causar sérios prejuízos à qualidade de vida se não for tratada corretamente. Mas afinal, <strong>qual é o momento ideal para operar a catarata?</strong> A equipe médica da Sempre Visão responde essa e outras dúvidas frequentes sobre o assunto.
        </p>
        <h2> O que é a catarata? </h2>
        <p>
            A catarata é a opacificação do cristalino — a lente natural do olho — que afeta diretamente a nitidez da visão. Ela se desenvolve lentamente e, em muitos casos, o paciente só percebe quando já há perda significativa da capacidade visual.
        </p>
        <p>
            Entre <strong>os principais sintomas da catarata</strong>, estão:
        </p>
        <ul>
            <li>⚫ Visão embaçada ou turva</li>
            <li>⚫ Sensibilidade à luz</li>
            <li>⚫ Dificuldade para ler ou dirigir, especialmente à noite</li>
            <li>⚫ Cores desbotadas</li>
            <li>⚫Troca frequente de óculos sem melhora</li>
        </ul>
        <h2>Quando é necessário fazer a cirurgia de catarata?</h2>
        <p>
            De acordo com os oftalmologistas da Sempre Visão, a cirurgia deve ser considerada assim que os sintomas começam a interferir nas atividades do dia a dia, como ler, caminhar com segurança ou realizar tarefas simples.
        </p>
        <p>
            “A cirurgia de catarata é indicada assim que o paciente percebe que a visão está prejudicando sua rotina. Quanto antes o tratamento for feito, melhores são os resultados”, explica o Dr. Breno.
        </p>
        <h2>
            Cirurgia moderna e segura com a Sempre Visão
        </h2>
        <p>
            A <strong>cirurgia de catarata</strong> realizada na Sempre Visão é feita com equipamentos modernos, técnicas minimamente invasivas e lentes intraoculares de alta qualidade. O procedimento é rápido, indolor e permite que o paciente retome suas atividades normalmente em poucos dias.
        </p>
        <ul>
            <p>Entre os <strong>diferenciais da cirurgia de catarata na Sempre Visão</strong>, estão:</p>
            <li>✅ Avaliação oftalmológica completa e personalizada</li>
            <li>✅ Agendamento sem burocracia e sem filas de espera</li>
            <li>✅ Ambiente acolhedor e atendimento humanizado</li>
            <li>✅ Equipe médica altamente qualificada</li>
            <li>✅ Acompanhamento pós-operatório próximo e atencioso</li>
        </ul>
        <h2>Catarata tem cura — e a solução está ao seu alcance</h2>
        <p>A catarata é uma das principais causas de cegueira reversível no mundo. Com a tecnologia disponível hoje, não é necessário esperar que a visão piore para buscar ajuda. Se você ou um familiar está enfrentando os sintomas, o melhor caminho é procurar uma clínica especializada em cirurgia de catarata, como a Sempre Visão.</p>
        <h2>Agende sua avaliação com os especialistas da Sempre Visão</h2>
        <p>
            Cuidar da visão é cuidar da sua autonomia, bem-estar e qualidade de vida. Entre em contato com a equipe da Sempre Visão, agende sua consulta e descubra como é possível voltar a enxergar o mundo com nitidez.
        </p>
        <ul>
            <li>📍 Sempre Visão – Ver é viver. E disso, a gente entende!</li>
            <li>📞 (16) 99262-7740</li>
            <li>🌐 <a href="https://semprevisao.com.br" target="_blank" rel="noopener noreferrer">www.semprevisao.com.br</a></li>
            <li>📍 Rua São Sebastião, 614, Centro, Ribeirão Preto, SP.</li>
            <li>🕐 Atendimento de segunda a sábado</li>
        </ul>
    `
    },
    {
        title:
            'Diagnóstico precoce da catarata é essencial para preservar a visão, alerta equipe da Sempre Visão',
        slug: 'diagnostico-precoce-da-catarata-e-essencial-para-preservar-a-visao-alerta-equipe-da-sempre-visao',
        imageUrl:
            'diagnostico-precoce-da-catarata-e-essencial-para-preservar-a-visao.JPG',
        description:
            'A catarata é uma condição oftalmológica silenciosa e progressiva, que pode levar à perda parcial ou total da visão se não for tratada a tempo. Por isso, os especialistas da Sempre Visão, clínica referência em cirurgia de catarata, alertam: o diagnóstico precoce é fundamental para garantir a eficácia do tratamento e preservar a qualidade de vida do paciente.',
        content: `
        <p>
            A catarata é uma condição oftalmológica silenciosa e progressiva, que pode levar à perda parcial ou total da visão se não for tratada a tempo. Por isso, os especialistas da Sempre Visão, clínica referência em cirurgia de catarata, alertam: o diagnóstico precoce é fundamental para garantir a eficácia do tratamento e preservar a qualidade de vida do paciente.    
        </p>
        <h2>
            Catarata: o que é e por que merece atenção?
        </h2>
        <p>A catarata acontece quando o cristalino (a lente natural do olho) se torna opaco, prejudicando a passagem da luz e tornando a visão cada vez mais turva. Ela pode surgir com o envelhecimento natural, mas também pode estar relacionada a traumas, uso de medicamentos ou até fatores congênitos.</p>
        <p>“O problema é que muitos pacientes só procuram ajuda quando a visão já está muito comprometida. Por isso, reforçamos a importância de fazer exames oftalmológicos regulares”, explica o Dr. Breno Reis, oftalmologista da Sempre Visão.</p>
        <h2>Como identificar os primeiros sinais da catarata?</h2>
        <p>Os sintomas iniciais da catarata podem ser sutis, mas quanto mais cedo forem identificados, maior a chance de realizar um <strong>tratamento eficaz e com rápida recuperação</strong>. Fique atento a sinais como:</p>
        <ul>
            <li>⚫ Visão embaçada ou “nublada”</li>
            <li>⚫ Maior sensibilidade à luz</li>
            <li>⚫ Dificuldade para dirigir à noite</li>
            <li>⚫ Trocas frequentes de óculos sem melhora</li>
            <li>⚫ Cores com aparência opaca</li>
        </ul>
        <h2>Sempre Visão oferece tecnologia avançada para diagnóstico e cirurgia de catarata</h2>
        <p>A Sempre Visão investe em equipamentos modernos que permitem diagnosticar precocemente a catarata e outras doenças oculares. Além disso, a clínica se destaca pela realização de cirurgias de catarata com tecnologia de ponta e sem filas de espera.</p>
        <ul>
            <strong>Diferenciais da cirurgia de catarata na Sempre Visão:</strong>
            <li><strong>✅ Avaliação oftalmológica completa e detalhada</strong></li>
            <li><strong>✅ Agendamento rápido e sem burocracia</strong></li>
            <li><strong>✅ Procedimento seguro, rápido e indolor</strong></li>
            <li><strong>✅ Recuperação tranquila e acompanhamento pós-operatório</strong></li>
            <li><strong>✅ Equipe médica especializada e atendimento acolhedor</strong></li>
        </ul>
        <h2>Quanto antes tratar, melhor o resultado</h2>
        <p>A cirurgia de catarata é um procedimento eficaz e com altíssimo índice de sucesso, especialmente quando realizado antes que a doença esteja em estágio avançado. Adiar o tratamento pode significar comprometer a visão de forma irreversível.</p>
        <h2>Agende sua consulta na Sempre Visão e veja o mundo com outros olhos</h2>
        <p>Se você tem mais de 50 anos ou está notando alterações na sua visão, não espere os sintomas piorarem. Faça uma avaliação com os especialistas da Sempre Visão e descubra se você precisa iniciar o tratamento para catarata.
        </p>
        <ul>
            <li>📍 Sempre Visão – Ver é viver. E disso, a gente entende!</li>
            <li>📞 (16) 99262-7740</li>
            <li>🌐 <a href="https://semprevisao.com.br" target="_blank" rel="noopener noreferrer">www.semprevisao.com.br</a></li>
            <li>📍 Rua São Sebastião, 614, Centro, Ribeirão Preto, SP.</li>
            <li>🕐 Atendimento de segunda a sábado</li>
        </ul>
    `
    },
    {
        title:
            'Cirurgia de catarata: descubra como funciona, quando fazer e onde realizar com segurança',
        slug: 'cirurgia-de-catarata-descubra-como-funciona-quando-fazer-e-onde-realizar-com-seguranca',
        imageUrl:
            'cirurgia-de-catarata-descubra-como-funciona-quando-fazer-e-onde-realizar-com-seguranca.JPG',
        description:
            'A cirurgia de catarata é um dos procedimentos mais realizados no Brasil e no mundo. Com o avanço da medicina oftalmológica, a cirurgia se tornou rápida, segura e extremamente eficaz para quem deseja recuperar a nitidez da visão e voltar a ter qualidade de vida.',
        content: `
        <p>
            A cirurgia de catarata é um dos procedimentos mais realizados no Brasil e no mundo. Com o avanço da medicina oftalmológica, a cirurgia se tornou rápida, segura e extremamente eficaz para quem deseja recuperar a nitidez da visão e voltar a ter qualidade de vida.
        </p>
        <p>
            Se você está procurando por <strong>cirurgia de catarata em Ribeirão Preto e região</strong>, continue lendo este conteúdo preparado pelos especialistas da Sempre Visão, clínica referência em saúde oftalmológica.
        </p>
        <h2>O que é catarata e por que ela afeta a visão?</h2>
        <p>
            A catarata é caracterizada pela opacificação do cristalino, a lente natural dos olhos. Essa alteração impede a passagem da luz e provoca visão embaçada, sensibilidade à luz e, em casos mais avançados, até cegueira reversível.
        </p>
        <p>
            Ela costuma surgir com o envelhecimento (catarata senil), mas também pode aparecer por traumas, diabetes, uso de medicamentos ou até de forma congênita.
        </p>
        <h2>Quais são os principais sintomas da catarata?</h2>
        <ul>
            <p>Identificar os sinais da catarata precocemente é essencial para iniciar o tratamento no momento certo. Os principais sintomas incluem:</p>
            <li>⚫ Visão embaçada ou nublada</li>
            <li>⚫ Dificuldade para ler ou dirigir à noite</li>
            <li>⚫ Sensação de "película" nos olhos</li>
            <li>⚫ Cores com aparência amarelada ou desbotada</li>
            <li>⚫ Troca frequente de óculos sem melhora significativa</li>
        </ul>
        <p>Se você percebe algum desses sintomas, agende uma avaliação com um <strong>oftalmologista especialista em catarata</strong> o quanto antes.</p>
        <h2>Como funciona a cirurgia de catarata?</h2>
        <p>A cirurgia de catarata é um procedimento simples e rápido. Ela é realizada com anestesia local e consiste na substituição do cristalino opaco por uma lente intraocular, que permite a recuperação da visão com mais nitidez e estabilidade.</p>
        <p>O procedimento dura poucos minutos, não requer internação e, na maioria dos casos, a recuperação visual começa nas primeiras 24 horas.</p>
        <h2>Por que fazer sua cirurgia de catarata na Sempre Visão?</h2>
        <p>Na Sempre Visão, você encontra um centro especializado em cirurgia ocular com estrutura completa, profissionais experientes e o que há de mais moderno em tecnologia oftalmológica.</p>
        <ul>
            <strong>Nossos diferenciais:</strong>
            <li><strong>✅ Agendamento sem filas e com rapidez</strong></li>
            <li><strong>✅ Tecnologia de ponta</strong> para diagnósticos e cirurgias</li>
            <li><strong>✅ Médicos oftalmologistas com ampla experiência</strong></li>
            <li><strong>✅ Cirurgia segura e recuperação tranquila</strong></li>
            <li><strong>✅ Ambiente acolhedor e atendimento humanizado</strong></li>
            <p>“Aqui na Sempre Visão, tratamos cada paciente como único. Nosso objetivo é devolver a visão e transformar vidas com segurança e carinho”, afirma o Dr. Raphael.</p>
        </ul>
        <h2>Quem pode fazer a cirurgia de catarata?</h2>
        <p>A cirurgia é indicada para qualquer pessoa diagnosticada com catarata que apresente prejuízo na visão e na qualidade de vida. A decisão sobre o melhor momento para operar é feita após avaliação oftalmológica, exames e análise do histórico de saúde do paciente.</p>
        <h2>Agende agora sua avaliação e recupere sua visão com segurança</h2>
        <p>Não espere sua visão piorar para buscar ajuda. Agende hoje mesmo sua <strong>consulta com um especialista em cirurgia de catarata</strong> e volte a enxergar com clareza.
        </p>
        <ul>
            <li>📍 <strong>Sempre Visão – Clínica referência em cirurgia de catarata em Ribeirão Preto.</strong></li>
            <li>📞 (16) 99262-7740</li>
            <li>🌐 <a href="https://semprevisao.com.br" target="_blank" rel="noopener noreferrer">www.semprevisao.com.br</a></li>
            <li>📍 Rua São Sebastião, 614, Centro, Ribeirão Preto, SP.</li>
            <li>🕐 Atendimento de segunda a sábado</li>
        </ul>
    `
    }
];
