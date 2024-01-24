export function formatViews(views: number): string {
  if (views >= 1000000) {
    return (views / 1000000).toFixed(1) + ' M de vistas';
  } else if (views >= 1000) {
    return (views / 1000).toFixed(1) + ' K de vistas';
  } else {
    return views.toString() + ' vistas';
  }
}

export function formatSubscribers(subs: number): string {
  if (subs >= 1000000) {
    return (subs / 1000000).toFixed(2) + ' M de suscriptores';
  } else if (subs >= 1000) {
    return (subs / 1000).toFixed(2) + ' K de suscriptores';
  } else {
    return subs.toString() + ' suscriptores';
  }
}

export function format(date: number): string {
  if (date >= 1000000) {
    return (date / 1000000).toFixed(2) + ' M';
  } else if (date >= 1000) {
    return (date / 1000).toFixed(2) + ' K';
  } else {
    return date.toString();
  }
}
