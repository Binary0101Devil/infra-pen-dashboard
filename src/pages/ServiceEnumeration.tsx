
import React from "react";
import Layout from "@/components/Layout";
import DashboardHeader from "@/components/DashboardHeader";
import { Terminal, Server, Shield } from "lucide-react";

const ServiceEnumeration = () => {
  return (
    <Layout>
      <DashboardHeader />
      <div className="container mx-auto px-4 py-8">
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
          <h1 className="text-2xl font-bold text-cyan-400 mb-4">
            Comprehensive Service Enumeration Guide
          </h1>
          
          <div className="mb-6 bg-black p-4 rounded-md border border-gray-700">
            <div className="flex items-center mb-2">
              <Terminal className="h-5 w-5 text-cyan-500 mr-2" />
              <h2 className="text-lg font-mono text-white">Service Enumeration Overview</h2>
            </div>
            <p className="text-gray-300 mb-4">
              Service enumeration is the foundational phase in any penetration test, enabling the discovery of active services, 
              exposed ports, and detailed protocol behavior. Each service represents a potential attack surface—be it due to 
              misconfiguration, weak credentials, outdated versions, or protocol-specific flaws.
            </p>
            <p className="text-gray-300">
              By probing these services with targeted tools and scripts, testers can extract banners, enumerate users, 
              fingerprint versions, and often uncover vulnerabilities ripe for exploitation.
            </p>
          </div>
          
          {/* Services */}
          <div className="space-y-8">
            {/* FTP */}
            <div className="bg-gray-800 rounded-md p-4 border border-gray-700">
              <div className="flex items-center border-b border-gray-700 pb-2 mb-3">
                <Server className="h-5 w-5 text-red-400 mr-2" />
                <h3 className="text-xl font-mono text-white">1. FTP (21)</h3>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-1">Tools:</h4>
                  <p className="text-gray-300 text-sm">Nmap, Hydra, ftp, Metasploit, NSE Scripts, Telnet</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-1">Enumeration:</h4>
                  <pre className="bg-black p-2 rounded text-xs text-green-400 font-mono overflow-x-auto">
                    nmap -p 21 --script ftp-anon,ftp-bounce,ftp-syst &lt;target&gt;{"\n"}
                    ftp &lt;target&gt;{"\n"}
                    telnet &lt;target&gt; 21
                  </pre>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-1">Brute Force:</h4>
                  <pre className="bg-black p-2 rounded text-xs text-green-400 font-mono overflow-x-auto">
                    hydra -L users.txt -P pass.txt ftp://&lt;target&gt;
                  </pre>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-1">Metasploit:</h4>
                  <pre className="bg-black p-2 rounded text-xs text-green-400 font-mono overflow-x-auto">
                    use auxiliary/scanner/ftp/ftp_login{"\n"}
                    set RHOSTS &lt;target&gt;{"\n"}
                    set USER_FILE users.txt{"\n"}
                    set PASS_FILE pass.txt{"\n"}
                    run
                  </pre>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-1">Attacks:</h4>
                  <ul className="text-gray-300 text-sm list-disc list-inside space-y-1">
                    <li>Anonymous login</li>
                    <li>Directory traversal</li>
                    <li>Upload shell via writable directories</li>
                    <li>FTP bounce</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* SSH */}
            <div className="bg-gray-800 rounded-md p-4 border border-gray-700">
              <div className="flex items-center border-b border-gray-700 pb-2 mb-3">
                <Server className="h-5 w-5 text-red-400 mr-2" />
                <h3 className="text-xl font-mono text-white">2. SSH (22)</h3>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-1">Tools:</h4>
                  <p className="text-gray-300 text-sm">Hydra, Nmap, Metasploit, ssh-audit</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-1">Enumeration:</h4>
                  <pre className="bg-black p-2 rounded text-xs text-green-400 font-mono overflow-x-auto">
                    nmap -p 22 --script ssh2-enum-algos,ssh-hostkey &lt;target&gt;{"\n"}
                    ssh &lt;user&gt;@&lt;target&gt;
                  </pre>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-1">Brute Force:</h4>
                  <pre className="bg-black p-2 rounded text-xs text-green-400 font-mono overflow-x-auto">
                    hydra -L users.txt -P pass.txt ssh://&lt;target&gt;
                  </pre>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-1">Metasploit:</h4>
                  <pre className="bg-black p-2 rounded text-xs text-green-400 font-mono overflow-x-auto">
                    use auxiliary/scanner/ssh/ssh_login{"\n"}
                    set RHOSTS &lt;target&gt;{"\n"}
                    set USER_FILE users.txt{"\n"}
                    set PASS_FILE pass.txt{"\n"}
                    run
                  </pre>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-1">Attacks:</h4>
                  <ul className="text-gray-300 text-sm list-disc list-inside space-y-1">
                    <li>Weak credential brute-force</li>
                    <li>Key reuse/pivoting</li>
                    <li>Hijack SSH agent</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Telnet */}
            <div className="bg-gray-800 rounded-md p-4 border border-gray-700">
              <div className="flex items-center border-b border-gray-700 pb-2 mb-3">
                <Server className="h-5 w-5 text-red-400 mr-2" />
                <h3 className="text-xl font-mono text-white">3. Telnet (23)</h3>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-1">Tools:</h4>
                  <p className="text-gray-300 text-sm">Hydra, Medusa, Telnet</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-1">Enumeration:</h4>
                  <pre className="bg-black p-2 rounded text-xs text-green-400 font-mono overflow-x-auto">
                    telnet &lt;target&gt;{"\n"}
                    nmap -p 23 --script telnet-encryption &lt;target&gt;
                  </pre>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-1">Brute Force:</h4>
                  <pre className="bg-black p-2 rounded text-xs text-green-400 font-mono overflow-x-auto">
                    hydra -L users.txt -P pass.txt telnet://&lt;target&gt;
                  </pre>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-1">Metasploit:</h4>
                  <pre className="bg-black p-2 rounded text-xs text-green-400 font-mono overflow-x-auto">
                    use auxiliary/scanner/telnet/telnet_login{"\n"}
                    set RHOSTS &lt;target&gt;{"\n"}
                    set USER_FILE users.txt{"\n"}
                    set PASS_FILE pass.txt{"\n"}
                    run
                  </pre>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-1">Attacks:</h4>
                  <ul className="text-gray-300 text-sm list-disc list-inside space-y-1">
                    <li>Credential sniffing</li>
                    <li>Auth bypass</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* More services... */}
            {/* You can view the full list of services in the document and add them as needed */}
            
            <div className="flex items-center border-t border-gray-700 pt-4 mt-6">
              <Shield className="h-5 w-5 text-green-500 mr-2" />
              <p className="text-green-400 text-sm">
                This guide provides enumeration, brute-force, and exploitation techniques for common services.
                For more details on each service, see the corresponding technique page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServiceEnumeration;
