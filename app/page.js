import TrigerSubject from "@/app/components/triger-subject";
import CodeBlock from "@/app/components/code-block";

export default function Home() {
  return (
      <main>
        <div className="tips-container">
            <div className="tips-header">
                <h1>Linux Tips - TR</h1>
            </div>
            <div className="tips-body">
                <div className="insides">
                    <h2></h2>
                </div>
                <div className="tips-area">
                    <TrigerSubject triger="linux-uygulamanizi-baslat-menusune-eklemek">
                        Uygulamanızı Başlat menüsüne eklemek için yapmanız gerekenler
                    </TrigerSubject>
                    <div className="insightful">
                        <h4 className="insightful-title">WebStorm u başlat menüsüne eklemek için bir .desktop dosyası oluşturmanız gerekecek. İşte adımlar</h4>
                        <div className="insightful-list">
                            <ol key="insightful-list-start-menu-ol-0">
                                <li key="insightful-list-start-menu-tips-ol-li-0">
                                <span className="insightful-description">
                                    Herhangi bir metin düzenleyiciyi (örneğin xed, gedit, nano veya vim) kullanarak yeni bir metin dosyası oluşturun. Örneğin;
                                </span>
                                    <CodeBlock id="code_block0" lang="bash" copy={true}>xed ~/webstorm.desktop</CodeBlock>
                                </li>
                                <li key="insightful-list-start-menu-tips-ol-li-1">
                                <span className="insightful-description">
                                    Aşağıdaki içeriği .desktop dosyasına yapıştırın
                                </span>
                                    <CodeBlock id="code_block1" lang="bash" copy={true}>
                                        [Desktop Entry]
                                        Version=1.0
                                        Type=Application
                                        Name=WebStorm
                                        Icon=/opt/WebStorm/bin/webstorm.png
                                        Exec=/opt/WebStorm/bin/webstorm.sh
                                        Comment=The smartest JavaScript IDE
                                        Categories=Development;IDE;
                                        Terminal=false
                                        StartupWMClass=jetbrains-webstorm
                                    </CodeBlock>
                                </li>
                                <li key="insightful-list-start-menu-tips-ol-li-2">
                                <span className="insightful-description">
                                    Dosyayı kaydedin ve kapatın. (CTRL+S, Nano kullanıyorsanız Ctrl+X, ardından Y ve Enter tuşlarına basın.)
                                </span>
                                </li>
                                <li key="insightful-list-start-menu-tips-ol-li-3">
                                <span className="insightful-description">
                                    Oluşturduğunuz .desktop dosyasını /usr/share/applications/ dizinine taşıyın:
                                </span>
                                    <CodeBlock id="code_block2" lang="bash" copy={true}>sudo mv ~/webstorm.desktop /usr/share/applications/</CodeBlock>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="tips-area">
                    <TrigerSubject triger="linux-uygulamasini-terminal-komutlarina-eklemek">
                        Terminale Eklemek için yapmanız gerekenler
                    </TrigerSubject>
                    <div className="insightful">
                        <h4 className="insightful-title">WebStormu terminal komutu olarak eklemek için aşağıdaki adımları sırasıyla takip ediniz.</h4>
                        <div className="insightful-list">
                            <ol key="insightful-list-start-menu-ol-0">
                                <li key="insightful-list-start-menu-tips-ol-li-0">
                                <span className="insightful-description">
                                    Evet, eğer WebStormun çalıştırılabilir bir dosyasınız varsa ve bu dosya sistem yolunda bulunuyorsa, terminalden de çalıştırabilirsiniz. Örneğin, /opt/WebStorm/bin/webstorm.sh dosyasını çalıştırmak için terminalde aşağıdaki komutu kullanabilirsiniz:
                                </span>
                                    <CodeBlock id="code_block3" lang="bash" copy={true}>/opt/WebStorm/bin/webstorm.sh</CodeBlock>
                                </li>
                                <li key="insightful-list-start-menu-tips-ol-li-1">
                                <span className="insightful-description">
                                    Ancak, her seferinde tam dosya yolunu yazmak yerine sadece webstorm gibi bir kısaltma kullanmak istiyorsanız, sistem yolunuza webstorm gibi bir simge (sembolik link) ekleyebilirsiniz. Örneğin:
                                </span>
                                    <CodeBlock id="code_block4" lang="bash" copy={true}>sudo ln -s /opt/WebStorm/bin/webstorm.sh /usr/local/bin/webstorm</CodeBlock>
                                </li>
                                <li key="insightful-list-start-menu-tips-ol-li-2">
                                <span className="insightful-description">
                                    Bu komut, /usr/local/bin/ dizininde webstorm adında bir sembolik bağlantı oluşturur. Böylece, terminalden webstorm komutunu kullanarak WebStormu başlatabilirsiniz. Bu adımdan sonra, terminalde sadece webstorm yazarak WebStormu başlatabilirsiniz:
                                </span>
                                    <CodeBlock id="code_block5" lang="bash" copy={true}>webstorm</CodeBlock>
                                </li>
                                <li key="insightful-list-start-menu-tips-ol-li-3">
                                <span className="insightful-description">
                                    Ancak, bu işlemi gerçekleştirmeden önce, /usr/local/bin/ dizininde webstorm adında başka bir dosyanın olmadığından emin olun. Ayrıca, webstorm.sh dosyasının doğru çalıştırılabilir olduğundan ve çalışma iznine sahip olduğundan emin olun.
                                </span>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tips-footer">
                <h2>this site was created by <a href="https://ahmetcanisik.com" target="_blank">ahmetcanisik.com</a></h2>
            </div>
        </div>
      </main>
  );
}