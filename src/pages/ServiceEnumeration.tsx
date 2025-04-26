
import React from "react";
import Layout from "@/components/Layout";
import { Server, Terminal, Shield } from "lucide-react";

const ServiceEnumeration = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-8 bg-black/40 p-6 border border-cyan-900/30 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <Server className="h-8 w-8 text-cyan-400 mr-3" />
            <h1 className="text-2xl font-bold text-white">Comprehensive Penetration Testing Guide: Service Enumeration</h1>
          </div>
          
          <div className="p-4 bg-black/60 rounded-md border border-gray-800 mb-6">
            <h2 className="flex items-center text-xl font-mono text-cyan-400 mb-4">
              <Terminal className="h-5 w-5 mr-2" /> 🧭 Overview
            </h2>
            <p className="text-gray-300 mb-4">
              Service enumeration is the foundational phase in any penetration test, enabling the discovery of active services, exposed ports, and detailed protocol behavior. Each service represents a potential attack surface—be it due to misconfiguration, weak credentials, outdated versions, or protocol-specific flaws. By probing these services with targeted tools and scripts, testers can extract banners, enumerate users, fingerprint versions, and often uncover vulnerabilities ripe for exploitation.
            </p>
            <p className="text-gray-300 mb-4">
              This guide offers a practical, no-fluff reference for enumerating and attacking commonly exposed services across networks. Each section breaks down:
            </p>
            <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-2">
              <li>The tools best suited for enumeration</li>
              <li>Step-by-step recon and enumeration commands</li>
              <li>Exploitation techniques (basic to advanced)</li>
              <li>Metasploit modules and brute-force methods</li>
              <li>Defensive strategies to harden the service</li>
            </ul>
            <p className="text-gray-300">
              Whether you're performing red teaming, vulnerability assessment, or building defensive detection logic, this guide is built to be your go-to reference for real-world offensive operations.
            </p>
          </div>

          {/* FTP Section */}
          <div className="p-4 bg-black/60 rounded-md border border-gray-800 mb-6">
            <h2 className="flex items-center text-xl font-mono text-cyan-400 mb-4">
              <Shield className="h-5 w-5 mr-2" /> 1. FTP (21)
            </h2>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Tools:</p>
              <p className="text-gray-300">Nmap, Hydra, ftp, Metasploit, NSE Scripts, Telnet</p>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Enumeration:</p>
              <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  nmap -p 21 --script ftp-anon,ftp-bounce,ftp-syst &lt;target&gt;<br />
                  ftp &lt;target&gt;<br />
                  telnet &lt;target&gt; 21
                </code>
              </pre>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Brute Force:</p>
              <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  hydra -L users.txt -P pass.txt ftp://&lt;target&gt;
                </code>
              </pre>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Metasploit:</p>
              <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  use auxiliary/scanner/ftp/ftp_login<br />
                  set RHOSTS &lt;target&gt;<br />
                  set USER_FILE users.txt<br />
                  set PASS_FILE pass.txt<br />
                  run
                </code>
              </pre>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Attacks:</p>
              <ul className="list-disc pl-6 text-gray-300">
                <li>Anonymous login</li>
                <li>Directory traversal</li>
                <li>Upload shell via writable directories</li>
                <li>FTP bounce</li>
              </ul>
            </div>
          </div>

          {/* SSH Section */}
          <div className="p-4 bg-black/60 rounded-md border border-gray-800 mb-6">
            <h2 className="flex items-center text-xl font-mono text-cyan-400 mb-4">
              <Shield className="h-5 w-5 mr-2" /> 2. SSH (22)
            </h2>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Tools:</p>
              <p className="text-gray-300">Hydra, Nmap, Metasploit, ssh-audit</p>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Enumeration:</p>
              <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  nmap -p 22 --script ssh2-enum-algos,ssh-hostkey &lt;target&gt;<br />
                  ssh &lt;user&gt;@&lt;target&gt;
                </code>
              </pre>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Brute Force:</p>
              <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  hydra -L users.txt -P pass.txt ssh://&lt;target&gt;
                </code>
              </pre>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Metasploit:</p>
              <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  use auxiliary/scanner/ssh/ssh_login<br />
                  set RHOSTS &lt;target&gt;<br />
                  set USER_FILE users.txt<br />
                  set PASS_FILE pass.txt<br />
                  run
                </code>
              </pre>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Attacks:</p>
              <ul className="list-disc pl-6 text-gray-300">
                <li>Weak credential brute-force</li>
                <li>Key reuse/pivoting</li>
                <li>Hijack SSH agent</li>
              </ul>
            </div>
          </div>

          {/* Telnet Section */}
          <div className="p-4 bg-black/60 rounded-md border border-gray-800 mb-6">
            <h2 className="flex items-center text-xl font-mono text-cyan-400 mb-4">
              <Shield className="h-5 w-5 mr-2" /> 3. Telnet (23)
            </h2>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Tools:</p>
              <p className="text-gray-300">Hydra, Medusa, Telnet</p>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Enumeration:</p>
              <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  telnet &lt;target&gt;<br />
                  nmap -p 23 --script telnet-encryption &lt;target&gt;
                </code>
              </pre>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Brute Force:</p>
              <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  hydra -L users.txt -P pass.txt telnet://&lt;target&gt;
                </code>
              </pre>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Metasploit:</p>
              <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  use auxiliary/scanner/telnet/telnet_login<br />
                  set RHOSTS &lt;target&gt;<br />
                  set USER_FILE users.txt<br />
                  set PASS_FILE pass.txt<br />
                  run
                </code>
              </pre>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Attacks:</p>
              <ul className="list-disc pl-6 text-gray-300">
                <li>Credential sniffing</li>
                <li>Auth bypass</li>
              </ul>
            </div>
          </div>

          {/* SMTP Section */}
          <div className="p-4 bg-black/60 rounded-md border border-gray-800 mb-6">
            <h2 className="flex items-center text-xl font-mono text-cyan-400 mb-4">
              <Shield className="h-5 w-5 mr-2" /> 4. SMTP (25/587/465)
            </h2>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Tools:</p>
              <p className="text-gray-300">smtp-user-enum, Nmap, Telnet, Metasploit</p>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Enumeration:</p>
              <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  smtp-user-enum -M VRFY -U users.txt -t &lt;target&gt;<br />
                  telnet &lt;target&gt; 25
                </code>
              </pre>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Brute Force:</p>
              <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  hydra -S -s 25 -L users.txt -P passwords.txt smtp://&lt;target&gt;
                </code>
              </pre>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Metasploit:</p>
              <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  use auxiliary/scanner/smtp/smtp_login<br />
                  set RHOSTS &lt;target&gt;<br />
                  set USER_FILE users.txt<br />
                  set PASS_FILE pass.txt<br />
                  run
                </code>
              </pre>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Attacks:</p>
              <ul className="list-disc pl-6 text-gray-300">
                <li>VRFY/EXPN user enum</li>
                <li>Spoofing, relay abuse</li>
              </ul>
            </div>
          </div>

          {/* DNS Section */}
          <div className="p-4 bg-black/60 rounded-md border border-gray-800 mb-6">
            <h2 className="flex items-center text-xl font-mono text-cyan-400 mb-4">
              <Shield className="h-5 w-5 mr-2" /> 5. DNS (53)
            </h2>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Tools:</p>
              <p className="text-gray-300">dig, dnsrecon, DNSenum</p>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Enumeration:</p>
              <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  dig axfr @&lt;target&gt; domain.com<br />
                  dnsrecon -d domain.com -t axfr
                </code>
              </pre>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Attacks:</p>
              <ul className="list-disc pl-6 text-gray-300">
                <li>Zone transfer</li>
                <li>Subdomain brute force</li>
                <li>DNS tunneling</li>
              </ul>
            </div>
          </div>

          {/* HTTP/HTTPS Section */}
          <div className="p-4 bg-black/60 rounded-md border border-gray-800 mb-6">
            <h2 className="flex items-center text-xl font-mono text-cyan-400 mb-4">
              <Shield className="h-5 w-5 mr-2" /> 6. HTTP/HTTPS (80/443)
            </h2>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Tools:</p>
              <p className="text-gray-300">Nikto, Gobuster, Burp Suite, Metasploit</p>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Enumeration:</p>
              <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  whatweb http://&lt;target&gt;<br />
                  gobuster dir -u http://&lt;target&gt; -w wordlist.txt
                </code>
              </pre>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Brute Force:</p>
              <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  hydra -L users.txt -P passwords.txt http-get://&lt;target&gt;
                </code>
              </pre>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Metasploit:</p>
              <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  use auxiliary/scanner/http/http_login<br />
                  set RHOSTS &lt;target&gt;<br />
                  set USER_FILE users.txt<br />
                  set PASS_FILE pass.txt<br />
                  run
                </code>
              </pre>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Attacks:</p>
              <ul className="list-disc pl-6 text-gray-300">
                <li>LFI/RFI, SQLi, XSS, SSRF, etc.</li>
                <li>Shell upload bypass</li>
              </ul>
            </div>
          </div>

          {/* SMB Section */}
          <div className="p-4 bg-black/60 rounded-md border border-gray-800 mb-6">
            <h2 className="flex items-center text-xl font-mono text-cyan-400 mb-4">
              <Shield className="h-5 w-5 mr-2" /> 7. SMB (139/445)
            </h2>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Tools:</p>
              <p className="text-gray-300">enum4linux, CrackMapExec, Metasploit</p>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Enumeration:</p>
              <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  enum4linux -a &lt;target&gt;<br />
                  smbclient -L //&lt;target&gt;/ -N
                </code>
              </pre>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Brute Force:</p>
              <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  hydra -L users.txt -P pass.txt smb://&lt;target&gt;
                </code>
              </pre>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Metasploit:</p>
              <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  use auxiliary/scanner/smb/smb_login<br />
                  set RHOSTS &lt;target&gt;<br />
                  set USER_FILE users.txt<br />
                  set PASS_FILE pass.txt<br />
                  run
                </code>
              </pre>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Attacks:</p>
              <ul className="list-disc pl-6 text-gray-300">
                <li>Null sessions, relay attacks</li>
                <li>EternalBlue, psexec</li>
              </ul>
            </div>
          </div>

          {/* Add the rest of the services below */}
          {/* LDAP Section */}
          <div className="p-4 bg-black/60 rounded-md border border-gray-800 mb-6">
            <h2 className="flex items-center text-xl font-mono text-cyan-400 mb-4">
              <Shield className="h-5 w-5 mr-2" /> 8. LDAP (389)
            </h2>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Tools:</p>
              <p className="text-gray-300">ldapsearch, CrackMapExec</p>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Enumeration:</p>
              <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  ldapsearch -x -H ldap://&lt;target&gt; -b "dc=domain,dc=com"
                </code>
              </pre>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Brute Force:</p>
              <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  hydra -L users.txt -P pass.txt ldap2://&lt;target&gt;
                </code>
              </pre>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Metasploit:</p>
              <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  use auxiliary/scanner/ldap/ldap_login<br />
                  set RHOSTS &lt;target&gt;<br />
                  set USER_FILE users.txt<br />
                  set PASS_FILE pass.txt<br />
                  run
                </code>
              </pre>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Attacks:</p>
              <ul className="list-disc pl-6 text-gray-300">
                <li>Bind bypass, enum users</li>
                <li>Relay to LDAP</li>
              </ul>
            </div>
          </div>

          {/* Kerberos Section */}
          <div className="p-4 bg-black/60 rounded-md border border-gray-800 mb-6">
            <h2 className="flex items-center text-xl font-mono text-cyan-400 mb-4">
              <Shield className="h-5 w-5 mr-2" /> 9. Kerberos (88)
            </h2>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Tools:</p>
              <p className="text-gray-300">impacket, Rubeus, kerbrute</p>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Enumeration:</p>
              <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  GetUserSPNs.py domain/user:pass@dc<br />
                  GetNPUsers.py domain.local/ -usersfile users.txt -no-pass
                </code>
              </pre>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Brute Force:</p>
              <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  kerbrute bruteuser -d domain.com --dc &lt;ip&gt; users.txt
                </code>
              </pre>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Attacks:</p>
              <ul className="list-disc pl-6 text-gray-300">
                <li>AS-REP, SPN roasting</li>
                <li>Golden/Silver ticket</li>
              </ul>
            </div>
          </div>

          {/* MSSQL Section */}
          <div className="p-4 bg-black/60 rounded-md border border-gray-800 mb-6">
            <h2 className="flex items-center text-xl font-mono text-cyan-400 mb-4">
              <Shield className="h-5 w-5 mr-2" /> 10. MSSQL (1433)
            </h2>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Tools:</p>
              <p className="text-gray-300">sqsh, Metasploit, CrackMapExec</p>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Enumeration:</p>
              <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  sqsh -S &lt;target&gt; -U sa
                </code>
              </pre>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Brute Force:</p>
              <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  hydra -L users.txt -P pass.txt mssql://&lt;target&gt;
                </code>
              </pre>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Metasploit:</p>
              <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  use auxiliary/scanner/mssql/mssql_login<br />
                  set RHOSTS &lt;target&gt;<br />
                  set USER_FILE users.txt<br />
                  set PASS_FILE pass.txt<br />
                  run
                </code>
              </pre>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Attacks:</p>
              <ul className="list-disc pl-6 text-gray-300">
                <li>xp_cmdshell abuse</li>
                <li>Linked servers</li>
              </ul>
            </div>
          </div>

          {/* MySQL Section */}
          <div className="p-4 bg-black/60 rounded-md border border-gray-800 mb-6">
            <h2 className="flex items-center text-xl font-mono text-cyan-400 mb-4">
              <Shield className="h-5 w-5 mr-2" /> 11. MySQL (3306)
            </h2>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Tools:</p>
              <p className="text-gray-300">mysql, Metasploit</p>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Enumeration:</p>
              <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  mysql -h &lt;target&gt; -u root -p
                </code>
              </pre>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Brute Force:</p>
              <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  hydra -L users.txt -P pass.txt mysql://&lt;target&gt;
                </code>
              </pre>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Metasploit:</p>
              <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  use auxiliary/scanner/mysql/mysql_login<br />
                  set RHOSTS &lt;target&gt;<br />
                  set USER_FILE users.txt<br />
                  set PASS_FILE pass.txt<br />
                  run
                </code>
              </pre>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Attacks:</p>
              <ul className="list-disc pl-6 text-gray-300">
                <li>File read/write with LOAD_FILE/OUTFILE</li>
                <li>Upload UDF for RCE</li>
              </ul>
            </div>
          </div>

          {/* RDP Section */}
          <div className="p-4 bg-black/60 rounded-md border border-gray-800 mb-6">
            <h2 className="flex items-center text-xl font-mono text-cyan-400 mb-4">
              <Shield className="h-5 w-5 mr-2" /> 12. RDP (3389)
            </h2>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Tools:</p>
              <p className="text-gray-300">xfreerdp, Nmap, Hydra</p>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Enumeration:</p>
              <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  nmap -p 3389 --script rdp-ntlm-info &lt;target&gt;
                </code>
              </pre>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Brute Force:</p>
              <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  hydra -L users.txt -P pass.txt rdp://&lt;target&gt;
                </code>
              </pre>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Metasploit:</p>
              <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  use auxiliary/scanner/rdp/rdp_login<br />
                  set RHOSTS &lt;target&gt;<br />
                  set USER_FILE users.txt<br />
                  set PASS_FILE pass.txt<br />
                  run
                </code>
              </pre>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Attacks:</p>
              <ul className="list-disc pl-6 text-gray-300">
                <li>BlueKeep</li>
                <li>Credential stuffing</li>
              </ul>
            </div>
          </div>

          {/* VNC Section */}
          <div className="p-4 bg-black/60 rounded-md border border-gray-800 mb-6">
            <h2 className="flex items-center text-xl font-mono text-cyan-400 mb-4">
              <Shield className="h-5 w-5 mr-2" /> 13. VNC (5900)
            </h2>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Tools:</p>
              <p className="text-gray-300">Nmap, VNC Viewer, Hydra</p>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Enumeration:</p>
              <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  nmap -p 5900 --script vnc-info &lt;target&gt;
                </code>
              </pre>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Brute Force:</p>
              <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  hydra -P passwords.txt -s 5900 &lt;target&gt; vnc
                </code>
              </pre>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Metasploit:</p>
              <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  use auxiliary/scanner/vnc/vnc_login<br />
                  set RHOSTS &lt;target&gt;<br />
                  set PASS_FILE passwords.txt<br />
                  run
                </code>
              </pre>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Attacks:</p>
              <ul className="list-disc pl-6 text-gray-300">
                <li>Session hijacking</li>
                <li>Screen capture with creds</li>
              </ul>
            </div>
          </div>

          {/* SNMP Section */}
          <div className="p-4 bg-black/60 rounded-md border border-gray-800 mb-6">
            <h2 className="flex items-center text-xl font-mono text-cyan-400 mb-4">
              <Shield className="h-5 w-5 mr-2" /> 14. SNMP (161)
            </h2>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Tools:</p>
              <p className="text-gray-300">snmpwalk, onesixtyone</p>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Enumeration:</p>
              <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  snmpwalk -v2c -c public &lt;target&gt;
                </code>
              </pre>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Attacks:</p>
              <ul className="list-disc pl-6 text-gray-300">
                <li>Data exfil</li>
                <li>Remote config manipulation</li>
              </ul>
            </div>
          </div>

          {/* NFS Section */}
          <div className="p-4 bg-black/60 rounded-md border border-gray-800 mb-6">
            <h2 className="flex items-center text-xl font-mono text-cyan-400 mb-4">
              <Shield className="h-5 w-5 mr-2" /> 15. NFS (2049)
            </h2>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Tools:</p>
              <p className="text-gray-300">showmount, mount</p>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Enumeration:</p>
              <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  showmount -e &lt;target&gt;
                </code>
              </pre>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Attacks:</p>
              <ul className="list-disc pl-6 text-gray-300">
                <li>UID spoofing</li>
                <li>Remote read/write</li>
              </ul>
            </div>
          </div>

          {/* RPC Section */}
          <div className="p-4 bg-black/60 rounded-md border border-gray-800 mb-6">
            <h2 className="flex items-center text-xl font-mono text-cyan-400 mb-4">
              <Shield className="h-5 w-5 mr-2" /> 16. RPC (111)
            </h2>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Tools:</p>
              <p className="text-gray-300">rpcinfo</p>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Enumeration:</p>
              <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  rpcinfo -p &lt;target&gt;
                </code>
              </pre>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Attacks:</p>
              <ul className="list-disc pl-6 text-gray-300">
                <li>Relay NFS</li>
                <li>Misconfigured services</li>
              </ul>
            </div>
          </div>

          {/* WinRM Section */}
          <div className="p-4 bg-black/60 rounded-md border border-gray-800 mb-6">
            <h2 className="flex items-center text-xl font-mono text-cyan-400 mb-4">
              <Shield className="h-5 w-5 mr-2" /> 17. WinRM (5985/5986)
            </h2>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Tools:</p>
              <p className="text-gray-300">Evil-WinRM, CrackMapExec</p>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Enumeration:</p>
              <pre className="bg-gray-900 p-3 rounded-md overflow-x-auto">
                <code className="text-sm text-green-400 font-mono">
                  crackmapexec winrm &lt;target&gt; -u users.txt -p passwords.txt
                </code>
              </pre>
            </div>
            <div className="mb-4">
              <p className="text-cyan-300 font-semibold mb-1">Attacks:</p>
              <ul className="list-disc pl-6 text-gray-300">
                <li>RCE via Evil-WinRM</li>
                <li>Post-exploitation enumeration</li>
              </ul>
            </div>
          </div>

          <div className="bg-black/60 p-4 rounded-md border border-cyan-900/30">
            <p className="text-gray-300">
              This guide provides all known enumeration, brute-force, and exploitation techniques for commonly exposed services.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServiceEnumeration;
