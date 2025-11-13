/**
 * IP 地址验证和解析工具函数
 */

/**
 * 验证 IPv4 地址段（0-255）
 */
export function isValidIPv4Segment(segment: string, allowLeadingZeros: boolean = false): boolean {
  if (!segment || segment.trim() === "") return false;

  // 不允许前导零
  if (!allowLeadingZeros && segment.length > 1 && segment[0] === "0") {
    return false;
  }

  const num = parseInt(segment, 10);
  return !isNaN(num) && num >= 0 && num <= 255 && num.toString() === segment;
}

/**
 * 验证 IPv4 地址
 */
export function isValidIPv4(ip: string, allowLeadingZeros: boolean = false): boolean {
  if (!ip || typeof ip !== "string") return false;

  const segments = ip.split(".");
  if (segments.length !== 4) return false;

  return segments.every((seg) => isValidIPv4Segment(seg, allowLeadingZeros));
}

/**
 * 验证 CIDR 掩码（IPv4: 0-32, IPv6: 0-128）
 */
export function isValidCIDRMask(mask: string, isIPv6: boolean = false): boolean {
  if (!mask || typeof mask !== "string") return false;

  const num = parseInt(mask, 10);
  if (isNaN(num)) return false;

  const max = isIPv6 ? 128 : 32;
  return num >= 0 && num <= max;
}

/**
 * 验证 IPv6 地址（简化版，使用正则）
 * 支持压缩表示法 :: 和混合 IPv4/IPv6
 */
export function isValidIPv6(ip: string): boolean {
  if (!ip || typeof ip !== "string") return false;

  // 简化的 IPv6 验证正则
  // 支持：
  // - 标准格式：2001:0db8:85a3:0000:0000:8a2e:0370:7334
  // - 压缩格式：2001:db8::1
  // - 混合格式：::ffff:192.168.0.1
  const ipv6Regex =
    /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]+|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;

  return ipv6Regex.test(ip);
}

/**
 * 从文本中提取 IP 地址
 */
export function extractIPFromText(text: string): { ip: string; cidr?: string } | null {
  if (!text || typeof text !== "string") return null;

  // 尝试提取 IPv4
  const ipv4Regex = /(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(?:\/(\d{1,2}))?/;
  const ipv4Match = text.match(ipv4Regex);
  if (ipv4Match) {
    const ip = ipv4Match[1];
    const cidr = ipv4Match[2];
    if (isValidIPv4(ip, true)) {
      return { ip, cidr };
    }
  }

  // 尝试提取 IPv6
  const ipv6Regex = /([0-9a-fA-F:]+(?::[0-9a-fA-F:]+)*|::)(?:\/(\d{1,3}))?/;
  const ipv6Match = text.match(ipv6Regex);
  if (ipv6Match) {
    const ip = ipv6Match[1];
    const cidr = ipv6Match[2];
    if (isValidIPv6(ip)) {
      return { ip, cidr };
    }
  }

  return null;
}

/**
 * 解析 IP 地址为段数组（IPv4）
 */
export function parseIPv4ToSegments(ip: string): string[] {
  if (!ip) return ["", "", "", ""];
  const segments = ip.split(".");
  return [segments[0] || "", segments[1] || "", segments[2] || "", segments[3] || ""];
}

/**
 * 将段数组组合为 IP 地址（IPv4）
 */
export function segmentsToIPv4(segments: string[]): string {
  // 如果所有段都为空，返回空字符串
  if (segments.every((seg) => !seg || seg.trim() === "")) {
    return "";
  }
  return segments.join(".");
}
