/**
 * The Bishop's teachings from youtube.com/@HopeCKF (channel UCTvJ36o0Gsg111oBAmH5Eng),
 * newest first, as of Nov 16, 2026. Titles are kept in their own capitals; only the
 * repeated "Bishop Mikal D. Boddie, D.Div." suffix and extra spaces were trimmed,
 * and "l / ll" in the Sacraments titles were read as the numerals I / II.
 *
 * To add one: copy the 11-character id from the watch URL (youtube.com/watch?v=ID)
 * and put a new line at the top.
 */
export type Video = { id: string; title: string; sub?: string; date: string };

export const videos: Video[] = [
  { id: "z_SUjnchZXM", title: "THE SACRAMENTS I", sub: "Holy Communion • The Lord’s Supper", date: "2026-11-12" },
  { id: "KH0tSn-KaoY", title: "THE SACRAMENTS II", sub: "Holy Communion • The Lord’s Supper", date: "2026-11-12" },
  { id: "aFhlE1JZuPo", title: "THE SPIRIT OF ICHABOD IN THE CHURCH", date: "2026-11-04" },
  { id: "TCT0HUGhFoo", title: "WHEN LEADERS DON’T WANT TO BE LED", date: "2026-10-30" },
  { id: "VlvggDDp050", title: "WHEN GOD USES WHAT YOU HAVE LEFT", sub: "Word-Bearer", date: "2026-10-27" },
  { id: "xww5o0bi1Xc", title: "THE CHURCH IS NOT A DEMOCRACY; IT IS A THEOCRACY", date: "2026-10-21" },
  { id: "RS4wdYczBZg", title: "WHEN WORSHIP BECOMES ROUTINE INSTEAD OF RELATIONSHIP", date: "2026-10-15" },
  { id: "4l4SleN3GVk", title: "WATCH OUT FOR THE DREAM KILLERS", date: "2026-10-14" },
  { id: "bfXdcBf51aY", title: "SPIRITUAL CONTAMINATION THROUGH CASUAL FELLOWSHIP", date: "2026-10-10" },
  { id: "hrUD_SawdCk", title: "THE GIFT OF GRACE DOES NOT EXCUSE BUT TRANSFORMS", date: "2026-10-10" },
  { id: "InwKx_r4aOM", title: "GRACE FOR YOUR ASSIGNMENT", date: "2026-10-10" },
  { id: "C4TT8ldywEw", title: "FROM MEDIOCRITY TO MATURITY", date: "2026-10-10" },
  { id: "kRK3xgFHdXk", title: "A CALL TO HOLINESS IN THE AGE OF SOCIAL MEDIA", date: "2026-09-09" },
];
